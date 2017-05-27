import { MoviesListComponent } from './components/movies-list/movies-list.component';
import {Routes, RouterModule} from '@angular/router';


const routes : Routes = [
    {path:"movies", component: MoviesListComponent},
    {path:"**", redirectTo: 'movies', pathMatch: "full"}
]

export const moviesRoute  = RouterModule.forRoot(routes);
