import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/index'

@Component({
  templateUrl: './app/events/events-list.component.html',
})
export class EventsListComponent implements OnInit {
  eventListHeading = "Upcoming Angular 2 Events"
  events:IEvent[]

  constructor(
    private eventService: EventService,
    private route:ActivatedRoute
    ) {

  }

  ngOnInit() {
    // this.eventService.getEvents().subscribe(events => this.events = events)
    this.events = this.route.snapshot.data['events']
  }

}