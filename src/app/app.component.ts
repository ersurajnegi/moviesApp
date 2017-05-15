import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  test = 1;
  checkBoxValue : boolean = true;
  tabSelected(){
    console.log('tab selected');
    }
}