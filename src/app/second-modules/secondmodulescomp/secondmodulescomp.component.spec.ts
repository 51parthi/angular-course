import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondmodulescompComponent } from './secondmodulescomp.component';

describe('SecondmodulescompComponent', () => {
  let component: SecondmodulescompComponent;
  let fixture: ComponentFixture<SecondmodulescompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondmodulescompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondmodulescompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
