import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from '../feature-card/feature-card'

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FeatureCardComponent],
  template: `
    <!-- Adjusted top padding to pt-8 for desired gap, keeping pb-20 for bottom -->
    <section class="bg-background overflow-hidden pt-8 pb-20">
      <div class="container mx-auto px-4 max-w-screen-xl">
        <!-- New wrapper div for left-aligned content, centered as a block -->
        <div class="max-w-4xl text-left">
          <!-- Added mt-0 to remove any default top margin on h1 -->
          <h1 class="text-white text-opacity-95 text-2xl md:text-5xl lg:text-5xl font-semibold mb-6 leading-tight mt-0">
            DTeK Consulting Services Inc.,a Women-Owned Minority business.
          </h1>

          <p class="text-white text-opacity-75 text-lg md:text-xl max-w-3xl mb-10">
            Has served tech needs in government and commercial markets from Northern Virginia for 20 years.
          </p>

          <!-- Adjusted for mobile responsiveness: buttons on same line, smaller -->
          <!-- Removed flex-col to make them row by default, adjusted button width -->
          <div class="flex justify-start items-center space-x-4">
            <button class="px-4 py-2 rounded-md text-base font-semibold shadow-sm border border-white border-opacity-20 bg-gray-200 text-gray-900 hover:bg-gray-300 transition-colors duration-200">
              Start building
            </button>
            <a href="#" class="flex items-center space-x-2 text-white text-opacity-75 text-base font-medium hover:text-white transition-colors duration-200">
              <span>Contact Sales</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Feature cards section - Adjusted spacing from main hero content -->
        <!-- Added scroll-snap-type for smoother mobile scrolling experience -->
        <div class="w-full max-w-screen-xl mx-auto mt-12 overflow-x-auto pb-6 scrollbar-hide scroll-snap-x-mandatory">
          <div class="flex flex-nowrap gap-6">
            <app-feature-card *ngFor="let card of cardsData"
                              [bottomTitle]="card.bottomTitle"
                              [bottomDescription]="card.bottomDescription"
                              [imageSrc]="card.imageSrc"
                              class="scroll-snap-align-start"> <!-- Added scroll-snap-align-start -->
            </app-feature-card>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent implements AfterViewInit {
  // Data for the feature cards - Restored original imageSrc paths
  cardsData = [
    {
      bottomTitle: 'Client Requests',
      bottomDescription: 'Build what client\nactually want',
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
