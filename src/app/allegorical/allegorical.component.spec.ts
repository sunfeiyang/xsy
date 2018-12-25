import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllegoricalComponent } from './allegorical.component';

describe('AllegoricalComponent', () => {
  let component: AllegoricalComponent;
  let fixture: ComponentFixture<AllegoricalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllegoricalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllegoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
