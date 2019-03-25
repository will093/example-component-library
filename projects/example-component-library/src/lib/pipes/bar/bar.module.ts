import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarPipe } from './bar.pipe';

@NgModule({
  declarations: [BarPipe],
  imports: [
    CommonModule
  ]
})
export class BarModule { }
