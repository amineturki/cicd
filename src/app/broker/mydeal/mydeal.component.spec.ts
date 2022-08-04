import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydealComponent } from './mydeal.component';

describe('MydealComponent', () => {
  let component: MydealComponent;
  let fixture: ComponentFixture<MydealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MydealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
