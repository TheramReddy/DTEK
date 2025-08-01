import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-close-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="onClose()"
      class="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 transition-colors duration-200 z-[9999]"
      aria-label="Close"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  `,
  styles: []
})
export class CloseButtonComponent {
  @Output() closeClick = new EventEmitter<void>();

  onClose(): void {
    this.closeClick.emit();
  }
}
