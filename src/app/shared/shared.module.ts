import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { DynamicFormComponent } from './forms/dynamic-form/dynamic-form.component';
import { ModalFormComponent } from './forms/modal-form/modal-form.component';
import { TextInputFieldComponent } from './forms/inputs/text-input-field/text-input-field.component';
import { DateInputFieldComponent } from './forms/inputs/date-input-field/date-input-field.component';
import { TitlePipe } from './pipes/title.pipe';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldComponent } from './forms/dynamic-field/dynamic-field.component';
import { ConfirmComponent } from './components/modal/confirm/confirm.component';

const COMPONENTS = [
  GridViewComponent,
  BookCardComponent,
  ModalComponent,
  DynamicFormComponent,
  ModalFormComponent,
  TextInputFieldComponent,
  DateInputFieldComponent,
  ButtonComponent
]

const PIPES = [
  TitlePipe
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    DynamicFieldComponent,
    ConfirmComponent,
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    TitleCasePipe
  ]
})
export class SharedModule { }
