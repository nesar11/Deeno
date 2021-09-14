import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinViewsComponent } from './coin-views.component';

describe('CoinViewsComponent', () => {
  let component: CoinViewsComponent;
  let fixture: ComponentFixture<CoinViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
