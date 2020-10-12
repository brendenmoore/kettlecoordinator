import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingersComponent } from './ringers.component';

describe('RingersComponent', () => {
  let component: RingersComponent;
  let fixture: ComponentFixture<RingersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RingersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RingersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
