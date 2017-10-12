import {
  Component,
  OnInit,
  Directive,
  Input,
  HostListener
} from '@angular/core';

@Directive({ selector: '[appValidateOnBlur]' })
export class ValidateOnBlurDirective {
  @Input('validateFormControl') validateFormControl: Object;

  @HostListener('focusout', ['$event.target'])
  onFocusout(target) {
    console.log('Focus out called');
    console.log(this.validateFormControl);
    Object.keys(this.validateFormControl).map((x: any) => {
        console.log(this.validateFormControl[x].value);
    });
  }

}
