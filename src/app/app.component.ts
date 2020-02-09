import { Component, ViewChild, ViewContainerRef, OnInit, ComponentFactoryResolver, Injector } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('lazyComponent', { read: ViewContainerRef}) 
  public mobileContentContainer: ViewContainerRef;

  title = 'lazy-load-select';

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector) {}

  public async ngOnInit(): Promise<void> {
    const { LazyComponent } = await import('./lazy/lazy/lazy.component');
    const mobileContentFactory = this.componentFactoryResolver.resolveComponentFactory(LazyComponent);
    this.mobileContentContainer.createComponent(mobileContentFactory, null, this.injector);
  }

}
