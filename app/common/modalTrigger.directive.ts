import { Directive, OnInit, Inject, ElementRef } from '@angular/core';

import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {

  private el:HTMLElement; // HTMLElement is a global JavaScript type that does not need to be imported.
  
  // Inject jQuery as '$' and assign it to the 'any' type (as the jQuery API is very complex and we don't need to create an interface for it.)
  // Inject our button element reference:
  constructor(ref:ElementRef, @Inject(JQ_TOKEN) private $:any ) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    
    // Add an event listener to the button element that calls .modal() on the simple-modal:
    // The event listener is set to listen to the 'click' event and takes a function that receives an (e) event object.
    this.el.addEventListener('click', e => {
      // Pass in the DOM element id of <div id="simple-modal"> to jQuery.
      // Pass an empty object to the modal() method.
      // Then using the div id (<div id="simple-modal">), get a handle to the element that this directive is on so we can listen to its click event.
      this.$('#simple-modal').modal({});
    });
    
    
  }

}
