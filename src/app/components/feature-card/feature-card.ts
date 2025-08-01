import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from '../icon-button'; // Import the new IconButtonComponent
import { CloseButtonComponent } from '../close-button'; // Import the new CloseButtonComponent

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule, IconButtonComponent, CloseButtonComponent], // Add new components to imports
  template: `
    <!-- Individual Feature Card - Re-added backdrop-blur-xl and glass-glow for blur effect -->
    <div class="flex-none w-72 bg-[#0a0a0a] rounded-[30px] overflow-hidden border-[#ffffff0d] relative min-h-[450px] glass-glow backdrop-blur-xl">
      <!-- Background image container -->
      <div class="absolute top-0 left-0 w-full h-full">
        <!-- The actual image, covering the background -->
        <img [src]="imageSrc" alt="Card Background" class="absolute inset-0 w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/400x469/1a1a1a/6b7280?text=ERROR+IMAGE+PATH';" />

        <!-- Gradient overlays (on top of the image) -->
        <div class="bg-gradient-to-r from-transparent to-[#0a0a0a] absolute w-full h-full top-0 left-0"></div>
        <div class="bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] absolute w-full h-full top-0 left-0"></div>
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
            <!-- Replaced button with reusable IconButtonComponent -->
            <app-icon-button icon="plus" ariaLabel="Open details" (buttonClick)="openModal()" customClasses="-mt-2"></app-icon-button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Overlay -->
    <div
      *ngIf="showModal"
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100]"
      (click)="closeModal()"
    >
      <!-- Modal Content - Changed background shade to #121212 -->
      <div
        class="relative rounded-[20px] p-12 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto bg-[#121212]"
        (click)="$event.stopPropagation()"
      >
        <!-- Replaced close button with reusable CloseButtonComponent -->
        <app-close-button (closeClick)="closeModal()"></app-close-button>

        <!-- Modal Image/Illustration - RE-ADDED and uses card image and gradients -->
        <div class="relative w-full h-[250px] overflow-hidden rounded-lg mb-8">
          <img
            [src]="imageSrc"
            alt="Modal Illustration"
            class="absolute inset-0 w-full h-full object-cover"
            onerror="this.onerror=null;this.src='https://placehold.co/400x250/1a1a1a/6b7280?text=Image+Not+Found';"
          />
          <!-- Gradients on top of the image in the modal -->
          <div class="bg-gradient-to-r from-transparent to-[#0a0a0a] absolute w-full h-full top-0 left-0"></div>
          <div class="bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] absolute w-full h-full top-0 left-0"></div>
        </div>

        <!-- Modal Content based on new screenshot -->
        <h2 class="text-4xl md:text-5xl font-extrabold text-foreground mb-6 text-left leading-tight">
          Purpose-built for <br> product development
        </h2>

        <!-- Reverted text color to muted-foreground for less brightness -->
        <p class="text-muted-foreground text-lg mb-4 text-left">
          Linear was developed with a specific purpose: to empower product teams to do
          their best work. Every aspect is intentionally designed to help teams focus on
          what they do best: Planning, building, and shipping great products.
        </p>
        <p class="text-muted-foreground text-lg mb-8 text-left">
          Because of its fit-to-purpose design, Linear is incredibly easy to use, but grows
          more powerful as you scale. It's principled where it needs to be, but provides
          enough flexibility to adapt to your team's unique way of working.
        </p>
        <p class="text-muted-foreground text-lg mb-8 text-left">
          We believe that this approach creates a better way to build products. And more
          than 10,000 product teams around the globe – from early-stage startups to
          public companies – agree.
        </p>

        <!-- Quote Section - Reverted text color to muted-foreground -->
        <div class="border-l-2 border-primary pl-6 mb-8">
          <p class="text-muted-foreground text-lg italic leading-relaxed">
            “We’d tried many tools before Linear but none of them felt
            like they were made for the way we work. Linear was a
            breath of fresh air - speedy, snappy, and a pleasure to use.”
          </p>
        </div>

        <!-- Vercel Logo -->
        <div class="flex justify-center mt-8">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="text-foreground">
            <path d="M12 0L24 22H0L12 0Z"></path>
          </svg>
          <span class="text-foreground text-lg font-semibold ml-2">Vercel</span>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class FeatureCardComponent {
  @Input() bottomTitle: string = '';
  @Input() bottomDescription: string = '';
  @Input() imageSrc: string = '';

  // State to control modal visibility
  showModal: boolean = false;

  /**
   * Opens the modal.
   */
  openModal(): void {
    this.showModal = true;
  }

  /**
   * Closes the modal.
   */
  closeModal(): void {
    this.showModal = false;
  }
}
