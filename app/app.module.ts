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
import { TOASTR_TOKEN, Toastr, CollapsibleWellComponent, JQ_TOKEN, SimpleModalComponent, ModalTriggerDirective } from './common/index';
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'

declare let toastr:Toastr;
declare let jQuery:Object;

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
        SimpleModalComponent,
        ModalTriggerDirective,
        DurationPipe,
    ],
    providers: [
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr }, // => useExisting Alias Provider exampple: { provider: TOASTR_TOKEN, useExisting: toastr }
        { provide: JQ_TOKEN, useValue: jQuery },
        EventRouteActivator, // => Shorthand for { provide: EventRouteActivator, useClass: EventRouteActivator } where provide sets the token.
        EventListResolver, // => You could send a different service/class in the longhand syntax like this { provide: EventListResolver, useClass: EventService }
        AuthService,  // => If you instead want to pass a function that is a factory which could parameterize the creation of a class: { provide: AuthService, useFactory: factory() }
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