import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input() filter: string;
  showLoader: boolean = false;
  data: Array<any> = null;
  constructor(private _movieService: MovieService) {
    this.showLoader = true;
  }
  ngOnInit() {
    this.getUpcomingMovies();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['filter'].firstChange) { return; }
    this.getUpcomingMovies();
  }

  getUpcomingMovies() {
    this.showLoader = true;
    this.data = null;
    this._movieService.getUpcomingMovies(this.filter)
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
