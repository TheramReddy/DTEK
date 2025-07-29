import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative pt-32 pb-20 text-center overflow-hidden hero-background">
      <div class="container mx-auto px-4">
        <!-- Main Heading -->
        <h1 class="text-5xl md:text-7xl font-extrabold text-foreground leading-tight mb-6">
          Unlocking Your Potential <br class="hidden md:inline"> Through Technology.
        </h1>
        <!-- Subheading/Description -->
        <p class="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Dtek Consulting provides cutting-edge IT solutions, cybersecurity, cloud services, and custom software development to empower businesses.
        </p>
        <!-- Call-to-Action Buttons -->
        <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-20">
          <button class="btn-primary px-8 py-3 rounded-md text-foreground text-lg font-semibold shadow-lg"> <!-- Changed text-white to text-foreground -->
            Explore Services
          </button>
          <a href="#" class="flex items-center space-x-2 text-muted-foreground text-lg font-medium hover:text-foreground transition-colors duration-200">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.132l-3.264-1.632a.8.8 0 00-1.144.717v3.264a.8.8 0 001.144.717l3.264-1.632a.8.8 0 000-1.434z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Get a Free Consultation</span>
          </a>
        </div>
        <!-- Placeholder for app screenshot/mockup -->
        <div class="w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-border bg-card flex items-center justify-center p-2 md:p-4">
            <img src="https://placehold.co/1200x700/1a1a1a/6b7280?text=Dtek+Consulting+Solutions+Overview" alt="Dtek Consulting Solutions Overview" class="w-full h-auto rounded-lg object-cover">
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent {}