import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 text-center bg-background">
      <!-- Changed to responsive grid with appropriate gaps -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full mx-auto">
        <!-- Feature Card 1: Purpose-built for Digital Transformation -->
        <div class="flex flex-col items-start relative w-full">
          <div class="flex flex-col items-start relative self-stretch w-full">
            <div class="inline-flex flex-col h-[360px] items-start justify-end relative bg-card rounded-[30px] overflow-hidden border-none w-full">
              <!-- Abstract visual element (mimicking Linear's card visuals) -->
              <div class="absolute w-full h-80 top-0 left-0 flex items-center justify-center opacity-[0.05]"> <!-- Adjusted opacity -->
                <svg class="w-full h-full text-muted" viewBox="0 0 200 200" fill="currentColor" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)">
                  <rect x="20" y="20" width="160" height="160" rx="10" ry="10" stroke="currentColor" stroke-width="2" fill="none"/>
                  <rect x="40" y="40" width="120" height="120" rx="8" ry="8" stroke="currentColor" stroke-width="2" fill="none"/>
                  <line x1="20" y1="20" x2="40" y2="40" stroke="currentColor" stroke-width="2"/>
                  <line x1="180" y1="20" x2="160" y2="40" stroke="currentColor" stroke-width="2"/>
                  <line x1="20" y1="180" x2="40" y2="160" stroke="currentColor" stroke-width="2"/>
                  <line x1="180" y1="180" x2="160" y2="160" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="flex h-[87.84px] items-end justify-between pt-0 pb-8 px-6 relative self-stretch w-full z-10">
                <div class="inline-flex flex-col items-start pl-0 pr-[27.78px] py-0 relative flex-[0_0_auto] mt-[-0.16px]">
                  <h3 class="relative w-fit mt-[-1.00px] font-segoe-ui font-normal text-foreground text-[21px] tracking-[-0.25px] leading-[27.9px] whitespace-pre-line">
                    Purpose-built for<br />Digital Transformation
                  </h3>
                </div>
                <button class="flex w-10 h-10 items-center justify-center px-[18px] py-0.5 relative rounded-full border-2 border-solid border-border backdrop-blur-sm backdrop-brightness-[100%] hover:bg-muted transition-colors duration-200">
                  <!-- Changed icon to right arrow -->
                  <svg class="w-[18px] h-[18px] text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature Card 2: Engineered for Agility & Speed -->
        <div class="flex flex-col items-start relative w-full">
          <div class="flex flex-col items-start relative self-stretch w-full">
            <div class="inline-flex flex-col h-[360px] items-start justify-end relative bg-card rounded-[30px] overflow-hidden border-none w-full">
              <!-- Abstract visual element (mimicking Linear's card visuals) -->
              <div class="absolute w-full h-80 top-0 left-0 flex items-center justify-center opacity-[0.05]"> <!-- Adjusted opacity -->
                <svg class="w-full h-full text-muted" viewBox="0 0 200 200" fill="currentColor" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)">
                  <line x1="20" y1="50" x2="180" y2="50" stroke="currentColor" stroke-width="2"/>
                  <line x1="20" y1="70" x2="160" y2="70" stroke="currentColor" stroke-width="2"/>
                  <line x1="20" y1="90" x2="140" y2="90" stroke="currentColor" stroke-width="2"/>
                  <line x1="20" y1="110" x2="120" y2="110" stroke="currentColor" stroke-width="2"/>
                  <line x1="20" y1="130" x2="100" y2="130" stroke="currentColor" stroke-width="2"/>
                  <circle cx="100" cy="100" r="80" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
                </svg>
              </div>
              <div class="flex h-[87.84px] items-end justify-between pt-0 pb-8 px-6 relative self-stretch w-full z-10">
                <div class="inline-flex flex-col items-start pl-0 pr-[27.78px] py-0 relative flex-[0_0_auto] mt-[-0.16px]">
                  <h3 class="relative w-fit mt-[-1.00px] font-segoe-ui font-normal text-foreground text-[21px] tracking-[-0.25px] leading-[27.9px] whitespace-pre-line">
                    Engineered to<br />Move Fast
                  </h3>
                </div>
                <button class="flex w-10 h-10 items-center justify-center px-[18px] py-0.5 relative rounded-full border-2 border-solid border-border backdrop-blur-sm backdrop-brightness-[100%] hover:bg-muted transition-colors duration-200">
                  <!-- Changed icon to right arrow -->
                  <svg class="w-[18px] h-[18px] text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature Card 3: Crafted with Precision & Quality -->
        <div class="flex flex-col items-start relative w-full">
          <div class="flex flex-col items-start relative self-stretch w-full">
            <div class="inline-flex flex-col h-[360px] items-start justify-end relative bg-card rounded-[30px] overflow-hidden border-none w-full">
              <!-- Abstract visual element (mimicking Linear's card visuals) -->
              <div class="absolute w-full h-80 top-0 left-0 flex items-center justify-center opacity-[0.05]"> <!-- Adjusted opacity -->
                <svg class="w-full h-full text-muted" viewBox="0 0 200 200" fill="currentColor" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)">
                  <line x1="50" y1="20" x2="50" y2="180" stroke="currentColor" stroke-width="2"/>
                  <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" stroke-width="2"/>
                  <line x1="150" y1="20" x2="150" y2="180" stroke="currentColor" stroke-width="2"/>
                  <line x1="20" y1="50" x2="180" y2="50" stroke="currentColor" stroke-width="2"/>
                  <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" stroke-width="2"/>
                  <line x1="20" y1="150" x2="180" y2="150" stroke="currentColor" stroke-width="2"/>
                  <rect x="75" y="75" width="50" height="50" rx="5" ry="5" stroke="currentColor" stroke-width="2" fill="none"/>
                </svg>
              </div>
              <div class="flex h-[87.84px] items-end justify-between pt-0 pb-8 px-6 relative self-stretch w-full z-10">
                <div class="inline-flex flex-col items-start pl-0 pr-[27.78px] py-0 relative flex-[0_0_auto] mt-[-0.16px]">
                  <h3 class="relative w-fit mt-[-1.00px] font-segoe-ui font-normal text-foreground text-[21px] tracking-[-0.25px] leading-[27.9px] whitespace-pre-line">
                    Crafted to<br />Perfection
                  </h3>
                </div>
                <button class="flex w-10 h-10 items-center justify-center px-[18px] py-0.5 relative rounded-full border-2 border-solid border-border backdrop-blur-sm backdrop-brightness-[100%] hover:bg-muted transition-colors duration-200">
                  <!-- Changed icon to right arrow -->
                  <svg class="w-[18px] h-[18px] text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class FeaturesComponent {}