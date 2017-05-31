import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: "", redirectTo: 'movies', pathMatch: "full" },
    { path: "**", redirectTo: 'movies', pathMatch: "full" }
]

export const appRoutes = RouterModule.forRoot(routes, { useHash: true });
