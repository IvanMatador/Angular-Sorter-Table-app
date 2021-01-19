import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadDatapickerComponent } from './head-datapicker.component';

describe('HeadDatapickerComponent', () => {
  let component: HeadDatapickerComponent;
  let fixture: ComponentFixture<HeadDatapickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadDatapickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadDatapickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
