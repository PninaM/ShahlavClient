import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomrInComponent } from './customr-in.component';

describe('CustomrInComponent', () => {
  let component: CustomrInComponent;
  let fixture: ComponentFixture<CustomrInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomrInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomrInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
