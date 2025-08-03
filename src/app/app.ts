import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { FooterComponent } from './components/footer/footer';
import { ClientsComponent } from './components/clients/clients'; // New: For client logos
 // New: For larger feature sections


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    ClientsComponent,
    // Removed: LatestUpdatesComponent
  ],
  template: `
    <!-- The main container for your entire DTEK website -->
     
            <div class="flex flex-col min-h-screen overflow-x-hidden">
  <app-navbar></app-navbar>
  <main class="pt-[64px] flex-1">
    <app-hero></app-hero>
    <app-clients class="bg-secondary"></app-clients>
    <app-footer></app-footer>
  </main>
  
</div>

    
  `,
  styles: []
})
export class AppComponent {
  title = 'DTEK';
}
