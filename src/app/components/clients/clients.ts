import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-background text-center overflow-hidden"> <!-- Added overflow-hidden here -->
      <div class="container mx-auto px-4">
        <h2 class="text-foreground text-4xl md:text-5xl lg:text-5xl font-bold mb-20 leading-tight mt-0">
          Trusted by leading organizations.
        </h2>
        <!-- Outer container for the scrolling effect -->
        <div class="relative w-full overflow-hidden">
          <!-- Inner container for the duplicated logos, applies the animation -->
          <div class="flex flex-nowrap logo-scroll-animation group-hover:animation-pause">
            <!-- Original set of logos -->
            <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-8 lg:grid-cols-8 gap-4 items-center justify-center flex-shrink-0 w-full">
              <div class="flex justify-center items-center h-16"><img src="assets/images/logos/logo1.svg" alt="Logo 1" class="h-full object-contain"></div>
              <div class="flex justify-center items-center h-16"><img src="assets/images/logos/logo2.svg" alt="Logo 2" class="h-full object-contain"></div>
              <div class="flex justify-center items-center h-16"><img src="assets/images/logos/logo3.svg" alt="Logo 3" class="h-full object-contain"></div>
              <div class="flex justify-center items-center h-16"><img src="assets/images/logos/logo4.svg" alt="Logo 4" class="h-full object-contain"></div>
              <div class="flex justify-center items-center h-16"><img src="assets/images/logos/logo5.svg" alt="Logo 5" class="h-full object-contain"></div>
              <div class="flex justify-center items-center h-16"><img src="assets/images/logos/logo6.svg" alt="Logo 6" class="h-full object-contain"></div>
              <div class="flex justify-center items-center h-16"><img src="assets/images/logos/logo7.svg" alt="Logo 7" class="h-full object-contain"></div>
              <div class="flex justify-center items-center h-20"><img src="assets/images/logos/logo8.svg" alt="Logo 8" class="h-full object-contain"></div>
            </div>

            <!-- Duplicated set of logos for continuous scroll -->
            <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-8 lg:grid-cols-8 gap-4 items-center justify-center flex-shrink-0 w-full">
              <div class="flex justify-center items-center h-16"><img src="assets/images/logos/logo1.svg" alt="Logo 1" class="h-full object-contain"></div>
              <div class="flex justify-center items-center h-16"><img src="assets/images/logos/logo2.svg" alt="Logo 2" class="h-full object-contain"></div>
              <div class="flex justify-center items-center h-16"><img src="assets/images/logos/logo3.svg" alt="Logo 3" class="h-full object-contain"></div>
              <div class="flex justify-center items-center h-16"><img src="assets/images/logos/logo4.svg" alt="Logo 4" class="h-full object-contain"></div>
              <div class="flex justify-center items-center h-16"><img src="assets/images/logos/logo5.svg" alt="Logo 5" class="h-full object-contain"></div>
              <div class="flex justify-center items-center h-16"><img src="assets/images/logos/logo6.svg" alt="Logo 6" class="h-full object-contain"></div>
              <div class="flex justify-center items-center h-16"><img src="assets/images/logos/logo7.svg" alt="Logo 7" class="h-full object-contain"></div>
              <div class="flex justify-center items-center h-20"><img src="assets/images/logos/logo8.svg" alt="Logo 8" class="h-full object-contain"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ClientsComponent {}
