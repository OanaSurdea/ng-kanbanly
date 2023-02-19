import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxDocsComponent } from './nx-docs.component';

describe('NxDocsComponent', () => {
  let component: NxDocsComponent;
  let fixture: ComponentFixture<NxDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NxDocsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NxDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
