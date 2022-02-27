import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrikiGameComponent } from './triki-game.component';

describe('TrikiGameComponent', () => {
  let component: TrikiGameComponent;
  let fixture: ComponentFixture<TrikiGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrikiGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrikiGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
