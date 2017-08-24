import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() spinnerValue: Observable<boolean>;
  private showSpinner: boolean;

  constructor() { }

  ngOnInit() {
    this.spinnerValue.subscribe(val => {
      this.showSpinner = val;
    });
  }

}
