import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputMetaData } from '../../models/forms';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFieldComponent implements OnInit {
  @Input() public config: InputMetaData;
  @Input() public group: FormGroup;

  public get control(): FormControl {
    return this.group.controls[this.config.field.toString()] as FormControl;
  }

  public get errors(): any[] {
    let messages = this.config?.errorMessages;
    return !messages ? [] : Object.keys(messages).map(key => {
      return {
        key, message: messages[key]
      }
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
