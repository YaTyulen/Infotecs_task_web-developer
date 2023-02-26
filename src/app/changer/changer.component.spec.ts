import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerComponent } from './changer.component';

describe('ChangerComponent', () => {
  let component: ChangerComponent;
  let fixture: ComponentFixture<ChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
