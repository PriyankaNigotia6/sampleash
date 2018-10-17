import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample-two',
  templateUrl: './sample-two.component.html',
  styleUrls: ['./sample-two.component.css']
})
export class SampleTwoComponent implements OnInit {
  dummyUserData: Array<any> = [
    {id: 0, firstName:'Sunil', lastName: 'Thakue', email:'sunil@gmail.com', mobile:'989978788'},
    {id: 1, firstName:'Maya', lastName: 'Ali', email:'maya@gmail.com', mobile:'89778983938'},
    {id: 2, firstName:'Kaka', lastName: 'Bhola', email:'kaka@gmail.com', mobile:'0987837833'}
  ];
  constructor(private router: Router) {

   }

  ngOnInit() {
  }

  onDummyRowClick(dummyRecord: any){

    //console.log(dummyRecord);
    this.router.navigate(['sample-two/', this.dummyUserData[dummyRecord.id].id,
                         this.dummyUserData[dummyRecord.id].firstName,
                         this.dummyUserData[dummyRecord.id].lastName,
                         this.dummyUserData[dummyRecord.id].email
                              ]);

  }
}
