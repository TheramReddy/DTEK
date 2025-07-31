import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-background text-center">
      <div class="container mx-auto px-4">
        <h2 class="text-xl md:text-2xl font-semibold text-muted-foreground mb-10">
          Trusted by leading organizations.
        </h2>
        <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-7 gap-4 items-center justify-center">
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

          <!-- Google Logo (Using uploaded image) -->
           
          
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ClientsComponent {}
