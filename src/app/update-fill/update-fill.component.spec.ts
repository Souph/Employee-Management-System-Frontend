import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFillComponent } from './update-fill.component';

describe('UpdateFillComponent', () => {
  let component: UpdateFillComponent;
  let fixture: ComponentFixture<UpdateFillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
