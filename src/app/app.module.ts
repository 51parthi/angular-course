import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { Test1Component } from './test1/test1.component';
import { FirstmodulesModule } from './firstmodules/firstmodules.module';
// import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    Test1Component,
    // Test1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstmodulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
