import { Component } from '@angular/core';
import { CollectNumsModel } from './collect-nums-model';
// import { RealSource } from './real-source';
// import { MockSource } from './mock-source';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ng-substitute-for-testing';


}
// console.log(
//   RealSource.prototype.randomData()
// );

// console.log(
//     MockSource.prototype.mockSourceData()
// );

console.log(
  CollectNumsModel.prototype.returnThis()
);