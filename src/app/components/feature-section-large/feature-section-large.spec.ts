import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSectionLarge } from './feature-section-large';

describe('FeatureSectionLarge', () => {
  let component: FeatureSectionLarge;
  let fixture: ComponentFixture<FeatureSectionLarge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureSectionLarge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureSectionLarge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
