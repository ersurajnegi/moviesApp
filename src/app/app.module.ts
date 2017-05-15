import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from 'ng2-materialize';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { ListItemComponent } from './Components/list-item/list-item.component';
import { MovieService } from './service/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterializeModule.forRoot(),
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
