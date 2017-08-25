import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { } from './checkbox-list.component.d';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.css']
})
export class CheckboxListComponent implements OnInit {

  @Input() checkBoxList: CheckBoxList;
  @Output() selectedCheckBoxes = new EventEmitter<Array<CheckBox>>();
  enableCheckBoxList = false;
  private selectedItems: Array<CheckBox> = [];

  constructor() { }

  ngOnInit() {
    if (!!this.checkBoxList) {
      this.enableCheckBoxList = true;
    }
  }

  emitChange(event: any, item: CheckBox) {
    item.checked = event.target.checked;
    this.selectedItems = this.checkBoxList.checkboxes.filter(chkbox => chkbox.checked === true);
    this.selectedCheckBoxes.emit(this.selectedItems);
  }

}
