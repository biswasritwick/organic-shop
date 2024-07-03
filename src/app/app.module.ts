import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WebsitesLayoutComponent,UserAppNavbarComponent,UserAppFooterComponent,UserMobileNavComponent } from './layouts/coustomer-layouts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-folder/user-main-home/user-home/user-home.component';
import { UserAboutComponent } from './user-folder/user-about/user-about.component';
import { UserContactComponent } from './user-folder/user-contact-section/user-contact/user-contact.component';
import { HomeDisplayComponent } from './user-folder/user-main-home/home-display/home-display.component';
import { HomeBestProductComponent } from './user-folder/user-main-home/home-best-product/home-best-product.component';
import { HomeTrandProductComponent } from './user-folder/user-main-home/home-trand-product/home-trand-product.component';
import { AppButtonComponent } from './user-folder/app-button/app-button.component';
import { ProductCatagorySectiionComponent } from './user-folder/user-main-home/product-catagory-sectiion/product-catagory-sectiion.component';
import { SponcersComponent } from './user-folder/user-main-home/sponcers/sponcers.component';
import { ContactBoxComponent } from './user-folder/user-contact-section/contact-box/contact-box.component';
import { ContactQuestionBoxComponent } from './user-folder/user-contact-section/contact-question-box/contact-question-box.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsitesLayoutComponent,
    UserAppNavbarComponent,
    UserAppFooterComponent,
    UserHomeComponent,
    UserMobileNavComponent,
    UserAboutComponent,
    UserContactComponent,
    HomeDisplayComponent,
    HomeBestProductComponent,
    HomeTrandProductComponent,
    AppButtonComponent,
    ProductCatagorySectiionComponent,
    SponcersComponent,
    ContactBoxComponent,
    ContactQuestionBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
