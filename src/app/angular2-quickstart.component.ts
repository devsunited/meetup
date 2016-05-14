import { Component } from '@angular/core';
import { MyHuffelpuffCounter } from './huffelpuff-counter.component';


@Component({
  moduleId: module.id,
  selector: 'angular2-quickstart-app',
  template: `
    <h1>{{title}}</h1>
    <my-huffelpuff-counter></my-huffelpuff-counter>
  `,
  styleUrls: ['angular2-quickstart.component.css'],
  directives: [
    MyHuffelpuffCounter
  ]
})
export class Angular2QuickstartAppComponent {
  title = 'angular2-quickstart works!';
}
