import { Component, OnInit, ChangeDetectionStrategy, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('modalBody', { read: ViewContainerRef }) public modalBody: ViewContainerRef;
  public showModal: boolean = false;
  public title: string;

  constructor(private modalService: ModalService,
    private factoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.modalService.modalState().subscribe(config => {
      if (config) {
        let factory = this.factoryResolver.resolveComponentFactory(config.component)
        let bodyComponent = this.modalBody.createComponent(factory);
        bodyComponent.instance.setProps(config.properties);
        this.title = config.title;
        this.showModal = true;
      } else {
        this.modalBody.clear();
        this.title = null;
        this.showModal = false;
      }
      this.cd.markForCheck();
    })
  }

  public closeModal() {
    this.modalService.closeModal()
  }
}
