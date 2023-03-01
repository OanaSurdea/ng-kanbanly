import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgkUiComponent } from './ngk-ui.component';

describe('NgkUiComponent', () => {
  let component: NgkUiComponent;
  let fixture: ComponentFixture<NgkUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgkUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgkUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
