import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { firstcarousel } from './categories/firstcarousel.component';
import { thirdTopNavBar } from './navigation/thirdtopnavbar.component';
import { TipTopNavBar } from './navigation/tiptopnavbar.component';
import { TopNavBar } from './navigation/topnavbar.component';
import { CardComponent } from './categories/card.component';
import { HIYACardComponent } from './categories/HIYAcard.component';
import { AppRoutingModule } from './app-routing.module';
import { SportsLayoutComponent } from './categories/Sports/sports-layout.component';
import { HomeLayoutComponent } from './categories/Home/home-layout.component';
import { WomensLayoutComponent } from './categories/Womens/womens-layout.component';
import { MensLayoutComponent } from './categories/Mens/mens-layout.component';
import { KidsLayoutComponent } from './categories/Kids/kids-layout.component';
import { SportsNavbarComponent } from './categories/Sports/side-navbar/sports-navbar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule  } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBar,
    TipTopNavBar,
    thirdTopNavBar,
    CardComponent,
    firstcarousel,
    HIYACardComponent,
    SportsLayoutComponent,
    HomeLayoutComponent,
    WomensLayoutComponent,
    MensLayoutComponent,
    KidsLayoutComponent,
    SportsNavbarComponent,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
