import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  contacts: string[] = [];

  form:FormGroup = this.FormBuilder.group({
    contacts: ['', [ Validators.required ] ],
    subject:  ['', [ Validators.required ] ],
    message:  ['', [ Validators.required ] ],
  });

  constructor( private FormBuilder:FormBuilder) { }

  ngOnInit(): void {
  }


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our contact
    if (value) {
      this.contacts.push(value);
      this.form.controls['contacts'].setValue(this.contacts);
      this.form.controls['contacts'].removeValidators([ Validators.required]);
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(contact: string): void {
    const index = this.contacts.indexOf(contact);
    if (index >= 0) {
      this.contacts.splice(index, 1);
    }
    this.form.controls['contacts'].setValue(this.contacts);
    if(this.contacts.length == 0){
      this.form.controls['contacts'].addValidators([Validators.required]);
    }
    
  }

  someMethod(){
    alert('form submitted');
  }
}
