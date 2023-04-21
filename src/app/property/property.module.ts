import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingListComponent } from './housing-list/housing-list.component'

@NgModule({
  declarations: [
    HousingListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HousingListComponent
  ]
})
export class PropertyModule { }
