import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsViewsComponent } from './ads-views.component';

describe('AdsViewsComponent', () => {
  let component: AdsViewsComponent;
  let fixture: ComponentFixture<AdsViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
