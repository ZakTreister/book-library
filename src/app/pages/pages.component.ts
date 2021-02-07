import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <router-outlet></router-outlet>
    <app-modal></app-modal>`
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
