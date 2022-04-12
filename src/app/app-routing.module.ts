import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SportsLayoutComponent } from './categories/Sports/sports-layout.component';
import { HomeLayoutComponent } from './categories/Home/home-layout.component';
import { WomensLayoutComponent } from './categories/Womens/womens-layout.component';
import { MensLayoutComponent } from './categories/Mens/mens-layout.component';
import { KidsLayoutComponent } from './categories/Kids/kids-layout.component';
import { AddProductComponent } from './store/add-product/add-product.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Home', component: HomeLayoutComponent},
  {path: 'Sports', component: SportsLayoutComponent},
  {path: 'Womens', component: WomensLayoutComponent},
  {path: 'Mens', component: MensLayoutComponent},
  {path: 'Kids', component: KidsLayoutComponent},
  {path: 'admin', component: AddProductComponent},
  {path: 'auth', component: AuthenticationComponent}
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
