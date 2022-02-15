import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SportsLayoutComponent } from './categories/sports-layout.component';
import { HomeLayoutComponent } from './categories/home-layout.component';
import { WomensLayoutComponent } from './categories/Womens/womens-layout.component';
import { MensLayoutComponent } from './categories/Mens/mens-layout.component';
import { KidsLayoutComponent } from './categories/Kids/kids-layout.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Home', component: HomeLayoutComponent},
  {path: 'Sports', component: SportsLayoutComponent},
  {path: 'Womens', component: WomensLayoutComponent},
  {path: 'Mens', component: MensLayoutComponent},
  {path: 'Kids', component: KidsLayoutComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
