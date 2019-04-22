import { BazDirective } from './baz.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [BazDirective],
  imports: [
    CommonModule
  ],
  exports: [BazDirective]
})
export class BazModule { }
