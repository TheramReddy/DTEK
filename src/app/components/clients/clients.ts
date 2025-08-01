import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-background text-center">
      <div class="container mx-auto px-4">
        <h2 class="text-foreground text-4xl md:text-5xl lg:text-5xl font-bold mb-20 leading-tight mt-0">
          Trusted by leading organizations.
        </h2>
        <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-8 lg:grid-cols-8 gap-4 items-center justify-center">
          <!-- Infosys Logo (Using uploaded image) -->
          
          <!-- Microsoft Logo (Using uploaded image) -->
          <div class="flex justify-center items-center h-16">
            <img src="assets/images/logos/logo1.svg" alt="MLogo" class="h-full object-contain">
          </div>
          <div class="flex justify-center items-center h-16">
            <img src="assets/images/logos/logo2.svg" alt="MLogo" class="h-full object-contain">
          </div>
          <div class="flex justify-center items-center h-16">
            <img src="assets/images/logos/logo3.svg" alt="MLogo" class="h-full object-contain">
          </div>
          <div class="flex justify-center items-center h-16">
            <img src="assets/images/logos/logo4.svg" alt="MLogo" class="h-full object-contain">
          </div>
          <div class="flex justify-center items-center h-16">
            <img src="assets/images/logos/logo5.svg" alt="MLogo" class="h-full object-contain">
          </div>
          <div class="flex justify-center items-center h-16">
            <img src="assets/images/logos/logo6.svg" alt="MLogo" class="h-full object-contain">
          </div>
          <div class="flex justify-center items-center h-16">
            <img src="assets/images/logos/logo7.svg" alt="MLogo" class="h-full object-contain">
          </div>
          <div class="flex justify-center items-center h-20">
            <img src="assets/images/logos/logo8.svg" alt="MLogo" class="h-full object-contain">
          </div>

          <!-- Google Logo (Using uploaded image) -->
           
          
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ClientsComponent {}
