import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { EventService } from './shared/event.service'

@Component({
  templateUrl: 'app/events/create-event.component.html',
    styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color:#999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :ms-input-placeholder {color: #999;}
  `]
})
export class CreateEventComponent {
  isDirty:boolean = true
  event:any

  constructor(private router:Router, private eventService:EventService) {

  }

  ngOnInit() {
    this.event = {
      name: 'Some NG Event',
      date: '1/1/2018',
      time: '11am',
      price: 199.99,
      location: {
        address: '777 Lucky Lane',
        city: 'Charlotte, NC',
        country: 'USA'
      },
      onlineUrl: 'http://www.ngeverywhere.com',
      imageUrl: 'http://www.pngmart.com/files/1/Cat-PNG-Picture.png'
    }
  }

  saveEvent(formValues) {
    // Call the eventService to save our event.
    //      Pass formValues straight through since the shape of it exactly our event model.
    this.eventService.saveEvent(formValues)
    // set isDirty to false to navigate the Route Guard rules.
    this.isDirty = false
    // Navigate to the All Events page after eventService.saveEvent is called.
    this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}