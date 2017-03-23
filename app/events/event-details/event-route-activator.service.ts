import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { EventService } from '../shared/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router:Router) {

  }
  canActivate(route:ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params['id']) //!! casts to a boolean.  + casts to a number

    if (!eventExists)
      this.router.navigate(['/404'])

    return eventExists // returns true (route can be activate because event exists) or false
  }
}