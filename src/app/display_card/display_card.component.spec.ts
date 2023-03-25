import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrangerThingsComponent } from './display_card.component';

describe('StrangerThingsComponent', () => {
  let component: StrangerThingsComponent;
  let fixture: ComponentFixture<StrangerThingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrangerThingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrangerThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
