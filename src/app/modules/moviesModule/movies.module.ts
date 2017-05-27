import { moviesRoute } from './movies.route';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterializeModule } from 'ng2-materialize';
import { MovieService } from './service/movie.service';

import * as index from './index';
@NgModule({
    declarations :[index.ListItemComponent , index.MoviesListComponent],
    imports: [CommonModule,MaterializeModule.forRoot(), moviesRoute],
    exports: [index.ListItemComponent, index.MoviesListComponent, MaterializeModule],
    providers: [MovieService]
})
export class MoviesModule{
    // static forRoot (){
    //     return {

    //     }
    // }
}