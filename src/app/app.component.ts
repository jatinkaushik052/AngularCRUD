import { Component } from '@angular/core';
import { SideNavbarComponent } from "./component/side-navbar/side-navbar.component";

@Component({
  selector: 'app-root',
  imports: [SideNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EMS';
}
