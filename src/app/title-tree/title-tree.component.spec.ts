import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTreeComponent } from './title-tree.component';

describe('TitleTreeComponent', () => {
  let component: TitleTreeComponent;
  let fixture: ComponentFixture<TitleTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
