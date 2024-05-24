import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsitesLayoutComponent } from './layouts/coustomer-layouts/websites-layout/websites-layout.component';
import { UserAppNavbarComponent } from './layouts/coustomer-layouts/user-app-navbar/user-app-navbar.component';
import { UserAppFooterComponent } from './layouts/coustomer-layouts/user-app-footer/user-app-footer.component';
import { UserHomeComponent } from './user-folder/user-home/user-home.component';
import { UserMobileNavComponent } from './layouts/coustomer-layouts/user-mobile-nav/user-mobile-nav.component';
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
