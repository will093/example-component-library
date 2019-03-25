import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BazDirective } from './baz.directive';

@NgModule({
  declarations: [BazDirective],
  imports: [
    CommonModule
  ]
})
export class BazModule { }
