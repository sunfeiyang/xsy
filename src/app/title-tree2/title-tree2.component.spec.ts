import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTree2Component } from './title-tree2.component';

describe('TitleTree2Component', () => {
  let component: TitleTree2Component;
  let fixture: ComponentFixture<TitleTree2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleTree2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleTree2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
