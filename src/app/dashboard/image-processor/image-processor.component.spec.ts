import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProcessorComponent } from './image-processor.component';

describe('ImageProcessorComponent', () => {
  let component: ImageProcessorComponent;
  let fixture: ComponentFixture<ImageProcessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageProcessorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
