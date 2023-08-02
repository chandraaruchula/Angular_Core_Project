import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrderwatchComponent } from './update-orderwatch.component';

describe('UpdateOrderwatchComponent', () => {
  let component: UpdateOrderwatchComponent;
  let fixture: ComponentFixture<UpdateOrderwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOrderwatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOrderwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
