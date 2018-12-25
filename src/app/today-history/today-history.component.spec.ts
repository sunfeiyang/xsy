import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayHistoryComponent } from './today-history.component';

describe('TodayHistoryComponent', () => {
  let component: TodayHistoryComponent;
  let fixture: ComponentFixture<TodayHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
