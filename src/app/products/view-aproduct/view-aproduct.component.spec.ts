import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAProductComponent } from './view-aproduct.component';

describe('ViewAProductComponent', () => {
  let component: ViewAProductComponent;
  let fixture: ComponentFixture<ViewAProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
