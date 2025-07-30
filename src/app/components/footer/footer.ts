import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="py-16 bg-background text-foreground border-t border-border">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Column 1: Company Info / Logo -->
        <div class="flex flex-col items-start space-y-4">
          <div class="flex items-center space-x-2">
            <!-- Changed bg-gray-700 to bg-primary for consistency with new theme -->
            <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">DT</div>
            <span class="text-foreground text-xl font-semibold">Dtek Consulting</span>
          </div>
          <p class="text-muted-foreground text-sm">Your trusted partner in cutting-edge IT solutions and strategic technology consulting.</p>
          <div class="flex space-x-4 mt-4">
            <!-- Social Icons (placeholders) -->
            <a href="#" class="text-muted-foreground hover:text-foreground transition-colors duration-200">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.533A8.349 8.349 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012 10.792v.058a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.085a11.623 11.623 0 006.29 1.84"></path></svg>
            </a>
            <a href="#" class="text-muted-foreground hover:text-foreground transition-colors duration-200">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62-.07-.608-.07-.608.81-.059 1.238.80 1.238.80.726 1.248 1.907.887 2.374.679.073-.527.287-.887.523-1.089-1.817-.205-3.728-.91-3.728-4.073 0-.899.32-1.638.887-2.222-.09-.202-.387-1.063.088-2.212 0 0 .72-.222 2.359.85.686-.192 1.404-.288 2.122-.288.718 0 1.436.096 2.122.288 1.639-1.072 2.359-.85 2.359-.85.475 1.149.188 1.91.09 2.122.566.584.876 1.323.876 2.222 0 3.179-1.918 3.86-3.737 4.062.292.252.56.75.56 1.513 0 1.091-.01 1.97-.01 2.227 0 .268.18.58.688.482C19.137 20.218 22 16.462 22 12.017 22 6.484 17.523 2 12 2Z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="text-muted-foreground hover:text-foreground transition-colors duration-200">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.515 6.425v4.862l4.73-2.431-4.73-2.431z"></path></svg>
            </a>
          </div>
        </div>

        <!-- Column 2: Product/Services Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Services</h3>
          <ul class="space-y-2 text-muted-foreground text-sm">
            <li><a href="#" class="hover:text-foreground transition-colors duration-200">Cybersecurity</a></li>
            <li><a href="#" class="hover:text-foreground transition-colors duration-200">Cloud Computing</a></li>
            <li><a href="#" class="hover:text-foreground transition-colors duration-200">Software Development</a></li>
            <li><a href="#" class="hover:text-foreground transition-colors duration-200">IT Staffing</a></li>
            <li><a href="#" class="hover:text-foreground transition-colors duration-200">Data Analytics</a></li>
            <li><a href="#" class="hover:text-foreground transition-colors duration-200">Managed IT</a></li>
          </ul>
        </div>

        <!-- Column 3: Company Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Company</h3>
          <ul class="space-y-2 text-muted-foreground text-sm">
            <li><a href="#" class="hover:text-foreground transition-colors duration-200">About Us</a></li>
            <li><a href="#" class="hover:text-foreground transition-colors duration-200">Careers</a></li>
            <li><a href="#" class="hover:text-foreground transition-colors duration-200">Our Team</a></li>
            <li><a href="#" class="hover:text-foreground transition-colors duration-200">Blog</a></li>
          </ul>
        </div>

        <!-- Column 4: Resources/Support -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Resources</h3>
          <ul class="space-y-2 text-muted-foreground text-sm">
            <li><a href="#" class="hover:text-foreground transition-colors duration-200">Client Stories</a></li>
            <li><a href="#" class="hover:text-foreground transition-colors duration-200">Case Studies</a></li>
            <li><a href="#" class="hover:text-foreground transition-colors duration-200">FAQs</a></li>
            <li><a href="#" class="hover:text-foreground transition-colors duration-200">Support</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-16 text-center text-sm text-muted-foreground">
          <p>&copy; {{ currentYear }} Dtek Consulting. All rights reserved.</p>
          <div class="flex justify-center space-x-4 mt-2">
              <a href="#" class="hover:text-foreground transition-colors duration-200">Privacy Policy</a>
              <a href="#" class="hover:text-foreground transition-colors duration-200">Terms of Service</a>
          </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}