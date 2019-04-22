import { BarModule, BazModule, FooModule } from 'example-component-library';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FooModule,
    BarModule,
    BazModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
