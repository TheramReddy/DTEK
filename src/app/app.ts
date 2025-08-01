import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { FeaturesComponent } from './components/features/features';
import { TestimonialComponent } from './components/testimonial/testimonial';
import { FooterComponent } from './components/footer/footer';
import { ClientsComponent } from './components/clients/clients'; // New: For client logos
import { FeatureSectionLargeComponent } from './components/feature-section-large/feature-section-large'; // New: For larger feature sections


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    TestimonialComponent,
    FooterComponent,
    ClientsComponent,
    FeatureSectionLargeComponent,
    // Removed: LatestUpdatesComponent
  ],
  template: `
    <!-- The main container for your entire DTEK website -->
    <div class="overflow-x-hidden">
      <app-navbar></app-navbar>
      <main>
        <app-hero></app-hero>
        <!-- Removed <app-latest-updates></app-latest-updates> as its content is now integrated into HeroComponent -->
        <app-clients class="bg-secondary"></app-clients> <!-- Changed to bg-secondary -->

        <!-- Section mimicking "Made for modern product teams" -->
        <section class="flex flex-col items-center gap-12 pb-40 px-4 relative bg-background"> <!-- Changed to bg-background -->
          <!-- Adjusted for responsiveness and proper alignment -->
          <div class="flex flex-col md:flex-row w-full max-w-screen-xl items-end justify-between gap-8 relative px-0">
            <div class="flex flex-col items-start relative flex-1">
              <h1 class="relative self-stretch mt-[-1.00px] font-segoe-ui font-normal text-foreground text-4xl md:text-[54.5px] tracking-[-1.82px] leading-tight md:leading-[61.6px] text-center md:text-left">
                Made for modern
                <br />
                businesses
              </h1>
            </div>

            <div class="flex flex-col items-center md:items-end relative flex-1 text-center md:text-right">
              <p class="relative w-fit mt-[-1.00px] font-segoe-ui font-normal text-muted-foreground text-sm md:text-[15px] tracking-[-0.17px] leading-6 max-w-md md:max-w-none">
                Dtek Consulting is shaped by the practices and principles
                <br />
                that distinguish world-class technology partners from
                <br />
                the rest: relentless focus, fast execution, and a<br />
                commitment to the quality of our solutions.
              </p>

              <div class="inline-flex items-start relative flex-[0_0_auto] mt-4 md:mt-0">
                <a href="#" class="inline-flex items-center gap-1 relative flex-[0_0_auto] h-auto p-0 text-foreground text-[15px] font-segoe-ui hover:text-muted-foreground transition-colors duration-200">
                  <span class="relative w-fit mt-[-1.00px] whitespace-nowrap">
                    Make the switch
                  </span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Feature cards section - now using a responsive grid -->
          <div class="w-full max-w-screen-xl px-0">
            <app-features></app-features>
          </div>
        </section>

        <!-- Section mimicking "Project and long-term planning" -->
        <app-feature-section-large
          title="Strategic Planning & Execution."
          description="Align your team around a unified technology roadmap. Plan, manage, and track all IT initiatives with Dtek's comprehensive tools."
          imageSrc="https://placehold.co/1200x700/1a1a1a/6b7280?text=Strategic+Planning+Mockup"
          imageAlt="Strategic Planning Mockup"
          [reverseLayout]="false"
        ></app-feature-section-large>

        <!-- Section mimicking "Task tracking and sprint planning" -->
        <app-feature-section-large
          title="Agile Development & Project Management."
          description="Streamline your project lifecycle. Create tasks in seconds, discuss issues in context, and breeze through your work with tailored views."
          imageSrc="https://placehold.co/1200x700/1a1a1a/6b7280?text=Agile+Project+Mockup"
          imageAlt="Agile Project Mockup"
          [reverseLayout]="true"
        ></app-feature-section-large>

        <app-testimonial class="bg-secondary"></app-testimonial> <!-- Changed to bg-secondary -->
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'dtek-website-clone';
}
