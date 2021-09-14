import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstViewComponent } from './gst-view.component';

describe('GstViewComponent', () => {
  let component: GstViewComponent;
  let fixture: ComponentFixture<GstViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GstViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
