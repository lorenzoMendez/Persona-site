import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EjemploComponent } from './Components/ejemplo/ejemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    //Etiquetas
    EjemploComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
