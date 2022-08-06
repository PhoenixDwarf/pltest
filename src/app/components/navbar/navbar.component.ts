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
      name: 'check in',
      icon: 'location_on',
      firstItem: 'first-item',
      lastItem: '',
      notification: 3
    },
    {
      name: 'events',
      icon: 'favorite',
      firstItem: '',
      lastItem: ''
    },
    {
      name: 'account',
      icon: 'person',
      firstItem: '',
      lastItem: ''
    },
    {
      name: 'settings',
      icon: 'settings',
      firstItem: '',
      lastItem: 'last-item'
    }
  ]




  constructor() { }

  ngOnInit(): void {
  }
}
