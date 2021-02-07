import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent  {
  @Output() public onClick: EventEmitter<any> = new EventEmitter<any>()

  @Input() public label: string;
  @Input() public styleClass: string;
  @Input() public type: string = 'button';
  @Input() public disabled: boolean = false;

  constructor(private cd: ChangeDetectorRef) { }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['disabled'] && changes['disabled'].currentValue != changes['disabled'].previousValue) {
  //     console.log(changes);
      
  //   }
  // }

  clickEvent() {
    this.onClick.emit();
  }
}
