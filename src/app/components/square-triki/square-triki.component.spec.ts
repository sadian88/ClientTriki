import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareTrikiComponent } from './square-triki.component';

describe('SquareTrikiComponent', () => {
  let component: SquareTrikiComponent;
  let fixture: ComponentFixture<SquareTrikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareTrikiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareTrikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
