import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  public updateSeo(config: SeoConfig) {
    // Update title
    this.title.setTitle(config.title);

    // Update meta tags
    this.meta.updateTag({ name: 'description', content: config.description });
    if (config.keywords?.length) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords?.join(',') });
    }

    // Update Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
    }
    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
    }

    // Update Twitter tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    if (config.image) {
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
    }
  }
}
