import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseButtonComponent } from '../components/close-button'; // Assuming path from contact-modal to close-button

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule, CloseButtonComponent],
  template: `
    <div class="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-4">
      <div class="relative bg-[#000000] rounded-lg shadow-lg max-w-3xl w-full p-8 md:p-12 overflow-y-auto max-h-[90vh] border border-[#3a3a3a]">
        <app-close-button (closeClick)="closeModal()"></app-close-button>

        <div class="text-center mb-8">
          <div class="inline-flex items-center space-x-2 bg-[#2a2a2a] text-white text-opacity-75 text-sm px-4 py-2 rounded-full mb-6">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.336-4.913A16.409 16.409 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9a1 1 0 100-2 1 1 0 000 2zm7-2a1 1 0 10-2 0 1 1 0 002 0z" clip-rule="evenodd"></path></svg>
            <span>Support online</span>
            <button class="bg-primary text-white text-opacity-75 text-xs px-3 py-1 rounded-full hover:bg-opacity-80 transition-opacity">
              Join us
            </button>
          </div>
          <h2 class="text-white text-opacity-75 text-4xl md:text-5xl font-bold mb-4">Lets Have a Chat</h2>
          <p class="text-white text-opacity-85 text-lg">Questions about our products/services, orders, or just want to say hello? We're here to help</p>
        </div>

        <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="firstName" class="block text-white text-opacity-75 text-sm font-medium mb-2">First name</label>
            <input type="text" id="firstName" class="w-full p-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jonathan">
          </div>
          <div>
            <label for="lastName" class="block text-white text-opacity-75 text-sm font-medium mb-2">Last name</label>
            <input type="text" id="lastName" class="w-full p-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="James">
          </div>
          <div>
            <label for="email" class="block text-white text-opacity-75 text-sm font-medium mb-2">Email</label>
            <input type="email" id="email" class="w-full p-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="jonathan2718@gmail.com">
          </div>
          <div>
            <label for="phoneNumber" class="block text-white text-opacity-75 text-sm font-medium mb-2">Phone number</label>
            <input type="tel" id="phoneNumber" class="w-full p-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Subject">
          </div>
          <div class="md:col-span-2">
            <label for="message" class="block text-white text-opacity-75 text-sm font-medium mb-2">Message</label>
            <textarea id="message" rows="5" class="w-full p-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=""></textarea>
          </div>
          <div class="md:col-span-2 text-center">
            <button type="submit" class="px-3 py-1 rounded-md font-semibold shadow-sm border border-white border-opacity-20 bg-gray-200 text-gray-900 hover:bg-gray-300 transition-colors duration-200">
              Send message
            </button>
          </div>
        </form>

        <div class="flex justify-center space-x-6 mt-12 text-muted-foreground">
          <div class="flex justify-center items-center h-10">
          <img src="assets/images/logos/IC1.svg" alt="MLogo" class="h-full object-contain">
          </div>
          <div class="flex justify-center items-center h-10">
            <img src="assets/images/logos/IC2.svg" alt="MLogo" class="h-full object-contain">
          </div>
          <div class="flex justify-center items-center h-10">
            <img src="assets/images/logos/IC3.svg" alt="MLogo" class="h-full object-contain">
          </div>
        </div>
  `,
  styles: [`
    .emoji-white {
      filter: grayscale(100%) brightness(200%); /* Converts to grayscale and then brightens to white */
      display: inline-block; /* Ensures filter applies correctly */
    }
  `]
})
export class ContactModalComponent {
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }
}
