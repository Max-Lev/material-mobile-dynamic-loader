import { Injectable, ComponentFactory, Component, TypeDecorator } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { ComponentFactoryResolver } from '@angular/core/src/render3';
import { NgClass } from '@angular/common';

export interface ComponentsList{
  //defaultComponent:Component;
  mobileComponent:Component[];
}

@Injectable({
  providedIn: 'root'
})
export class MobileDetectionService {

  private isMobile$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private components$: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private breakpointObserver: BreakpointObserver) {
    
  };

  getBreakPoints$(breakpoints:string[],components:any[]): Observable<boolean> {
    
    this.breakpointObserver.observe(breakpoints).subscribe((layout) => {
      console.log(layout)
      return (layout.matches) ? this.isMobile$.next(true) : this.isMobile$.next(false);
    });

    return this.isMobile$;

  };

  componentsResolver(breakpoints:string[],defaultComponent:any,mobileComponent:any):Observable<any>{
    this.breakpointObserver.observe(breakpoints).subscribe((layout) => {
      return (layout.matches) ? this.components$.next(mobileComponent) : this.components$.next(defaultComponent);
    });
    return this.components$;
  };

}
