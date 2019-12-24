import { Component } from '@angular/core';
import { RealSource } from './real-source';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ng-substitute-for-testing';


}
console.log(
  RealSource.prototype.randomData()
);
