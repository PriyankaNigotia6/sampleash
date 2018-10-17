import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
    selector: '[sampleDirective]'
})
export class SampleDirective implements OnInit {

    constructor(private elementRef: ElementRef){

    }


    ngOnInit(){
        console.log('In Directive');

        this.elementRef.nativeElement.style.backgroundColor = 'green';

    }
    


}