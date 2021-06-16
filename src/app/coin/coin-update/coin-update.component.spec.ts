import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinUpdateComponent } from './coin-update.component';

describe('CoinUpdateComponent', () => {
  let component: CoinUpdateComponent;
  let fixture: ComponentFixture<CoinUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
