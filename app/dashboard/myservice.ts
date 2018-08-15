import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';


@Injectable()
export class MyService {

  
  thingTwo;
  thingThree = 'start value';

  

  thingTwoStream = new Subject();
  thingThreeStream = new BehaviorSubject(this.thingThree);

  constructor() {
    console.log('MyService.constructor');
  }

  

  addThingTwo(x) {
    console.log('MyService.addThingTwo');

    //this.thingTwo.push('added another thing Two');
    this.thingTwo = x;
    
    //console.log(x) 
    this.thingTwoStream.next(x);
  }


}
