import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseButtonComponent } from '../close-button'; // Import the new CloseButtonComponent
import { ContactModalComponent } from '../contact-modal';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, CloseButtonComponent, ContactModalComponent], // Add ContactModalComponent to imports
  template: `
    <nav class="w-full bg-background p-4 border-b border-border fixed top-0 z-50">
      <!-- Ensure consistent padding and max-width -->
      <div class="w-full mx-auto flex items-center justify-between max-w-screen-xl px-4">
        <!-- Logo Section - Updated text, font, and color -->
        <div class="flex items-center space-x-2">
          <span class="text-foreground text-xl font-normal font-mono">dtekConsulting<span class="text-sky-500">.us</span></span>
        </div>

        <!-- Navigation Links (Desktop) -->
        <div class="hidden md:flex space-x-8">
          <a href="#" class="text-white text-opacity-75 hover:text-foreground transition-colors duration-200 text-base font-medium">About Us</a>
          <a href="#" class="text-white text-opacity-75 hover:text-foreground transition-colors duration-200 text-base font-medium">Services</a>
          <a href="#" class="text-white text-opacity-75 hover:text-foreground transition-colors duration-200 text-base font-medium">Partners</a>
          <a href="#" class="text-white text-opacity-75 hover:text-foreground transition-colors duration-200 text-base font-medium">Clients</a>
          <a href="#" class="text-white text-opacity-75 hover:text-foreground transition-colors duration-200 text-base font-medium">Contact Us</a>
        </div>

        <!-- Action Buttons (Desktop) and Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <!-- Re-added "Reach Out" link -->
          <a href="#" class="text-white text-opacity-75 hover:text-foreground transition-colors duration-200 hidden sm:block">Reach Out</a>
          <!-- Updated Get a Quote button styling - Added click handler to open modal -->
          <button (click)="openContactModal()" class="hidden md:block px-1 py-1 rounded-md font-medium text-base bg-gray-200 text-gray-900 shadow-sm border border-gray-300 hover:bg-gray-300 transition-colors duration-200">
            Get a Quote
          </button>
          <!-- Mobile menu button (for responsiveness) -->
          <button (click)="toggleMobileMenu()" class="md:hidden text-muted-foreground hover:text-foreground focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div *ngIf="showMobileMenu" class="fixed inset-0 bg-black bg-opacity-90 z-51 md:hidden flex flex-col items-center justify-center space-y-8">
      <!-- Replaced close button with reusable CloseButtonComponent -->
      <app-close-button (closeClick)="toggleMobileMenu()"></app-close-button>

      <a (click)="toggleMobileMenu()" href="#" class="text-white text-2xl font-semibold hover:text-primary transition-colors duration-200">About Us</a>
      <a (click)="toggleMobileMenu()" href="#" class="text-white text-2xl font-semibold hover:text-primary transition-colors duration-200">Services</a>
      <a (click)="toggleMobileMenu()" href="#" class="text-white text-2xl font-semibold hover:text-primary transition-colors duration-200">Partners</a>
      <a (click)="toggleMobileMenu()" href="#" class="text-white text-2xl font-semibold hover:text-primary transition-colors duration-200">Clients</a>
      <a (click)="toggleMobileMenu()" href="#" class="text-white text-2xl font-semibold hover:text-primary transition-colors duration-200">Contact Us</a>
      <a (click)="toggleMobileMenu()" href="#" class="text-white text-2xl font-semibold hover:text-primary transition-colors duration-200">Reach Out</a>
      <!-- "Get a Quote" button is intentionally NOT here for mobile view -->
    </div>

    <!-- Contact Modal -->
    <app-contact-modal *ngIf="showContactModal" (close)="closeContactModal()"></app-contact-modal>
  `,
  styles: []
})
export class NavbarComponent {
  // State to control mobile menu visibility
  showMobileMenu: boolean = false;
  // State to control contact modal visibility
  showContactModal: boolean = false;

  /**
   * Toggles the visibility of the mobile menu.
   */
  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }

  /**
   * Opens the contact modal.
   */
  openContactModal(): void {
    this.showContactModal = true;
  }

  /**
   * Closes the contact modal.
   */
  closeContactModal(): void {
    this.showContactModal = false;
  }
}