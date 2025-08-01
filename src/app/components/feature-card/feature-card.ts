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
        <p class="text-white text-opacity-75 text-lg mb-4 text-left">
          DTeK Consulting Services Inc. was created with a clear mission: to empower clients with top-tier technology support.
          Every element is designed to help meet tech needs efficiently, focusing on innovation, service, and delivery for both government and commercial sectors.
        </p>
        <p class="text-white text-opacity-75 text-lg mb-8 text-left">
          Thanks to its tailored design, DTeK is user-friendly yet grows stronger with scale. 
          It maintains core principles while offering flexibility to adapt to unique client workflows.
        </p>
        <p class="text-white text-opacity-75 text-lg mb-8 text-left">
          We believe this approach delivers superior tech solutions. 
          Over 20 years, DTeK has earned trust from clients in Northern Virginia and beyond, including government and commercial entities.
        </p>

        <!-- Quote Section - Reverted text color to muted-foreground -->
        <div class="border-l-2 border-primary pl-6 mb-8">
          <p class="text-white text-opacity-50 text-lg italic leading-relaxed">
            “Before DTeK, we struggled with other providers, but none matched our needs. DTeK brought a refreshing change that was reliable, efficient, and a joy to work with.”
          </p>
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
