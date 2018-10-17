import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation, ViewChild } from '@angular/core';
import { style } from '@angular/core/src/animation/dsl';
import { CheckServices } from '../services/service-check.services';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
    selector: 'app-sample-one',
    templateUrl: './sample-one.component.html',
    styleUrls: ['./sample-one.component.css'],
    //encapsulation: ViewEncapsulation.Emulated
    //styles:['color:#ffffff']

})
export class SampleOneComponent implements OnInit{

@Input() testValue: string = 'Nothing';
@Output() dataChanged = new EventEmitter< {name:string} >();

@ViewChild('checkRefrence') referenceValue; 


    testObject: any = {'key1': 'value 1', 'key2': 'value 2', 'key3array':['arrval1', 'arrval2' ]};
    alighH1 = "center";
    names: Array<string>=['Sample Array 0','Sample Array 1','Sample Array 3'];
    switchValue = 2;
    eventServiceData: string;


    constructor(private checkServices: CheckServices,
                private router: Router,
                private route: ActivatedRoute){

        setTimeout(() => {
           this.onTimeOut("kaka");
            
        }, 5000);

        //setTimeout(()=>{ this.onTimeOut("Test 1"); }, 3000);
        
       
    }


    ngOnInit(){
        //this.checkServices.serviceEventEmmiter
        this.checkServices.serviceEventEmmiter.subscribe(
            (evenData: string) => {
                this.eventServiceData = 'Event Subscribed with Data ' + evenData;
            }
        );
    }

    onChangeTestValue(eventData: any){

        //console.log(eventData);

        // this.testValue = 'taka'//eventData.target.value;
        this.testValue = eventData.target.value;

    }

    // onElementCopied(eventData: any){

    //      console.log(eventData);

    //     alert("You are trying to Copy Me I am GONE BABY");
    //     this.testValue = "";

    // }
    onTimeOut(value: string){
        //console.log(value);
        this.testValue = value;
        // document.getElementById("kaka").innerHTML = "kaka";
        //console.log(document.getElementById("kaka").innerHTML); WE will not get element as it's not the parth of index.html
        
    }

    changeStyleH1(){

        return this.testValue === "kaka" ? "red" : "green"        

    }

    accessData(){

        this.dataChanged.emit({

            name : this.testValue

        });

    }

    sendRefence(){

        console.log(this.referenceValue);
        console.log(this.referenceValue.nativeElement.value);

    }

    routeNavigate(routeName: String){
        
        console.log(this.route);
        this.router.navigate([routeName], {relativeTo: this.route});
    
      }
}