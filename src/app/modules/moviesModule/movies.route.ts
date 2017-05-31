import { MoviesListComponent } from './components/movies-list/movies-list.component';
import {Routes, RouterModule} from '@angular/router';


const routes : Routes = [
    {path:"movies", component: MoviesListComponent},
    {path:"movies/:type", component: MoviesListComponent}
]

export const moviesRoute  = RouterModule.forChild(routes, );
