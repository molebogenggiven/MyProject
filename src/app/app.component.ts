import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  allowNewServer = false;
  CreateServerSession = 'Server session was not created before';
  constructor() {
    setTimeout(() => { this.allowNewServer = true; }, 2000);
  }
  onCreateServerSession() {
    this.CreateServerSession = 'Server session is created';
  }

}
