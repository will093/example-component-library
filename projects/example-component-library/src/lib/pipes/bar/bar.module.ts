import { BarPipe } from './bar.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [BarPipe],
  imports: [
    CommonModule
  ],
  exports: [BarPipe],
})
export class BarModule { }
