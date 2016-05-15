import { Component, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';
import { MdButton } from '@angular2-material/button';


@Component({
  moduleId: module.id,
  selector: 'du-huffelpuff-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [MdButton],
  template: `
    <h4>Withdraw like Mario</h4>
    <button md-raised-button color="primary" (click)="increment.emit()">Increment</button>
    <div>{{ count | currency:'HUF':true:'1.2-2'}} <code>Huffelpuff</code></div>
    <button md-raised-button color="warn" (click)="decrement.emit()">Decrement</button>
    <button md-raised-button color="accent" (click)="reset.emit()">Reset</button>
  `,
  styles: []
})
export class HuffelpuffCounterComponent {

  @Input() count: number = 0;
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

}
