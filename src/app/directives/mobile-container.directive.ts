import { Directive, ViewContainerRef, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { timeout } from 'q';

@Directive({
  selector: '[appMobileContainer]'
})
export class MobileContainerDirective implements OnChanges,AfterViewInit{
  

  constructor(public viewContainerRef: ViewContainerRef) {
    console.log(this.viewContainerRef);
  };

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngAfterViewInit(): void {
   setTimeout(() => {
    console.log(this)
   }, 1000);
  };

}
