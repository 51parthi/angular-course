import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreecompComponent } from './threecomp.component';

describe('ThreecompComponent', () => {
  let component: ThreecompComponent;
  let fixture: ComponentFixture<ThreecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreecompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
