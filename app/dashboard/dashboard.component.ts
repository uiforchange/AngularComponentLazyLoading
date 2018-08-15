import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { MyService } from './myservice';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = [  
    { title: 'Card1', cols: 2, rows: 1 },  
    { title: 'Card 2', cols: 1, rows: 1 },  
    { title: 'Card 3', cols: 1, rows: 2 },  
    { title: 'Card 4', cols: 1, rows: 1 }  
  ];  

  constructor(private breakpointObserver: BreakpointObserver, private MyServiceout: MyService) {}

  removeFn(card,x){
    this.cards.splice(x, 1);

alert(x)
  }
  addFn(card,x)
  {
 this.MyServiceout.addThingTwo(card)
  }
}
