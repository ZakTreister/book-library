import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ConfirmConfig, IModalBodyComponet } from 'src/app/shared/models/modal';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmComponent implements IModalBodyComponet<ConfirmConfig> {
  public confirm: string;

  constructor(private modal:ModalService) { }

  setProps(props: ConfirmConfig) {
    this.confirm = props.confirm;
  }

  resolve(resolution){
    this.modal.closeModal(resolution)
  }
}
