import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent {
  @Output() public onDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onEdit: EventEmitter<any> = new EventEmitter<any>();
  @Input() public book: Book;

  constructor() { }

  editBook() {
    this.onEdit.emit()
  }
  
  deleteBook() {
    this.onDelete.emit()
  }

}
