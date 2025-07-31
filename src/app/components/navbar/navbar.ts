import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="w-full bg-background p-4 border-b border-border fixed top-0 z-50">
      <!-- Ensure consistent padding and max-width -->
      <div class="w-full mx-auto flex items-center justify-between max-w-screen-xl px-4">
        <!-- Logo Section - Removed the icon, kept only the name -->
        <div class="flex items-center space-x-2">
          <span class="text-foreground text-xl font-semibold">Dtek Consulting</span>
        </div>

        <!-- Navigation Links - Reverted to original options -->
        <div class="hidden md:flex space-x-8">
          <a href="#" class="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium">About Us</a>
          <a href="#" class="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium">Services</a>
          <a href="#" class="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium">Partners</a>
          <a href="#" class="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium">Clients</a>
          <a href="#" class="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium">Contact Us</a>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center space-x-4">
          <!-- Re-added "Reach Out" link -->
          <a href="#" class="text-muted-foreground hover:text-foreground transition-colors duration-200 hidden sm:block">Reach Out</a>
          <!-- Updated Get a Quote button styling -->
          <button class="px-4 py-2 rounded-md font-medium text-base bg-gray-200 text-gray-900 shadow-sm border border-gray-300 hover:bg-gray-300 transition-colors duration-200">
            Get a Quote
          </button>
          <!-- Mobile menu button (for responsiveness, currently static) -->
          <button class="md:hidden text-muted-foreground hover:text-foreground focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Changed bg-secondary to bg-background -->
    <section class="py-20 text-center bg-background">
      <!-- Content for the section -->
    </section>
  `,
  styles: []
})
export class NavbarComponent {}
