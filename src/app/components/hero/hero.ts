import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
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
      -->
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
          <button class="btn-primary px-8 py-3 rounded-md text-foreground text-lg font-semibold shadow-lg">
            Explore Services
          </button>
          <a href="#" class="flex items-center space-x-2 text-muted-foreground text-lg font-medium hover:text-foreground transition-colors duration-200">
            <!-- Play icon SVG -->
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.132l-3.264-1.632a.8.8 0 00-1.144.717v3.264a.8.8 0 001.144.717l3.264-1.632a.8.8 0 000-1.434z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Get a Free Consultation</span>
          </a>
        </div>

        <!-- Horizontal Scrollable Feature Cards -->
        <div #scrollContainer class="w-full max-w-screen-xl mx-auto px-4 overflow-x-auto pb-6" style="-ms-overflow-style: none; scrollbar-width: none;">
          <div class="flex space-x-6">
            <!-- Iterate over cardsData directly within HeroComponent -->
            <!-- The main card container, applying the desired styles -->
            <div *ngFor="let card of cardsData" class="flex-none w-80 bg-[#0f1011] rounded-[30px] overflow-hidden border-[#ffffff0d] relative min-h-[450px] glass-glow backdrop-blur-xl">
              <!-- Background image and gradients container -->
              <div class="absolute top-0 left-0 w-full h-full">
                <!-- Placeholder for background image. Original was local, so using a subtle placeholder. -->
                <div class="relative w-full h-full bg-gray-900"></div>

                <!-- Gradient overlays -->
                <div class="bg-gradient-to-r from-transparent to-[#0f1011] absolute w-full h-full top-0 left-0"></div>
                <div class="bg-gradient-to-b from-transparent via-transparent to-[#0f1011] absolute w-full h-full top-0 left-0"></div>
              </div>

              <!-- Content wrapper for the main card content -->
              <div class="absolute inset-0 flex flex-col justify-end p-6 text-left z-10">
                <!-- Top content area (now empty as per request) -->
                <!-- You can place your image here if needed -->
                <div class="flex-1">
                  <!-- Image placeholder if you want to add one here -->
                  <!-- <img [src]="card.imageSrc" alt="Card Image" class="w-full h-auto object-cover rounded-lg mb-4"> -->
                </div>

                <!-- Bottom content area -->
                <!-- Adjusted structure for title, description, and button alignment -->
                <div class="flex flex-col items-start w-full">
                  <div class="relative w-fit font-segoe-ui font-normal text-[#8a8f98] text-[13px] tracking-[-0.13px] leading-[19.5px] whitespace-nowrap mb-1">
                    {{ card.bottomTitle }}
                  </div>
                  <div class="flex items-start justify-between w-full"> <!-- Changed to items-start -->
                    <div class="relative w-fit font-segoe-ui font-normal text-[#f7f8f8] text-[15px] tracking-[-0.17px] leading-6 pr-4 whitespace-pre-line">
                      {{ card.bottomDescription }}
                    </div>
                    <!-- Removed border and background from button, and hover effect -->
                    <button class="flex-shrink-0 w-10 h-10 items-center justify-center rounded-full bg-transparent h-auto -mt-2">
                      <svg class="w-[18px] h-[18px] text-[#f7f8f8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Navigation Buttons for Horizontal Scroll -->
        <div class="flex justify-center space-x-4 mt-8">
          <button (click)="scrollLeft()" class="bg-card/10 text-foreground p-3 rounded-full shadow-lg border border-border hover:bg-card/30 transition-colors duration-200">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button (click)="scrollRight()" class="bg-card/10 text-foreground p-3 rounded-full shadow-lg border border-border hover:bg-card/30 transition-colors duration-200">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent implements AfterViewInit {
  // ViewChild to get a reference to the scrollable container
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  // Data for the feature cards
  cardsData = [
    {
      bottomTitle: 'Customer Requests',
      bottomDescription: 'Build what customers\nactually want', // Adjusted for multi-line
      imageSrc: 'https://placehold.co/300x200/1a1a1a/6b7280?text=Your+Image+Here' // Placeholder for your image
    },
    {
      bottomTitle: 'Strategic Planning',
      bottomDescription: 'Align your team with a\nunified roadmap', // Adjusted for multi-line
      imageSrc: 'https://placehold.co/300x200/1a1a1a/6b7280?text=Strategic+Planning'
    },
    {
      bottomTitle: 'Agile Development',
      bottomDescription: 'Streamline your project\nlifecycle', // Adjusted for multi-line
      imageSrc: 'https://placehold.co/300x200/1a1a1a/6b7280?text=Agile+Development'
    },
    {
      bottomTitle: 'Cloud Solutions',
      bottomDescription: 'Leverage the power of\nthe cloud', // Adjusted for multi-line
      imageSrc: 'https://placehold.co/300x200/1a1a1a/6b7280?text=Cloud+Solutions'
    },
    {
      bottomTitle: 'Cybersecurity',
      bottomDescription: 'Protect your digital assets\nwith advanced security', // Adjusted for multi-line
      imageSrc: 'https://placehold.co/300x200/1a1a1a/6b7280?text=Cybersecurity'
    }
  ];

  constructor() {}

  ngAfterViewInit() {
    // Optional: You can add any initialization logic here if needed after view is initialized.
  }

  /**
   * Scrolls the horizontal container to the left.
   * Adjust the scroll amount (e.g., 300) based on your card width and desired scroll distance.
   */
  scrollLeft() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollBy({
        left: -300, // Scroll left by 300px
        behavior: 'smooth'
      });
    }
  }

  /**
   * Scrolls the horizontal container to the right.
   * Adjust the scroll amount (e.g., 300) based on your card width and desired scroll distance.
   */
  scrollRight() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollBy({
        left: 300, // Scroll right by 300px
        behavior: 'smooth'
      });
    }
  }
}
