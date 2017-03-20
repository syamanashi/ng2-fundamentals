import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './app/events/events-list.component.html',
  styles: [`
    .well div { color: yellow }
  `]
})
export class EventsListComponent {
  event01 = {
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
    };
}