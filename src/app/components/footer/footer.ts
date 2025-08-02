import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-background py-8 border-t border-border">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <!-- Logo Section -->
        <a href="/" class="flex items-center space-x-2 mb-4 md:mb-0">
          <span class="text-foreground text-xl font-normal font-mono">dtekConsulting<span class="text-sky-500">.us</span></span>
        </a>

        <!-- Copyright Text -->
        <p class="text-foreground text-base mb-4 md:mb-0">
          &copy; {{ currentYear }} dtekConsulting.us. All rights reserved.
        </p>

        <!-- Social Media Icons -->
        <div class="flex justify-center items-center space-x-6">
          <div class="flex justify-center items-center h-6">
            <img src="assets/images/logos/IC1.svg" alt="Social Icon 1" class="h-full object-contain">
          </div>
          <div class="flex justify-center items-center h-6">
            <img src="assets/images/logos/IC2.svg" alt="Social Icon 2" class="h-full object-contain">
          </div>
          <div class="flex justify-center items-center h-6">
            <img src="assets/images/logos/IC3.svg" alt="Social Icon 3" class="h-full object-contain">
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
