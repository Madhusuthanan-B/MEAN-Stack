import { Component, OnInit } from '@angular/core';
import { MongoService } from '../services/mongo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private mongoSvc: MongoService) { }

  ngOnInit() {
    this.mongoSvc.getAdminInfo().subscribe(res => {
      console.log('Response from mongo:', res);
    });
  }

}
