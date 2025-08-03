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
                  <div *ngIf="showMobileMenu" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-lg transition-opacity duration-200 md:hidden flex flex-col">
                <!-- Top: Logo and Close Button -->
                <div class="flex items-center justify-between px-6 pt-4 pb-6 border-b border-white/10">
                  <span class="text-foreground text-xl font-normal font-mono">dtekConsulting<span class="text-sky-500">.us</span></span>
                  <app-close-button (closeClick)="toggleMobileMenu()"></app-close-button>
                </div>

                <!-- Menu Heading -->
                <div class="px-6 pt-4 pb-2">
                  <div class="uppercase text-xs tracking-widest text-white/40 mb-1">Menu</div>
                </div>

                <!-- Main Menu Items -->
                <nav class="flex flex-col px-6 space-y-1">
                  <a (click)="toggleMobileMenu()" href="#" class="text-white/70 hover:text-white transition-colors duration-150 text-base font-medium py-2 rounded text-left">About Us</a>
                  <a (click)="toggleMobileMenu()" href="#" class="text-white/70 hover:text-white transition-colors duration-150 text-base font-medium py-2 rounded text-left">Services</a>
                  <a (click)="toggleMobileMenu()" href="#" class="text-white/70 hover:text-white transition-colors duration-150 text-base font-medium py-2 rounded text-left">Partners</a>
                  <a (click)="toggleMobileMenu()" href="#" class="text-white/70 hover:text-white transition-colors duration-150 text-base font-medium py-2 rounded text-left">Clients</a>
                  <a (click)="toggleMobileMenu()" href="#" class="text-white/70 hover:text-white transition-colors duration-150 text-base font-medium py-2 rounded text-left">Contact Us</a>
                </nav>

                <!-- Get in Touch Heading -->
                <div class="px-6 pt-4 pb-2">
                  <div class="uppercase text-xs tracking-widest text-white/40 mb-1">Get in Touch</div>
                </div>

                <!-- Bottom: Reach Out & Get a Quote -->
                <div class="flex flex-col px-6 pb-6 space-y-3">
                  <a (click)="toggleMobileMenu()" href="#" class="text-white/90 underline text-base font-medium hover:text-sky-400 transition-colors duration-150 text-left">Reach Out</a>
                    <button
                      (click)="openContactModal(); toggleMobileMenu()"
                      class="w-full px-4 py-2 rounded-md font-medium text-base bg-white/90 text-gray-900 shadow-none border-none hover:bg-white transition-colors duration-150 text-left"
                    >
                      Get a Quote
                    </button>
                </div>
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