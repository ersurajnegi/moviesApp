import { moviesRoute } from './movies.route';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterializeModule } from 'ng2-materialize';
import { ListItemComponent } from './components/list-item/list-item.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import { MovieService } from './service/movie.service';

@NgModule({
    declarations :[ListItemComponent,MoviesListComponent],
    imports: [CommonModule,MaterializeModule.forRoot(), moviesRoute],
    exports: [ListItemComponent, MoviesListComponent, MaterializeModule],
    providers: [MovieService]
})
export class MoviesModule{
    // static forRoot (){
    //     return {

    //     }
    // }
}