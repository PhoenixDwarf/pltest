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
      option: $localize`edit user`,
      icon: 'person',
      lastItem: ''
    },
    {
      option: $localize`web statics`,
      icon: 'equalizer',
      lastItem: ''
    },
    {
      option: $localize`upload settings`,
      icon: 'construction',
      lastItem: ''
    },
    {
      option: $localize`events`,
      icon: 'location_on',
      lastItem: 'last-item'
    }
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
