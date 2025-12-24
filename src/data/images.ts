export interface ImageItem {
  id: string;
  url: string;
  width: number;
  height: number;
  alt: string;
  category: string;
}

export const galleryImages: ImageItem[] = [
  // Ligne 1
  {
    id: '1',
    url: 'https://pub-d10472e1ed20439a8d45da80f3e9a86b.r2.dev/rouge-gorge.webp',
    width: 1000,
    height: 600,
    alt: 'Rouge-Gorge',
    category: 'Birds'
  },
  {
    id: '2',
    url: 'https://pub-d10472e1ed20439a8d45da80f3e9a86b.r2.dev/cormoran.webp',
    width: 1000,
    height: 600,
    alt: 'Cormoran Commun',
    category: 'Birds'
  },
  {
    id: '3',
    url: 'https://pub-d10472e1ed20439a8d45da80f3e9a86b.r2.dev/faucon.webp',
    width: 1000,
    height: 600,
    alt: 'Faucon Crécerelle',
    category: 'Birds'
  }
];