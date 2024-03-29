import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { UserModuleComponent } from './user-module/user-module.component';
import { AddProviderComponent } from './Providers/add-provider/add-provider.component';
import { AddProductComponent } from './Products/add-product/add-product.component';
import { SearchProductComponent } from './Products/search-product/search-product.component';
import { ModifyProductComponent } from './Products/modify-product/modify-product.component';

import { DataService } from './data.service';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ReportOneComponent } from './report-one/report-one.component';
import { ReportTwoComponent } from './report-two/report-two.component';
import { ShopCarComponent } from './shop-car/shop-car.component';
import { SearchProductAdminComponent } from './Products/search-product-admin/search-product-admin.component';

const Rutas: Routes = [
  {
    path: '', redirectTo: '/user-login', pathMatch: 'full'
  },
  {
    path: 'user-login', component:UserLoginComponent
  },
  {
    path: 'admin-login', component:AdminLoginComponent
  },
  {
    path: 'user-register', component:UserRegisterComponent
  },
  {
    path: 'user-module', component:UserModuleComponent,
    children:[
      {
        path: 'list-products', component:ProductListComponent
      },
      {
        path: 'search-product', component: SearchProductComponent
      },
      {
        path: 'shop-car', component: ShopCarComponent
      }
    ]
  },
  {
    path: 'admin-module', component:AdminModuleComponent,
    children:[
      {
        path: 'list-products', component:ProductListComponent
      },
      {
        path: 'add-product', component:AddProductComponent
      },
      {
        path: 'modify-product', component: ModifyProductComponent
      },
      {
        path: 'search-product-admin', component: SearchProductAdminComponent
      },
      {
        path: 'add-provider', component: AddProviderComponent
      },
      {
        path: 'report-one', component:ReportOneComponent
      },
      {
        path: 'report-two', component:ReportTwoComponent
      },
    ]
  },

]


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AdminLoginComponent,
    ModifyProductComponent,
    ProductListComponent,
    AdminModuleComponent,
    UserModuleComponent,
    AddProviderComponent,
    AddProductComponent,
    SearchProductComponent,
    UserRegisterComponent,
    ReportOneComponent,
    ReportTwoComponent,
    ShopCarComponent,
    SearchProductAdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Rutas),
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
