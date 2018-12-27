import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordseaComponent } from './wordsea.component';

describe('WordseaComponent', () => {
  let component: WordseaComponent;
  let fixture: ComponentFixture<WordseaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordseaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordseaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
