import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-mobile-nav',
  templateUrl: './user-mobile-nav.component.html',
  styleUrls: ['./user-mobile-nav.component.css']
})
export class UserMobileNavComponent {
  @Input() sidenavstatus:boolean =false

}
