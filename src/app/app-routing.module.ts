import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsitesLayoutComponent } from './layouts/coustomer-layouts/websites-layout/websites-layout.component';
import { UserHomeComponent } from './user-folder/user-home/user-home.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
