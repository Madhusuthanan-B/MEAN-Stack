import { Component, OnInit } from '@angular/core';
import { MongoService } from '../services/mongo.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homePageInfo: HomePage;
  showSpinner$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private mongoSvc: MongoService) { }

  ngOnInit() {
    this.mongoSvc.getHomeInfo().subscribe((info: HomePage) => {
      this.homePageInfo = info;
      this.showSpinner$.next(false);
    });
  }

}
