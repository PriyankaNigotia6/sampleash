import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[advanceSampleDirective]'
})
export class AdvanceSampleDirective implements OnInit {
  @Input() defaultColor:string = 'yellow';
  @Input() changedColor:string = 'red';
  @HostBinding('style.backgroundColor') backgroundColor:string;
  @HostBinding('style.backgroundColor') backgroundDblColor:string;

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef) { }

  ngOnInit(){

    this.backgroundColor = this.defaultColor;

    

  }

  @HostListener('mouseenter') onClick(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.changedColor);
    //this.backgroundColor = this.changedColor;
    //console.log('mouseenter');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.defaultColor);
    //this.backgroundDblColor = this.defaultColor;
    //console.log('mouseleave');
  }

}
