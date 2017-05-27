import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { MoviesModule } from './modules/moviesModule/movies.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    MoviesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
