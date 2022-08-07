import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
