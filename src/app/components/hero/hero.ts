import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from '../feature-card/feature-card'

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FeatureCardComponent], // Add FeatureCardComponent to imports
  template: `
    <!--
      The main hero section.
      - relative: Allows for absolute positioning of child elements.
      - pt-2: Padding top to push content down, accounting for the fixed navbar.
               This value has been adjusted to reduce unwanted space.
      - pb-20: Padding bottom for spacing below the hero content.
      - text-center: Centers text content within the section.
      - overflow-hidden: Hides any overflowing content, useful for visual effects.
      - hero-background: Custom CSS class for background styling (gradient).
    -->
    <section class="relative pt-2 pb-20 text-center overflow-hidden hero-background">
      <!--
        Container for main content within the hero section.
        - mx-auto: Centers the container horizontally.
        - px-4: Horizontal padding for responsiveness.
        - Added max-w-screen-xl to align with Navbar and cards
      -->
      <div class="container mx-auto px-4 max-w-screen-xl">
        <!-- Main Heading -->
        <h1 class="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
          Unlocking Your Potential <br class="hidden md:inline"> Through Technology.
        </h1>
        <!-- Subheading/Description -->
        <p class="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Dtek Consulting provides cutting-edge IT solutions, cybersecurity, cloud services, and custom software development to empower businesses.
        </p>
        <!-- Call-to-Action Buttons -->
        <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-20">
          <!-- Updated Explore Services button styling -->
          <button class="px-8 py-3 rounded-md text-lg font-semibold shadow-sm border border-gray-300 bg-gray-200 text-gray-900 hover:bg-gray-300 transition-colors duration-200">
            Explore Services
          </button>
          <a href="#" class="flex items-center space-x-2 text-muted-foreground text-lg font-medium hover:text-foreground transition-colors duration-200">
            <!-- Play icon SVG -->
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.132l-3.264-1.632a.8.8 0 00-1.144.717v3.264a.8.8 0 001.144.717l3.264-1.632a.8.8 0 000-1.434z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Get a Free Consultation</span>
          </a>
        </div>

        <!-- Horizontal Scrollable Feature Cards - Now a wrapping layout -->
        <!-- Removed overflow-x-auto and scrollbar-hide -->
        <div class="w-full max-w-screen-xl mx-auto pb-6">
          <!-- Added flex-wrap and justify-center to center cards when they wrap -->
          <div class="flex flex-wrap justify-center gap-6">
            <!-- Use ngFor to iterate over the cardsData array and render FeatureCardComponent for each -->
            <app-feature-card *ngFor="let card of cardsData"
                              [bottomTitle]="card.bottomTitle"
                              [bottomDescription]="card.bottomDescription"
                              [imageSrc]="card.imageSrc">
            </app-feature-card>
          </div>
        </div>
        <!-- Removed Navigation Buttons for Horizontal Scroll -->
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent implements AfterViewInit {
  // ViewChild to get a reference to the scrollable container - No longer needed for scrolling
  // @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  // Data for the feature cards - Reduced to 3 cards
  cardsData = [
    {
      bottomTitle: 'Customer Requests',
      bottomDescription: 'Build what customers\nactually want',
      imageSrc: 'assets/images/mobile.png'
    },
    {
      bottomTitle: 'Strategic Planning',
      bottomDescription: 'Align your team with a\nunified roadmap',
      imageSrc: 'assets/images/planning.png'
    },
    {
      bottomTitle: 'Agile Development',
      bottomDescription: 'Streamline your project\nlifecycle',
      imageSrc: 'assets/images/agile.png'
    }
    // Removed Cloud Solutions and Cybersecurity cards
  ];

  constructor() {}

  ngAfterViewInit() {
    // No scrolling logic needed here anymore
  }

  // Removed scrollLeft and scrollRight methods as they are no longer needed
  // scrollLeft() { ... }
  // scrollRight() { ... }
}
