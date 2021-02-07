import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConfirmComponent } from 'src/app/shared/components/modal/confirm/confirm.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ModalFormComponent } from 'src/app/shared/forms/modal-form/modal-form.component';
import { Book } from 'src/app/shared/models/book';
import { Button } from 'src/app/shared/models/button';
import { DataType, InputMetaData, ModalFormConfig } from 'src/app/shared/models/forms';
import { ConfirmConfig } from 'src/app/shared/models/modal';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {

  public list: Book[];
  public toolbar: Button[] = [
    {
      label: 'Create Book',
      styleClass: 'btn btn-primary',
      onClick: () => this.openBookForm()
    }
  ]
  public metaData: InputMetaData<Book>[] = [
    {
      field: 'title',
      label: 'Title',
      required: true,
      dataType: DataType.Text,
      errorMessages: { 'required': 'Title is required' },
    },
    {
      field: 'author',
      dataType: DataType.Text,
      label: 'Author',
      required: true,
      errorMessages: { 'required': 'Auther is required' },
    },
    {
      field: 'date',
      dataType: DataType.Date,
      label: 'Date',
      required: true,
      errorMessages: { 'required': 'Date is required' },
    },
    {
      field: 'imageUrl',
      dataType: DataType.Text,
      label: 'Image URL',
      required: false
    }
  ]

  constructor(private bookService: BookService,
    private modal: ModalService) {

  }
  ngOnInit(): void {
    this.bookService.getBooks().subscribe(res => {
      this.list = res;
    });
  }

  deleteBook(book: Book, index: number) {
    this.modal.confirm(`Are you sure you would like to delete '${book.title}'? This action can not be undone.`).subscribe(res => {
      if (res) {
        this.list.splice(index, 1);
        this.list = [...this.list];
      }
    });
  }

  openBookForm(book?: Book, index?: number) {
    this.modal.openFormModal<Book>(`${!book ? 'Create' : 'Edit'} Book`, this.metaData, book)
      .subscribe(values => {
        if (book) {
          this.list.splice(index, 1, values);
        } else {
          this.list.push(values);
        }
        this.list = [...this.list];
      });
  }

}