import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRingerComponent } from './edit-ringer.component';

describe('EditRingerComponent', () => {
  let component: EditRingerComponent;
  let fixture: ComponentFixture<EditRingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRingerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
