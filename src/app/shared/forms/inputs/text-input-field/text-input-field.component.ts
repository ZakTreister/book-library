import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputMetaData } from 'src/app/shared/models/forms';

@Component({
  selector: 'app-text-input-field',
  templateUrl: './text-input-field.component.html',
  styleUrls: ['./text-input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextInputFieldComponent implements OnInit {
  @Input() public config: InputMetaData;
  @Input() public group: FormGroup;
  public get control(): FormControl {
    return this.group.controls[this.config.field.toString()] as FormControl;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
