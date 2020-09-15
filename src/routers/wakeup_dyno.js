const fetch = require('node-fetch')

const wakeUpDyno = url => {
    const milliseconds = 29 * 60000;
    setTimeout(() => { 
        try { 
            fetch(url).then(()=>{
                console.log('waking up dyno')
            })
        }
        catch (err) {
            console.log(`Error fetching ${url}`);
        }
        finally {
            wakeUpDyno(url);
        }

    }, milliseconds);
};

module.exports = wakeUpDyno;