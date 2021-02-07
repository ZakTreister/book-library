import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { ModalConfig } from '../../models/modal';

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
}
