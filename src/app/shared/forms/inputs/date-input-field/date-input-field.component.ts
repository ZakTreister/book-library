import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputMetaData } from 'src/app/shared/models/forms';

@Component({
  selector: 'app-date-input-field',
  templateUrl: './date-input-field.component.html',
  styleUrls: ['./date-input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateInputFieldComponent implements OnInit {
  @Input() public config: InputMetaData;
  @Input() public group: FormGroup;
  public get control(): FormControl {
    return this.group.controls[this.config.field.toString()] as FormControl;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
