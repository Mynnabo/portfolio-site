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
    url: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1000&auto=format&fit=crop',
    width: 1000,
    height: 600,
    alt: 'Tigre marchant dans les herbes hautes',
    category: 'Wildlife'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1611003228941-98852ba62227?q=80&w=1000&auto=format&fit=crop',
    width: 1000,
    height: 600,
    alt: 'Portrait aigle royal profil',
    category: 'Birds'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1557050543-4d5f4e64185f?q=80&w=1000&auto=format&fit=crop',
    width: 1000,
    height: 600,
    alt: 'Éléphant d\'Afrique en noir et blanc',
    category: 'Mammals'
  },
  // Ligne 2
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1000&auto=format&fit=crop',
    width: 1000,
    height: 600,
    alt: 'Jaguar au repos sur une branche',
    category: 'Wildlife'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1550948537-130a1ce83314?q=80&w=1000&auto=format&fit=crop',
    width: 1000,
    height: 600,
    alt: 'Colibri en vol vers une fleur',
    category: 'Birds'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=1000&auto=format&fit=crop',
    width: 1000,
    height: 600,
    alt: 'Ours polaire sur la banquise',
    category: 'Mammals'
  },
  // Images cachées (chargées via "Voir plus")
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop',
    width: 1000,
    height: 600,
    alt: 'Lion dans la savane',
    category: 'Wildlife'
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1000&auto=format&fit=crop',
    width: 1000,
    height: 600,
    alt: 'Léopard des neiges',
    category: 'Wildlife'
  },
    {
    id: '9',
    url: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=1000&auto=format&fit=crop',
    width: 1000,
    height: 600,
    alt: 'Renard dans la neige',
    category: 'Wildlife'
  }
];