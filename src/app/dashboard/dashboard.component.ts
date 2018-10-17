import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  testBinding : String = 'app';
  routeName: String = 'sample-one';


  constructor(private router: Router) { }

  ngOnInit() {
  }

  dataAdded(eventData: {name:string}){

    console.log(eventData.name);

  }

  routeNavigate(routeName: String){

    this.router.navigate([routeName]);

  }
}
