const https = require('https');
const PaytmConfig = require('../../config/config').paytmConfig
// const appConfig = require('../../config/config').appConfig;
const checksum_lib = require('../checksum');

const healthcheck = (req, res) => {
  res.send('Working').status(200);
};

const initiatePayment = (req, res) => {
  try {
    var queryParams = req.query;
    console.log('Initialize Payment',queryParams)
    var params = {};
    params['MID'] = PaytmConfig.mid;
    params['WEBSITE'] = PaytmConfig.website;
    params['CHANNEL_ID'] = 'WAP';
    params['INDUSTRY_TYPE_ID'] = 'Retail';
    params['ORDER_ID'] = queryParams.order_id;
    params['CUST_ID'] = queryParams.phone;
    params['TXN_AMOUNT'] = queryParams.amount;
    // params['CALLBACK_URL'] = `${appConfig.hostUrl}:${appConfig.port}/paytm/api/paytm/callback`;
    // params['CALLBACK_URL'] = `http://localhost:3000/paytm/callback`;
    params['CALLBACK_URL'] = `https://biobrix-healthcare.herokuapp.com/paytm/callback`;
    params['EMAIL'] = queryParams.email;
    params['MOBILE_NO'] = queryParams.phone; // customer 10 digit mobile no.
    
    checksum_lib.genchecksum(params, PaytmConfig.key, function (err, checksum) {
      console.log('generated checksum: ', checksum);
      var txn_url = PaytmConfig.transactionUrl;
      var form_fields = "";
      for (var x in params) {
        form_fields += "<input type='hidden' name='" + x + "' value='" + params[x] + "' >";
      }
      form_fields += "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "' >";
  
      const htmlHeader = '<head><title>Checkout Page</title></head>';
      const htmlForm = `<form method="post" action="${txn_url}" name="f1">${form_fields}</form>`;
      const htmlScript = '<script type="text/javascript">document.f1.submit();</script>';
      const htmlBody = `<body><center><h1>Please do not refresh this page...</h1></center>${htmlForm}${htmlScript}</body>`;
  
      res.clearCookie("TXNID");
      res.clearCookie("STATUS");
      res.clearCookie("RESPCODE");
      res.clearCookie("RESPMSG");
      res.clearCookie("TXNDATE");
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<html>${htmlHeader}${htmlBody}</html>`);
      res.end();
    });  
  } catch (error) {
    console.log('Error',error);
    res.status(500).send('Something went wrong');
  }
};

const callback = (req, res) => {
  try {
    console.log('confirming order');
    console.log('req body', req.body);
    let body = req.body;
    console.log('received complete callback request');
    var post_data = body;
  
    // received params in callback
    console.log('Callback Response: ', post_data, "\n");
  
    // verify the checksum
    var checksumhash = post_data.CHECKSUMHASH;
    // delete post_data.CHECKSUMHASH;
    var result = checksum_lib.verifychecksum(post_data, PaytmConfig.key, checksumhash);
    console.log("Checksum Result => ", result, "\n");
  
    // Send Server-to-Server request to verify Order Status
    var params = { "MID": PaytmConfig.mid, "ORDERID": post_data.ORDERID };
  
    checksum_lib.genchecksum(params, PaytmConfig.key, function (err, checksum) {
      console.log('generated checksum for verification: ', checksum);
      params.CHECKSUMHASH = checksum;
      post_data = 'JsonData=' + JSON.stringify(params);
  
      var options = {
        hostname: PaytmConfig.hostName,
        port: 443,
        path: '/merchant-status/getTxnStatus',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': post_data.length
        }
      };
  
      // Set up the request
      var response = "";
      console.log('Checking transaction status');
      var post_req = https.request(options, function (post_res) {
        post_res.on('data', function (chunk) {
          console.log('receiving data...');
          response += chunk;
        });
  
        post_res.on('end', function () {
          console.log('S2S Response: ', response, "\n");
          const parsedJson = JSON.parse(response);
          res.cookie('TXNID', parsedJson.TXNID);
          res.cookie('STATUS', parsedJson.STATUS);
          res.cookie('RESPCODE', parsedJson.RESPCODE);
          res.cookie('RESPMSG', parsedJson.RESPMSG);
          res.cookie('TXNDATE', parsedJson.TXNDATE);
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(response);
          res.end();
        });
      });
  
      // post the data
      post_req.write(post_data);
      post_req.on('error', (err) => {
        console.log('Error occurred while checking transation status', err);
      });
      post_req.end();
    }); 
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong');
  }
};

module.exports = {
  healthcheck,
  initiatePayment,
  callback
}