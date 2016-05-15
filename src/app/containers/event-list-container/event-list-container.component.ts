import { Component } from '@angular/core';
import { EventListComponent } from '../../components/event-list/event-list.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { AppState } from '../../shared/state';

@Component({
  moduleId: module.id,
  selector: 'du-event-list-container',
  directives: [
    EventListComponent
  ],
  template: `
    <du-event-list title="Upcoming Events" [eventList]="upcomingEvents | async"></du-event-list>
    <du-event-list title="Past Events" [eventList]="pastEvents"></du-event-list>
  `,
  styles: []
})
export class EventListContainerComponent {

  upcomingEvents: Observable<any[]>;
  pastEvents: Observable<any[]>;

  constructor(private store: Store<AppState>) {
    this.upcomingEvents = store.select(state => state.huffelpuffCounter.events)
  }

}
