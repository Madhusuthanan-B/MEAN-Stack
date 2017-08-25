import { Component, OnInit } from '@angular/core';
import { MongoService } from '../services/mongo.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  checkBoxes: Array<CheckBox>;
  checkboxList: CheckBoxList;
  homePageInfo: HomePage;
  showSpinner$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private mongoSvc: MongoService) { }

  ngOnInit() {
    this.mongoSvc.getHomeInfo().subscribe((info: HomePage) => {
      this.homePageInfo = info;
      this.createTodoList();
      this.showSpinner$.next(false);
    });
  }

  createTodoList() {
    this.checkBoxes = this.homePageInfo.todo_list.map(x => {
      return { id: '123', name: x.todo, value: x.todo, label: x.todo, checked: x.done, disabled: true };
    });
    this.checkboxList = {
      checkboxes: this.checkBoxes
    };
  }

}
