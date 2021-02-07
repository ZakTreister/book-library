import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ContentChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { InputMetaData } from '../../models/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent implements OnInit {
  @ContentChild('footerButtons') public footerButtons: TemplateRef<any>;

  @Output() public onSubmit: EventEmitter<any> = new EventEmitter<any>();

  @Input() public metaData: InputMetaData[];
  @Input() public item: any;

  public groupInstance: FormGroup;

  constructor(private fb: FormBuilder,
    private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.createGroup()
  }
  createGroup() {
    let group = this.fb.group({});
    for (let i = 0; i < this.metaData.length; i++) {
      const config = this.metaData[i];
      let state = this.item ? this.item[config.field] : null;
      let validation = config.required ? [Validators.required] : [];
      if (config.validation) {
        validation = [...validation, ...config.validation]
      }
      let control = this.fb.control(state, validation);
      group.addControl(config.field.toString(), control)
    }
    this.groupInstance = group;
    this.cd.markForCheck()
  }

  submit() {
    this.onSubmit.emit(this.groupInstance.getRawValue());
  }

}
