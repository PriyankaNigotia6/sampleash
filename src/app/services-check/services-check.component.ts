import { Component, OnInit } from '@angular/core';
import { AppServices } from '../services/app.services';
import { CheckServices } from '../services/service-check.services';
@Component({
  selector: 'app-services-check',
  templateUrl: './services-check.component.html',
  styleUrls: ['./services-check.component.css'],
//  providers: [AppServices, CheckServices]
})
export class ServicesCheckComponent implements OnInit {
  messageNew: string ; 
  messageDependencyinjection: string ; 
  messageViaServices: string;

  

  constructor(private appService: AppServices,
              private checkService: CheckServices) { }

  ngOnInit() {
     //NOT RECOMENDED WAY TO CREATE SERVICES OBJECT BUT => as Usual Working 
     let appServiceObject = new AppServices();
     this.messageNew = appServiceObject.logConsole('Hello Service Using New ');
     this.messageDependencyinjection = this.appService.logConsole("Hello Service Using Angular");
     this.messageViaServices = this.checkService.logFromServiceCheck('From Component ');

     
  }

  ServiceEventEmitter(){
    this.checkService.serviceEventEmmiter.emit('Event Emitted From Service-Component Via Services' );
   
  }




}
