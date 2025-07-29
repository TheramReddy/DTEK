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
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
          <!-- Placeholder Client Logo 1 -->
          <div class="flex justify-center items-center h-16">
            <img src="[https://placehold.co/120x40/1a1a1a/6b7280?text=Client+A](https://placehold.co/120x40/1a1a1a/6b7280?text=Client+A)" alt="Client Logo A" class="h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-200">
          </div>
          <!-- Placeholder Client Logo 2 -->
          <div class="flex justify-center items-center h-16">
            <img src="[https://placehold.co/120x40/1a1a1a/6b7280?text=Client+B](https://placehold.co/120x40/1a1a1a/6b7280?text=Client+B)" alt="Client Logo B" class="h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-200">
          </div>
          <!-- Placeholder Client Logo 3 -->
          <div class="flex justify-center items-center h-16">
            <img src="[https://placehold.co/120x40/1a1a1a/6b7280?text=Client+C](https://placehold.co/120x40/1a1a1a/6b7280?text=Client+C)" alt="Client Logo C" class="h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-200">
          </div>
          <!-- Placeholder Client Logo 4 -->
          <div class="flex justify-center items-center h-16">
            <img src="[https://placehold.co/120x40/1a1a1a/6b7280?text=Client+D](https://placehold.co/120x40/1a1a1a/6b7280?text=Client+D)" alt="Client Logo D" class="h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-200">
          </div>
          <!-- Placeholder Client Logo 5 -->
          <div class="flex justify-center items-center h-16">
            <img src="[https://placehold.co/120x40/1a1a1a/6b7280?text=Client+E](https://placehold.co/120x40/1a1a1a/6b7280?text=Client+E)" alt="Client Logo E" class="h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-200">
          </div>
          <!-- Add more client logos as needed -->
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ClientsComponent {}