import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatModule } from "./mat/mat.module";
import { InternsComponent } from './interns/interns.component';
import { AudienceComponent } from './audience/audience.component';
import { HistComponent } from './hist/hist.component';
import { LinecComponent } from './linec/linec.component';
import { IntcvComponent } from './intcv/intcv.component';
import { IndexComponent } from './index/index.component';
@NgModule({
  declarations: [
    AppComponent,
    InternsComponent,
    AudienceComponent,
    HistComponent,
    LinecComponent,
    IntcvComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
