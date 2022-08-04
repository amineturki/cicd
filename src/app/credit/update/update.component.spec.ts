import { ComponentFixture, TestBed } from '@angular/core/testing';

import { updateComponent } from './update.component';

describe('updateComponent', () => {
  let component: updateComponent;
  let fixture: ComponentFixture<updateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ updateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(updateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
