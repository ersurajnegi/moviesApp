import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  test = 1;
  movieFilter : string = 'upcoming';
  checkBoxValue : boolean = true;
  tabSelected(tab){
      this.movieFilter = tab;
    }
}
