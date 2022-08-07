import { Component, OnInit } from '@angular/core';
import { Navbar } from 'src/app/interfaces/navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarArray: Navbar[] = [
    {
      name: $localize`check in`,
      icon: 'location_on',
      firstItem: 'first-item',
      lastItem: '',
      notification: 3
    },
    {
      name: $localize `events`,
      icon: 'favorite',
      firstItem: '',
      lastItem: ''
    },
    {
      name: $localize `account`,
      icon: 'person',
      firstItem: '',
      lastItem: ''
    },
    {
      name: $localize `settings`,
      icon: 'settings',
      firstItem: '',
      lastItem: 'last-item'
    }
  ]




  constructor() { }

  ngOnInit(): void {
  }
}
