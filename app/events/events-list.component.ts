import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'

@Component({
  selector: 'events-list',
  templateUrl: './app/events/events-list.component.html',
})
export class EventsListComponent implements OnInit {
  eventListHeading = "Upcoming Angular 2 Events"
  events:any[]

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }

}