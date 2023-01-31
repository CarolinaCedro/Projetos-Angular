import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CalculadoraModuleModule} from "./calculadora-module/calculadora-module.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculadoraModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
