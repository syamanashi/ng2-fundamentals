import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular 2 Events</h1>
      
      <hr/>
      <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
          <span>Location: {{event.location.address}}</span>
          <span>&nbsp;</span>
          <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>

      </div>
    </div>
  `
})
export class EventsListComponent {
  event = {
        id: 1,
        name: 'Random Angular Event',
        date: '1/1/2017',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shiedl.pgn',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'Englad',

        },
    }
}