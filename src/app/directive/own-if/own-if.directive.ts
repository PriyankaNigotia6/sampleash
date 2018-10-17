import { Directive, Input, TemplateRef, ViewRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appOwnIf]'
})
export class OwnIfDirective {

  @Input() set appOwnIf(condition){

    if (condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }

  }

  constructor(private templateRef: TemplateRef<any>,
              private vcRef: ViewContainerRef ) { }

}
