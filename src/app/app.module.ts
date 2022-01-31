import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { thirdTopNavBar } from './navigation/thirdtopnavbar.component';
import { TipTopNavBar } from './navigation/tiptopnavbar.component';
import { TopNavBar } from './navigation/topnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBar,
    TipTopNavBar,
    thirdTopNavBar
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
