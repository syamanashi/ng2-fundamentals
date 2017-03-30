import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared/index'

@Component({
  selector: 'session-list',
  templateUrl: './app/events/event-details/session-list.component.html',
  styles: [`
    collapsible-well h6 {margin-top:-5px; margin-bottom:10px;}
  `],
})
export class SessionListComponent implements OnChanges {
  @Input() sessions:ISession[]
  @Input() filterBy:string
  visibleSessions:ISession[] = [];

  ngOnChanges() {
    // if we actually have sessions set, then filter sessions:
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filter) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0); // duplicates entire array with all of the same elements.
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter; // any session whose level matches gets returned (as true) in the new visibleSessions array.
      })
    }
  }
}