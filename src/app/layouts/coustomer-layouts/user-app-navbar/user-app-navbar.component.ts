import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-user-app-navbar',
  templateUrl: './user-app-navbar.component.html',
  styleUrls: ['./user-app-navbar.component.css']
})
export class UserAppNavbarComponent {
  @Output() sidenavbar = new EventEmitter<boolean>()     
  // @HostListener("document:scroll")

  menustatus: boolean = false;    // menustatus for side nav
  heder_variable = false     //when display scroll then sidenav apply CSS

  
  // scroll() {
  //   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
  //     this.heder_variable = true

  //     if (this.menustatus = true) {           
  //       this.menustatus = false
  //       this.sidenavbar.emit(this.menustatus)
  //       // this IF Section for when display scroll,then side nav close
  //     }
  //   }
  //   else {
  //     this.heder_variable = false

  //   }
  // }

  sidenav() {   // sidenav open click function
    this.menustatus = !this.menustatus
    this.sidenavbar.emit(this.menustatus)
    // console.warn('click sidenav btn');

  }
}
