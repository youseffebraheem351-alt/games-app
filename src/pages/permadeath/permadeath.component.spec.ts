import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermadeathComponent } from './permadeath.component';

describe('PermadeathComponent', () => {
  let component: PermadeathComponent;
  let fixture: ComponentFixture<PermadeathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermadeathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermadeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
