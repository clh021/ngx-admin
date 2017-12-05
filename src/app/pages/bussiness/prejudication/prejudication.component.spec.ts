import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrejudicationComponent } from './prejudication.component';

describe('PrejudicationComponent', () => {
  let component: PrejudicationComponent;
  let fixture: ComponentFixture<PrejudicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrejudicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrejudicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
