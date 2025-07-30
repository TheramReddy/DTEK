import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-section-large',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 text-center bg-background">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12"
           [ngClass]="{'md:flex-row-reverse': reverseLayout}">
        <!-- Text Content -->
        <div class="md:w-1/2 text-center md:text-left">
          <h2 class="text-4xl font-bold text-foreground mb-6">{{ title }}</h2>
          <p class="text-lg text-muted-foreground mb-8">{{ description }}</p>
          <!-- Optional: Add a CTA button here if needed -->
          <!--
          <button class="btn-primary px-6 py-2 rounded-md text-white font-medium">
            Learn More
          </button>
          -->
        </div>
        <!-- Image/Mockup -->
        <div class="md:w-1/2 w-full rounded-xl overflow-hidden shadow-2xl border border-border bg-card flex items-center justify-center p-2 md:p-4">
          <img [src]="imageSrc" [alt]="imageAlt" class="w-full h-auto rounded-lg object-cover">
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class FeatureSectionLargeComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
  @Input() reverseLayout: boolean = false; // If true, image is on left, text on right
}