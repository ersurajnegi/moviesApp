import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, Response }          from '@angular/http';


import * as api from '../../../apiInfo/apiInfo';

@Injectable()
export class MovieService {

  constructor(private _http: Http) { }

  getUpcomingMovies(){
   
      return this._http.get(api.apiUrl['upcoming']+'?api_key='+api.apiKey)
              .map(this.extractData)
              .catch(this.handleError);
  }

  private extractData(res: Response) {
    
    return res.json();
  }

  private handleError (error: Response | any) {
    return Observable.throw(error);
  }
}
