import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingerSignInComponent } from './ringer-sign-in.component';

describe('RingerSignInComponent', () => {
  let component: RingerSignInComponent;
  let fixture: ComponentFixture<RingerSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RingerSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RingerSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
