import { CommonModule } from '@angular/common';
import { FooComponent } from './foo.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FooComponent],
  imports: [
    CommonModule
  ],
  exports: [FooComponent]
})
export class FooModule { }
