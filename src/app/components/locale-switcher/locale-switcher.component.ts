import { NgLocaleLocalization, registerLocaleData } from '@angular/common';
import { Component, OnInit, TRANSLATIONS } from '@angular/core';

@Component({
  selector: 'app-locale-switcher',
  templateUrl: './locale-switcher.component.html',
  styleUrls: ['./locale-switcher.component.css']
})
export class LocaleSwitcherComponent implements OnInit {

  constructor() { }

  ngOnInit( ): void {
  }

  changeLocale( locale:string ){
    //here was the locale switch going to happen but i did not have more time left
  }

}
