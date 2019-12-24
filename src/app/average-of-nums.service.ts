import { Injectable } from '@angular/core';
import { CollectNumsModel } from './collect-nums-model';

@Injectable({
  providedIn: 'root'
})
export class AverageOfNumsService {
  getAverageOfData() {
    let dataSet = CollectNumsModel.prototype.returnThis();
    let addArrayEl = dataSet.reduce((a, b) => a + b, 0);
    let numOfEl = dataSet.length;
    let arrayAverage = addArrayEl/numOfEl;
        
    return arrayAverage;
  }
}
