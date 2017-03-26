import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'

@Injectable()
export class EventListResolver implements Resolve<any> {
  
  constructor(private eventService:EventService) {

  }
  
  resolve() {
    return this.eventService.getEvents().map(events => events) //.map() here returns the observable (but .subscribe() returns a subscription, not an observable)

    /* SHORT HAND FOR:
      return this.eventService.getEvents().map(
        function (events) { 
          return events 
        }
      )
    */
  }
}