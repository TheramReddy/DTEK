import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from '../feature-card/feature-card'

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FeatureCardComponent],
  template: `
    <!-- Changed bg-black to bg-background for consistency with global theme -->
    <section class="bg-background overflow-hidden py-20">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <!-- New wrapper div for left-aligned content, centered as a block -->
        <div class="max-w-4xl mx-auto text-left">
          <!-- Added mt-0 to remove any default top margin on h1 -->
          <h1 class="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight mt-0">
            DTeK Consulting Services Inc.,<br>a Women-Owned Minority business.
          </h1>

          <p class="text-foreground text-opacity-75 text-lg md:text-xl max-w-3xl mb-10">
            Has served tech needs in government and commercial markets from Northern Virginia for 20 years.
          </p>

          <!-- Adjusted for mobile responsiveness: buttons on same line, smaller -->
          <div class="flex flex-col sm:flex-row justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button class="px-2 py-1 sm:px-2 sm:py-1 rounded-md text-base sm:text-lg font-semibold shadow-sm border border-white border-opacity-20 bg-gray-200 text-gray-900 hover:bg-gray-300 transition-colors duration-200 w-full sm:w-auto">
              Start building
            </button>
            <a href="#" class="flex items-center space-x-1 sm:space-x-2 text-white text-opacity-75 text-base sm:text-lg font-medium hover:text-white transition-colors duration-200">
              <span>Contact Sales</span>
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Feature cards section - Adjusted spacing from main hero content -->
        <div class="w-full max-w-screen-xl mx-auto mt-12">
          <div class="flex flex-wrap justify-center gap-6">
            <app-feature-card *ngFor="let card of cardsData"
                              [bottomTitle]="card.bottomTitle"
                              [bottomDescription]="card.bottomDescription"
                              [imageSrc]="card.imageSrc">
            </app-feature-card>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent implements AfterViewInit {
  // Data for the feature cards - Reduced to 4 cards
  cardsData = [
    {
      bottomTitle: 'Customer Requests',
      bottomDescription: 'Build what customers\nactually want',
      imageSrc: 'assets/images/mobile.png'
    },
    {
      bottomTitle: 'Strategic Planning',
      bottomDescription: 'Unified Roadmap',
      imageSrc: 'assets/images/planning.png'
    },
    {
      bottomTitle: 'Agile Development',
      bottomDescription: 'Streamline your project',
      imageSrc: 'assets/images/agile.png'
    },
    {
      bottomTitle: 'Cloud Solutions',
      bottomDescription: 'Seamless operations',
      imageSrc: 'assets/images/cloud.png'
    }
  ];

  constructor() {}

  ngAfterViewInit() {
    // No scrolling logic needed here anymore
  }

  // Removed scrollLeft and scrollRight methods as they are no longer needed
}
