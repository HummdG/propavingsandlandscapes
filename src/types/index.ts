export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  headline: string;
  subheadline: string;
  description: string;
  features: string[];
  faqs: FAQ[];
  heroImage: string;
  galleryImages: GalleryImage[];
  metaTitle: string;
  metaDescription: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  service?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}
