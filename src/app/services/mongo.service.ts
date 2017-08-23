import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

const SERVICE_URL = 'https://mean-heroku-app.herokuapp.com/info';
// const SERVICE_URL = 'http://localhost:3000/info';

@Injectable()
export class MongoService {

  constructor(private http: Http) { }

  getAdminInfo() {
    return this.http.get(SERVICE_URL).map(this.extractData);
  }

  private extractData(res: Response) {
    return res.json();
  }
}
