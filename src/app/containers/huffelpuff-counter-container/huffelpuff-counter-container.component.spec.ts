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
import { HuffelpuffCounterContainerComponent } from './huffelpuff-counter-container.component';

describe('Component: HuffelpuffCounterContainer', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [HuffelpuffCounterContainerComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([HuffelpuffCounterContainerComponent],
      (component: HuffelpuffCounterContainerComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(HuffelpuffCounterContainerComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(HuffelpuffCounterContainerComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <du-huffelpuff-counter-container></du-huffelpuff-counter-container>
  `,
  directives: [HuffelpuffCounterContainerComponent]
})
class HuffelpuffCounterContainerComponentTestController {
}

