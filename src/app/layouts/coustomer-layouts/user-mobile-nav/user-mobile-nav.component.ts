import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-mobile-nav',
  templateUrl: './user-mobile-nav.component.html',
  styleUrls: ['./user-mobile-nav.component.css']
})
export class UserMobileNavComponent {
  @Input() sidenavstatus: boolean = false


  sidenav = [
    {
      number: 1,
      name: 'home',
      icone: 'fa-solid fa-house',
      routerlink: '/user-home'
    },
    {
      number: 2,
      name: 'grossery',
      icone: 'fa-solid fa-house',
      routerlink: ''
    },

    {
      number: 3,
      name: 'juice',
      icone: 'fa-solid fa-house',
      routerlink: ''
    },
    {
      number: 4,
      name: 'about',
      icone: 'fa-solid fa-house',
      routerlink: '/user-about'
    },
    {
      number: 5,
      name: 'contact',
      icone: 'fa-solid fa-house',
      routerlink: '/user-contact'
    },
    {
      number: 6,
      name: 'buskect',
      icone: 'fa-solid fa-house',
    },
  ]

}
