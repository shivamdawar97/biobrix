import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomepageApiService } from 'src/app/core/http/homepage-api.service';
import { Homepage } from 'src/app/core/models/homepage.model';

@Injectable({
  providedIn:'root'
})
export class HomepageService {

    constructor(private homepageApiService: HomepageApiService){}
    private homepage: Homepage

    getHomePage = new Promise<Homepage>( (resolve,reject) => {
      if(this.homepage) resolve(this.homepage);
      else this.homepageApiService.getHomePage().subscribe(response => {
          if(resolve)  resolve(response)
          else reject()
      });

    } )


}
