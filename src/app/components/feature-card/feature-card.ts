import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Individual Feature Card -->
    <div class="flex-none w-80 bg-[#0f1011] rounded-[30px] overflow-hidden border-[#ffffff0d] relative min-h-[450px] glass-glow backdrop-blur-xl">
      <!-- Background image container -->
      <div class="absolute top-0 left-0 w-full h-full">
        <!-- The actual image, covering the background -->
        <!-- Removed border-2 border-red-500 -->
        <img [src]="imageSrc" alt="Card Background" class="absolute inset-0 w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/400x469/1a1a1a/6b7280?text=ERROR+IMAGE+PATH';" />

        <!-- Gradient overlays (on top of the image) -->
        <div class="bg-gradient-to-r from-transparent to-[#0f1011] absolute w-full h-full top-0 left-0"></div>
        <div class="bg-gradient-to-b from-transparent via-transparent to-[#0f1011] absolute w-full h-full top-0 left-0"></div>
      </div>

      <!-- Content wrapper for the main card content -->
      <div class="absolute inset-0 flex flex-col justify-end p-6 text-left z-10">
        <!-- Top content area (empty, for your image) -->
        <div class="flex-1">
          <!-- Any specific content you want on top of the image but below other UI elements -->
        </div>

        <!-- Bottom content area -->
        <div class="flex flex-col items-start w-full">
          <div class="relative w-fit font-segoe-ui font-normal text-[#8a8f98] text-[13px] tracking-[-0.13px] leading-[19.5px] whitespace-nowrap mb-1">
            {{ bottomTitle }}
          </div>
          <div class="flex items-start justify-between w-full">
            <div class="relative w-fit font-segoe-ui font-normal text-[#f7f8f8] text-[15px] tracking-[-0.17px] leading-6 pr-4 whitespace-pre-line">
              {{ bottomDescription }}
            </div>
            <!-- Arrow button without box, aligned with first line of text -->
            <button class="flex-shrink-0 w-10 h-10 items-center justify-center rounded-full bg-transparent h-auto -mt-2">
              <svg class="w-[18px] h-[18px] text-[#f7f8f8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class FeatureCardComponent {
  @Input() bottomTitle: string = '';
  @Input() bottomDescription: string = '';
  @Input() imageSrc: string = ''; // Optional: if you want to pass an image URL
}
