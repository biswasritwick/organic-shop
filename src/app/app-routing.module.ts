import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsitesLayoutComponent } from './layouts/coustomer-layouts';
import { UserHomeComponent } from './user-folder/user-home/user-home.component';
import { UserAboutComponent } from './user-folder/user-about/user-about.component';
import { UserContactComponent } from './user-folder/user-contact/user-contact.component';

const routes: Routes = [
  {    //main layouts-----------------------------------
    path: '',
    component: WebsitesLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'user-home',
        pathMatch: 'full'
      },
      {
        path: 'user-home',
        component: UserHomeComponent
      },
      {
        path: 'user-about',
        component: UserAboutComponent
      },
      {
        path: 'user-contact',
        component: UserContactComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
