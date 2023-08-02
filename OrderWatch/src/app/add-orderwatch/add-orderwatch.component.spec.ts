import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderwatchComponent } from './add-orderwatch.component';

describe('AddOrderwatchComponent', () => {
  let component: AddOrderwatchComponent;
  let fixture: ComponentFixture<AddOrderwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrderwatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrderwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
