import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxListComponent } from './checkbox-list.component';

describe('CheckboxListComponent: ', () => {
  let component: CheckboxListComponent;
  let fixture: ComponentFixture<CheckboxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxListComponent);
    component = fixture.componentInstance;
    component.checkBoxList = {
      checkboxes: [
        { id: 'chkWeb', name: 'Web', value: 'Web', label: 'Enable Web', checked: true },
        { id: 'chkAndroid', name: 'Android', value: 'Android', label: 'Enable Android', checked: false },
        { id: 'chkIos', name: 'Ios', value: 'Ios', label: 'Enable Ios', checked: false }
      ]
    };
    fixture.detectChanges();
  });

  describe('When a checkbox list component is initialized, then ngOnInit()', () => {

    it('should activate checkbox list only if input data is present ', () => {
      expect(component.enableCheckBoxList).toBeTruthy();
    });

  });

  describe('When check / uncheck operation is performed, then emitChange()', () => {

    it('should emit only the selected checkboxes from the checkbox list component ', () => {
      const fakeEvent = { target: { checked: true } };
      const selectedCheckboxes = [
        { id: 'chkWeb', name: 'Web', value: 'Web', label: 'Enable Web', checked: true },
        { id: 'chkIos', name: 'Ios', value: 'Ios', label: 'Enable Ios', checked: true }
      ];
      spyOn(component.selectedCheckBoxes, 'emit');
      component.emitChange(fakeEvent, component.checkBoxList.checkboxes[2]);
      expect(component.selectedCheckBoxes.emit).toHaveBeenCalledWith(selectedCheckboxes);
    });

  });

});
