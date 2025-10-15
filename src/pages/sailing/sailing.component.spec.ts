import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SailingComponent } from './sailing.component';

describe('SailingComponent', () => {
  let component: SailingComponent;
  let fixture: ComponentFixture<SailingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SailingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
