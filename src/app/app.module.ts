import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { firstcarousel } from './categories/firstcarousel.component';
import { thirdTopNavBar } from './navigation/thirdtopnavbar.component';
import { TipTopNavBar } from './navigation/tiptopnavbar.component';
import { TopNavBar } from './navigation/topnavbar.component';
import { CardComponent } from './categories/card.component';
import { HIYACardComponent } from './categories/HIYAcard.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBar,
    TipTopNavBar,
    thirdTopNavBar,
    CardComponent,
    firstcarousel,
    HIYACardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
