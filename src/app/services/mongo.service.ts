import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

const BASE_URL = 'https://mean-heroku-app.herokuapp.com';

@Injectable()
export class MongoService {

  constructor(private http: Http) { }

  getHomeInfo() {
    return this.http.get(BASE_URL + '/mean').map(this.extractData);
  }

  getAdminInfo() {
    return this.http.get(BASE_URL + '/info').map(this.extractData);
  }

  private extractData(res: Response) {
    return res.json();
  }
}
