import { Component } from '@angular/core';
import {RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent {

}
