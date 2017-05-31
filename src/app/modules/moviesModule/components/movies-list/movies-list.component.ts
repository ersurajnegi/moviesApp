import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit, OnDestroy {
  showLoader: boolean = false;
  data: Array<any> = null;
  private getRouteParams: any = null;
  private type: any = null;
  private defaultMovieType = "upcoming";

  constructor(private _movieService: MovieService, private _route: ActivatedRoute) {
    this.showLoader = true;
  }
  ngOnInit() {
    this.getRouteParams = this._route.params.subscribe(params => {
      this.type = params.type;
      this.getMovies(this.type);
    });
  }


  getMovies(type: string) {
    let movieType  = type ? type : this.defaultMovieType;
    this.showLoader = true;
    this.data = null;
    this._movieService.getUpcomingMovies(movieType)
      .subscribe(data => {
        this.data = data;
        this.showLoader = false;
      },
      error => {
        this.showLoader = false;
      });

  }

  ngOnDestroy (){
    this.getRouteParams.unsubscribe();
  }
}
