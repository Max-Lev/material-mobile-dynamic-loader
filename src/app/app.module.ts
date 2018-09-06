import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActionsComponent } from './components/actions-container/actions/actions.component';
import { ActionsMobileComponent } from './components/actions-container/actions-mobile/actions-mobile.component';
import { ActionsContainerComponent } from './components/actions-container/actions-container.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MobileContainerDirective } from './directives/mobile-container.directive';
import { MobileDetectionService } from './services/mobile-detection.service';


@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    ActionsMobileComponent,
    ActionsContainerComponent,
    MobileContainerDirective
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
  ],
  providers: [
    MobileDetectionService
  ],
  entryComponents: [
    ActionsComponent,
    ActionsMobileComponent
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
