import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

@Component({
  templateUrl: './app/events/events-list.component.html',
})
export class EventsListComponent implements OnInit {
  eventListHeading = "Upcoming Angular 2 Events"
  events:any

  constructor(private eventService: EventService, private toastr:ToastrService) {
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => this.events = events)
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

}