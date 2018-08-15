import { Component, OnInit, Input } from '@angular/core';
import { DashboardComponent } from '../dashboard.component';
import {ActivatedRoute} from "@angular/router";
import { MyService } from '../myservice';
@Component({
  selector: 'app-dashboardview',
  templateUrl: './dashboardview.component.html',
  styleUrls: ['./dashboardview.component.css']
})
export class DashboardviewComponent implements OnInit {
sub;
thingTwo;
card;


constructor(private myService: MyService) {}

  ngOnInit() {
      this.myService.thingTwoStream
      .subscribe(
        data => { 
          
          this.card= "Idris23 Id";
          console.log('ThingComponent thingTwoStream', this.card) 
        }
      );
  }

}
