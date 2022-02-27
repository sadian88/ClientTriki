import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTrikiComponent } from './board-triki.component';

describe('BoardTrikiComponent', () => {
  let component: BoardTrikiComponent;
  let fixture: ComponentFixture<BoardTrikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardTrikiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardTrikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
