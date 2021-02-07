import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalService } from '../../components/modal/modal.service';
import { Button } from '../../models/button';
import { ModalFormConfig } from '../../models/forms';
import { IModalBodyComponet } from '../../models/modal';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalFormComponent implements IModalBodyComponet<ModalFormConfig> {
  
  public config: ModalFormConfig<any>;
  
  constructor(private modal: ModalService) { }

  setProps(props: ModalFormConfig) {
    this.config = props;
  };

  closeModal(values:any = null){
    this.modal.closeModal(values);
  }
}
