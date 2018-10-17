import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sample-two-sub',
  templateUrl: './sample-two-sub.component.html',
  styleUrls: ['./sample-two-sub.component.css']
})
export class SampleTwoSubComponent implements OnInit {

  dummyUserData: Array<any> = [{id: Number, firstName: String, lastName: String, email: String }];
  index = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.dummyUserData[this.index].id = this.route.snapshot.params['id'];
    // this.dummyUserData[this.index].firstName = this.route.snapshot.params['firstname'];
    // this.dummyUserData[this.index].lastName = this.route.snapshot.params['lastname'];
    // this.dummyUserData[this.index].email = this.route.snapshot.params['email'];
    //console.log('In The Sub',this.dummyUserData);

    this.route.params.subscribe(( params: Params )=> {

      this.dummyUserData[this.index].id = +params['id'];
      this.dummyUserData[this.index].firstName = params['firstname'];
      this.dummyUserData[this.index].lastName = params['lastname'];
      this.dummyUserData[this.index].email = params['email'];


    });

  }


}
