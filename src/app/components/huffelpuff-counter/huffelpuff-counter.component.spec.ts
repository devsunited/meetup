import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HuffelpuffCounterComponent } from './huffelpuff-counter.component';

describe('Component: HuffelpuffCounter', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [HuffelpuffCounterComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([HuffelpuffCounterComponent],
      (component: HuffelpuffCounterComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(HuffelpuffCounterComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(HuffelpuffCounterComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <du-huffelpuff-counter></du-huffelpuff-counter>
  `,
  directives: [HuffelpuffCounterComponent]
})
class HuffelpuffCounterComponentTestController {
}

