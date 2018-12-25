import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomComponent } from './idiom.component';

describe('IdiomComponent', () => {
  let component: IdiomComponent;
  let fixture: ComponentFixture<IdiomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
