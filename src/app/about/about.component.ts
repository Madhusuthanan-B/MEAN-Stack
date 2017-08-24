import { Component, OnInit } from '@angular/core';
import { MongoService } from '../services/mongo.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  adminInfo: AdminInfo;
  showSpinner$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private mongoSvc: MongoService) { }

  ngOnInit() {
    this.mongoSvc.getAdminInfo().subscribe((info: AdminInfo) => {
      this.adminInfo = info;
      this.showSpinner$.next(false);
    });
  }

}
