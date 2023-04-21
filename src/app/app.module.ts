import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SitepageModule} from './sitepage/sitepage.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SitepageModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
