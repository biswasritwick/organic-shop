import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WebsitesLayoutComponent,UserAppNavbarComponent,UserAppFooterComponent,UserMobileNavComponent } from './layouts/coustomer-layouts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-folder/user-home/user-home.component';
import { UserAboutComponent } from './user-folder/user-about/user-about.component';
import { UserContactComponent } from './user-folder/user-contact/user-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsitesLayoutComponent,
    UserAppNavbarComponent,
    UserAppFooterComponent,
    UserHomeComponent,
    UserMobileNavComponent,
    UserAboutComponent,
    UserContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
