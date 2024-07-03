import { Component } from '@angular/core';

@Component({
  selector: 'button[app-app-button]',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.css'],
  host :{
    class:'btn'
  }
})
export class AppButtonComponent {

}
