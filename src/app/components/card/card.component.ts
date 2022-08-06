import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  buttonClicked1: string = '';
  buttonClicked2: string = '';
  buttonClicked3: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(value: number) {
    switch (value) {
      case 1:
        if (this.buttonClicked1 == 'buttonClicked') {
          this.buttonClicked1 = '';
        }
        else {
          this.buttonClicked1 = 'buttonClicked';
        }
        break;
      case 2:
        if (this.buttonClicked2 == 'buttonClicked') {
          this.buttonClicked2 = '';
        }
        else {
          this.buttonClicked2 = 'buttonClicked';
        }
        break;
      case 3:
        if (this.buttonClicked3 == 'buttonClicked') {
          this.buttonClicked3 = '';
        }
        else {
          this.buttonClicked3 = 'buttonClicked';
        }
        break;
      default: return;
    }
  }
}
