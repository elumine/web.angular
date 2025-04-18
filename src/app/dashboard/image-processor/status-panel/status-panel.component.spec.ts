import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPanelComponent } from './status-panel.component';

describe('StatusPanelComponent', () => {
  let component: StatusPanelComponent;
  let fixture: ComponentFixture<StatusPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
