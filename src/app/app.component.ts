import { Component } from '@angular/core';
import { AverageOfNumsService } from './average-of-nums.service';
// import { CollectNumsModel } from './collect-nums-model';
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
  AverageOfNumsService.prototype.getAverageOfData()
);