import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }
