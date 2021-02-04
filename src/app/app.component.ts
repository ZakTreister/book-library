import { Component, OnInit } from '@angular/core';
import { BookService } from './shared/services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public list: any;
  constructor(private bookService: BookService) {

  }
  ngOnInit(): void {
    this.bookService.getBooks().subscribe(res=>{
      this.list = res;
    });
  }
}
