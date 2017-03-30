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
  @Input() sortBy:string;
  visibleSessions:ISession[] = [];

  ngOnChanges() {
    // if we actually have sessions set, then filter sessions:
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc)
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

function sortByNameAsc(s1:ISession, s2:ISession) {
  if (s1.name > s2.name) return 1
  else if (s1.name === s2.name) return 0
  else return -1
}

function sortByVotesDesc(s1:ISession, s2:ISession) {
  return s2.voters.length - s1.voters.length // returns positive number, 0, or a negative number which meets the requirement of the array.sort() function.
}
