import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderWatchComponent } from './list-order-watch.component';

describe('ListOrderWatchComponent', () => {
  let component: ListOrderWatchComponent;
  let fixture: ComponentFixture<ListOrderWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrderWatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOrderWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
