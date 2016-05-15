import { HTTP_PROVIDERS } from '@angular/http';
import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { HuffelpuffCounterContainerComponent } from './containers/huffelpuff-counter-container/huffelpuff-counter-container.component';
import { FirebaseDispatcherService } from "./shared/firebase-dispatcher.service";

@Component({
  moduleId: module.id,
  selector: 'du-app',
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdIcon,
    MdToolbar,
    HuffelpuffCounterContainerComponent
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
  constructor(private fbSvc: FirebaseDispatcherService) {}
}
