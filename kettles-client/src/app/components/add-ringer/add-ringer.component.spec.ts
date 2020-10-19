import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRingerComponent } from './add-ringer.component';

describe('AddRingerComponent', () => {
  let component: AddRingerComponent;
  let fixture: ComponentFixture<AddRingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRingerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
