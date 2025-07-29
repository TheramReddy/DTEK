import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 text-center bg-secondary">
      <div class="container mx-auto px-4 max-w-3xl">
        <!-- Testimonial Quote -->
        <blockquote class="text-2xl md:text-3xl font-medium leading-relaxed text-foreground mb-8">
          "Dtek Consulting transformed our IT infrastructure, making our operations more secure and efficient. Their expertise is unmatched!"
        </blockquote>
        <!-- Testimonial Author -->
        <div class="flex items-center justify-center space-x-4">
          <!-- Avatar Placeholder (replace with actual image if available) -->
          <img src="https://placehold.co/60x60/4a4a4a/ffffff?text=JM" alt="Client Avatar" class="w-12 h-12 rounded-full border-2 border-border">
          <div>
            <p class="text-lg font-semibold text-foreground">John Miller</p>
            <p class="text-muted-foreground text-sm">CEO, InnovateTech Solutions</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class TestimonialComponent {}