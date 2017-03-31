import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { TOASTR_TOKEN, Toastr, CollapsibleWellComponent } from './common/index';
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'

declare let toastr: Toastr

@NgModule ({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
    ],
    providers: [
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        EventRouteActivator, // => Shorthand for { provide: EventRouteActivator, useClass: EventRouteActivator } where provide sets the token.
        EventListResolver, // => You could send a different service/class in the longhand syntax like this { provide: EventListResolver, useClass: EventService }
        AuthService,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    ],
    bootstrap: [
        EventsAppComponent
    ]
})
export class AppModule{}

function checkDirtyState(component:CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}