import { Component, inject } from '@angular/core';

import { SeoService } from '../../services/seo.service';

import type { SeoConfig } from '../../services/seo.service';

@Component({
  selector: 'rig-home',
  imports: [],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  private readonly seoService = inject(SeoService);
  private readonly seoConfig: SeoConfig = {
    title: 'Rigved Patki - Full Stack Developer',
    description:
      'Portfolio of Rigved Patki, experienced full stack developer specializing in modern web technologies.',
    keywords: [
      'Rigved Patki',
      'Full Stack Developer',
      'Web Developer',
      'Software Developer',
      'Portfolio',
    ],
    url: 'https://rigvedpatki.dev',
    image: 'https://rigvedpatki.dev/assets/images/profile.webp',
  };

  constructor() {
    this.seoService.updateSeo(this.seoConfig);
  }
}
