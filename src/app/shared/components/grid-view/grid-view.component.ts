import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef, QueryList, ContentChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { Button } from '../../models/button';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridViewComponent<T = any>{
  @ContentChild(TemplateRef) public itemTemplate: TemplateRef<any>;

  @Input() public gridTitle: string;
  @Input() public data: T[];
  @Input() public toolbar: Button[];
  constructor() { }

}
