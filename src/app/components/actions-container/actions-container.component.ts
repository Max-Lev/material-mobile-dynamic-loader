import { Component, OnInit, ViewChild, ComponentDecorator, ChangeDetectorRef } from '@angular/core';
import { MobileContainerDirective } from '../../directives/mobile-container.directive';
import { ComponentFactoryResolver } from '@angular/core';
import { ActionsComponent } from './actions/actions.component';
import { MobileDetectionService } from '../../services/mobile-detection.service';
import { ActionsMobileComponent } from './actions-mobile/actions-mobile.component';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-actions-container',
  templateUrl: './actions-container.component.html',
  styleUrls: ['./actions-container.component.css']
})
export class ActionsContainerComponent implements OnInit {

  list:any[] = [
    {name:'xxx'},
    {name:'zzz'}
  ];

  @ViewChild(MobileContainerDirective) appMobileContainer: MobileContainerDirective;

  constructor(private mobileDetectionService: MobileDetectionService,
    private ref: ChangeDetectorRef,
    private componentFactoryResolver: ComponentFactoryResolver) {

  };

  ngOnInit() {
    this.componentsResolver$();
  };

  componentsResolver$() {
    this.mobileDetectionService.componentsResolver([Breakpoints.Small,Breakpoints.XSmall],
      ActionsComponent,ActionsMobileComponent).subscribe((component:any)=>{
        this.componentResolver(component);
        this.ref.markForCheck();
    });
  };

  isMobile$(){
    this.mobileDetectionService.getBreakPoints$([Breakpoints.Small,Breakpoints.XSmall],[ActionsComponent,ActionsMobileComponent]).subscribe((isMobile) => {
      if (isMobile) {
        this.componentResolver(ActionsMobileComponent)
      } else {
        this.componentResolver(ActionsComponent)
      }
      this.ref.markForCheck();
    });
  };

  componentResolver(component: any) {
    let componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(component);

    let viewContainerRef =
      this.appMobileContainer.viewContainerRef;

    viewContainerRef.clear();
    
    let componentRef =
      viewContainerRef.createComponent(componentFactory);
      componentRef.instance['list'] = this.list;
  };

}
