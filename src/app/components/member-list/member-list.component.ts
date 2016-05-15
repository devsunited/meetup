import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';


@Component({
  moduleId: module.id,
  selector: 'du-member-list',
  directives: [
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES
  ],
  template: `
    <md-card>
      <md-card-title>{{ title }}</md-card-title>
      <md-card-content>
        <md-list>
          <md-list-item *ngFor="let member of members">
            <img md-list-avatar [src]="member?.avatar" alt="avatar">
            <h3 md-line> {{member.name}} </h3>
            <p md-line>
              <a href="{{member.twitter}}"> @{{member.handle}} </a>
            </p>
          </md-list-item>
        </md-list>
      </md-card-content>
    </md-card>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: []
})
export class MemberListComponent{
  @Input() title: string = 'Lorem';
  @Input() members: any[] = [];
}
