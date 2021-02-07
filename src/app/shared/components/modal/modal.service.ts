import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { ModalFormComponent } from '../../forms/modal-form/modal-form.component';
import { Book } from '../../models/book';
import { InputMetaData, ModalFormConfig } from '../../models/forms';
import { ConfirmConfig, ModalConfig } from '../../models/modal';
import { ConfirmComponent } from './confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private configSubject: Subject<ModalConfig> = new Subject<ModalConfig>();
  private modalResult: Subject<any> = new Subject<any>()

  constructor() { }

  modalState(): Observable<ModalConfig> {
    return this.configSubject.asObservable();
  }

  closeModal(result: any = null): void {
    this.configSubject.next(null)
    this.modalResult.next(result)
  }

  openModal<T = any>(config: ModalConfig<T>): Observable<any> {
    return new Observable(observer => {
      this.configSubject.next(config);
      this.modalResult.pipe(take(1)).subscribe(result => {
        if (result !== null) {
          observer.next(result)
        }
        observer.complete();
      })
    })
  }

  openFormModal<T>(title: string, formMetaData: InputMetaData<T>[], item: T) {
    return this.openModal<ModalFormConfig<T>>({
      title,
      component: ModalFormComponent,
      properties: {
        formMetaData, item
      },
    })
  }

  confirm(confirmation: string) {
    return this.openModal<ConfirmConfig>({
      component: ConfirmComponent,
      properties: {
        confirm: confirmation
      },
    })
  }
}
