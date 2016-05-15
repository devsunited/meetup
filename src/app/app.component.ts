import { HTTP_PROVIDERS } from '@angular/http';
import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { HuffelpuffCounterContainerComponent } from './containers/huffelpuff-counter-container/huffelpuff-counter-container.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { FirebaseDispatcherService } from "./shared/firebase-dispatcher.service";
import { EventListContainerComponent } from './containers/event-list-container/event-list-container.component';

@Component({
  moduleId: module.id,
  selector: 'du-app',
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdIcon,
    MdToolbar,
    HuffelpuffCounterContainerComponent,
    EventListContainerComponent,
    MemberListComponent
  ],
  providers:[
    HTTP_PROVIDERS,
    MdIconRegistry,
    FirebaseDispatcherService
  ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  members = [
    {name:'Martin',avatar:'https://pbs.twimg.com/profile_images/1260072436/180446_1595567813812_1374451847_31458096_4888846_n_400x400.jpg',twitter:'https://twitter.com/martin_hotell', handle:'martin_hotell'},
    {name:'Mario',avatar:'https://pbs.twimg.com/profile_images/725115436602392576/_Ugzec6Y_400x400.jpg',twitter:'https://twitter.com/mariovejlupek', handle:'mariovejlupek'},
    {name:'Viliam',avatar:'https://pbs.twimg.com/profile_images/474126826789298176/1Nc82LuY.jpeg',twitter:'https://twitter.com/vireliam', handle:'vireliam'},
  ];

  constructor(private fbSvc: FirebaseDispatcherService) {}
}
