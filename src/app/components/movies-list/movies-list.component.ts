import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  showLoader: boolean = false;
  data: Array<any> = null;
  constructor(private _movieService: MovieService) {
    this.showLoader = true;
  }
  ngOnInit() {
    this.getUpcomingMovies();
  }

  getUpcomingMovies() {
    this.showLoader = true;
    this._movieService.getUpcomingMovies()
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
        this.showLoader = false;
      },
      error => {
        console.error(error);
        this.showLoader = false;
      });

  }
}
