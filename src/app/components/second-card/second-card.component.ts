import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/navbar.interface';

@Component({
  selector: 'app-second-card',
  templateUrl: './second-card.component.html',
  styleUrls: ['./second-card.component.css']
})
export class SecondCardComponent implements OnInit {

  userName:string = 'courtney';
  userLastName:string = 'timmons';
  followers:number = 15323;

  arrayOptions:Card[] = [
    {
      option: 'edit user',
      icon: 'person',
      lastItem: ''
    },
    {
      option: 'web statics',
      icon: 'equalizer',
      lastItem: ''
    },
    {
      option: 'upload settings',
      icon: 'construction',
      lastItem: ''
    },
    {
      option: 'events',
      icon: 'location_on',
      lastItem: 'last-item'
    }
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
