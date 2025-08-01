import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="onClick()"
      [ngClass]="getButtonClasses()"
      [attr.aria-label]="ariaLabel"
    >
      <svg class="w-6 h-6 text-[#f7f8f8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <ng-container [ngSwitch]="icon">
          <ng-container *ngSwitchCase="'plus'">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </ng-container>
          <!-- Add more icon cases here if needed, e.g., 'arrow-right' -->
          <!--
          <ng-container *ngSwitchCase="'arrow-right'">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </ng-container>
          -->
          <ng-container *ngSwitchDefault>
            <!-- Default or error icon if no match -->
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v6m-3-3h6m-2-6h-2a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2V9a2 2 0 00-2-2z"></path>
          </ng-container>
        </ng-container>
      </svg>
    </button>
  `,
  styles: []
})
export class IconButtonComponent {
  @Input() icon: 'plus' | 'arrow-right' | string = 'plus'; // Type for common icons, or string for custom paths
  @Input() ariaLabel: string = 'Button';
  @Input() customClasses: string = ''; // Allows adding extra Tailwind classes

  @Output() buttonClick = new EventEmitter<void>();

  onClick(): void {
    this.buttonClick.emit();
  }

  getButtonClasses(): string {
    return `flex-shrink-0 w-10 h-10 items-center justify-center rounded-full bg-button-bg border border-button-border flex ${this.customClasses}`;
  }
}
