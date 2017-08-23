import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

const PROD_SERVICE_URL = 'https://mean-heroku-app.herokuapp.com/info';
const DEV_SERVICE_URL = 'http://localhost:3000/info';

@Injectable()
export class MongoService {

  url: string;

  constructor(private http: Http) {
    this.url = environment.production ? PROD_SERVICE_URL : DEV_SERVICE_URL;
  }

  getAdminInfo() {
    return this.http.get(this.url).map(this.extractData);
  }

  private extractData(res: Response) {
    return res.json();
  }
}
