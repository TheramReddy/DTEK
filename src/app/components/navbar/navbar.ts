import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="w-full bg-background p-4 border-b border-border fixed top-0 z-50">
      <!-- Changed container to max-w-screen-xl for alignment with cards -->
      <div class="container mx-auto flex items-center justify-between max-w-screen-xl">
        <!-- Logo Section - Removed the icon, kept only the name -->
        <div class="flex items-center space-x-2">
          <!-- Removed: <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">DT</div> -->
          <span class="text-foreground text-xl font-semibold">Dtek Consulting</span>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-8">
          <a href="#" class="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium">About Us</a>
          <a href="#" class="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium">Services</a>
          <a href="#" class="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium">Partners</a>
          <a href="#" class="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium">Clients</a>
          <a href="#" class="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium">Contact Us</a>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center space-x-4">
          <a href="#" class="text-muted-foreground hover:text-foreground transition-colors duration-200 hidden sm:block">Reach Out</a>
          <button class="btn-primary px-4 py-2 rounded-md text-foreground font-medium text-base">
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
