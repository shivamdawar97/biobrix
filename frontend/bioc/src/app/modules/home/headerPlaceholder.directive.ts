import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector:'[headerPlaceholder]'
})
export class HederPlaceholderDirective {
  constructor(public viewContainerRef:ViewContainerRef){

  }
}
