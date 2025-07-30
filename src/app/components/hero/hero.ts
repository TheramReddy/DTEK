import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative pt-32 pb-20 text-center overflow-hidden hero-background">
      <div class="container mx-auto px-4">
        <!-- Main Heading -->
        <h1 class="text-5xl md:text-7xl font-extrabold text-foreground leading-tight mb-6">
          Unlocking Your Potential <br class="hidden md:inline"> Through Technology.
        </h1>
        <!-- Subheading/Description -->
        <p class="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Dtek Consulting provides cutting-edge IT solutions, cybersecurity, cloud services, and custom software development to empower businesses.
        </p>
        <!-- Call-to-Action Buttons -->
        <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-20">
          <button class="btn-primary px-8 py-3 rounded-md text-foreground text-lg font-semibold shadow-lg">
            Explore Services
          </button>
          <a href="#" class="flex items-center space-x-2 text-muted-foreground text-lg font-medium hover:text-foreground transition-colors duration-200">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.132l-3.264-1.632a.8.8 0 00-1.144.717v3.264a.8.8 0 001.144.717l3.264-1.632a.8.8 0 000-1.434z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Get a Free Consultation</span>
          </a>
        </div>

        <!-- Bento Grid Section -->
        <div class="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
          <!-- Item 1: Cybersecurity (Large) -->
          <div class="lg:col-span-2 bg-card/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-border p-5 flex flex-col items-start text-left relative min-h-[160px] glass-glow">
            <h3 class="text-xl font-semibold text-foreground mb-1">Cybersecurity Mastery</h3>
            <p class="text-muted-foreground text-xs mb-3">
              Protect your digital assets with our comprehensive security solutions, from threat detection to incident response.
            </p>
            <img src="[https://placehold.co/600x120/1a1a1a/6b7280?text=Cybersecurity+Shield](https://placehold.co/600x120/1a1a1a/6b7280?text=Cybersecurity+Shield)" alt="Cybersecurity Shield" class="w-full h-auto rounded-lg mt-auto object-cover">
          </div>

          <!-- Item 2: Cloud Solutions (Medium) -->
          <div class="bg-card/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-border p-5 flex flex-col items-start text-left min-h-[160px] glass-glow">
            <h3 class="text-lg font-semibold text-foreground mb-1">Cloud Innovation</h3>
            <p class="text-muted-foreground text-xs mb-3">
              Leverage the power of the cloud with our expert migration, optimization, and management services.
            </p>
            <img src="[https://placehold.co/300x80/1a1a1a/6b7280?text=Cloud+Services](https://placehold.co/300x80/1a1a1a/6b7280?text=Cloud+Services)" alt="Cloud Services" class="w-full h-auto rounded-lg mt-auto object-cover">
          </div>

          <!-- Item 3: Custom Software (Medium) -->
          <div class="bg-card/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-border p-5 flex flex-col items-start text-left min-h-[160px] glass-glow">
            <h3 class="text-lg font-semibold text-foreground mb-1">Bespoke Software</h3>
            <p class="text-muted-foreground text-xs mb-3">
              Develop custom applications tailored precisely to your business processes and unique requirements.
            </p>
            <img src="[https://placehold.co/300x80/1a1a1a/6b7280?text=Custom+Software](https://placehold.co/300x80/1a1a1a/6b7280?text=Custom+Software)" alt="Custom Software" class="w-full h-auto rounded-lg mt-auto object-cover">
          </div>

          <!-- Item 4: IT Consulting (Small) - Moved to be next to Bespoke Software -->
          <div class="bg-card/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-border p-5 flex flex-col items-start text-left min-h-[120px] glass-glow">
            <h3 class="text-base font-semibold text-foreground mb-1">Strategic IT</h3>
            <p class="text-muted-foreground text-xs mb-3">
              Expert guidance to align your technology with strategic business goals.
            </p>
            <img src="[https://placehold.co/200x60/1a1a1a/6b7280?text=IT+Consulting](https://placehold.co/200x60/1a1a1a/6b7280?text=IT+Consulting)" alt="IT Consulting" class="w-full h-auto rounded-lg mt-auto object-cover">
          </div>

          <!-- Item 5: Data Analytics (Small) - Moved to be next to Bespoke Software -->
          <div class="bg-card/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-border p-5 flex flex-col items-start text-left min-h-[120px] glass-glow">
            <h3 class="text-base font-semibold text-foreground mb-1">Data Insights</h3>
            <p class="text-muted-foreground text-xs mb-3">
              Transform raw data into actionable intelligence for informed decision-making.
            </p>
            <img src="[https://placehold.co/200x60/1a1a1a/6b7280?text=Data+Analytics](https://placehold.co/200x60/1a1a1a/6b7280?text=Data+Analytics)" alt="Data Analytics" class="w-full h-auto rounded-lg mt-auto object-cover">
          </div>

          <!-- Item: AI & Machine Learning (now last, takes full width) -->
          <div class="lg:col-span-3 bg-card/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-border p-5 flex flex-col items-center justify-center text-center relative min-h-[120px] glass-glow">
            <h3 class="text-xl font-semibold text-foreground mb-1">AI & Machine Learning</h3>
            <p class="text-muted-foreground text-xs mb-3 max-w-2xl">
              Unlock new possibilities with intelligent solutions. We design and implement AI/ML models for automation, data analysis, and predictive insights.
            </p>
            <img src="[https://placehold.co/800x80/1a1a1a/6b7280?text=AI+and+ML+Solutions](https://placehold.co/800x80/1a1a1a/6b7280?text=AI+and+ML+Solutions)" alt="AI and Machine Learning Solutions" class="w-full h-auto rounded-lg mt-auto object-cover">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent {}