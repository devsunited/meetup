import { Component, Input } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

@Component({
  moduleId: module.id,
  selector: 'du-event-list',
  directives: [
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES
  ],
  template: `
    <md-card>
      <md-card-title>{{ title }}</md-card-title>
      <md-card-content>
        <md-list>
          <md-list-item *ngFor="let event of eventList"></md-list-item>
        </md-list>
      </md-card-content>
    </md-card>
  `,
  styles: [`
    :host > md-card{
      margin-bottom: 1rem;
    }`
  ]
})
export class EventListComponent {

  @Input() title: string = 'Lorem';
  @Input() eventList: any[] = [];

}
