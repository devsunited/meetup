import { Component } from '@angular/core';
import { HuffelpuffCounterContainerComponent } from './containers/huffelpuff-counter-container/huffelpuff-counter-container.component';

@Component({
  moduleId: module.id,
  selector: 'du-app',
  directives: [HuffelpuffCounterContainerComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {}
