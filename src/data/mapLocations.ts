import type { LatLngTuple } from 'leaflet';

export type MapLocation = {
  id: string;
  name: string;
  coordinates: LatLngTuple;
  type: 'paleocristiana' | 'bizantina' | 'romanica';
  description: string;
};

export const locations: MapLocation[] = [
  // Paleocristiana
  {
    id: 'san-pietro',
    name: 'Basilica di San Pietro in Vaticano',
    coordinates: [41.9022, 12.4539],
    type: 'paleocristiana',
    description: 'Basilica originale costruita dall\'imperatore Costantino (319-333 d.C.)'
  },
  {
    id: 'santa-maria-maggiore',
    name: 'Basilica di Santa Maria Maggiore',
    coordinates: [41.8976, 12.4983],
    type: 'paleocristiana',
    description: 'Prima chiesa eretta in onore della Vergine (432-440 d.C.)'
  },
  {
    id: 'santa-costanza',
    name: 'Mausoleo di Santa Costanza',
    coordinates: [41.9229, 12.5124],
    type: 'paleocristiana',
    description: 'Mausoleo funerario del IV secolo d.C.'
  },
  {
    id: 'battistero-lateranense',
    name: 'Battistero Lateranense',
    coordinates: [41.8864, 12.5042],
    type: 'paleocristiana',
    description: 'Uno dei più importanti edifici religiosi della cristianità (IV sec. d.C.)'
  },

  // Bizantina
  {
    id: 'battistero-ortodossi',
    name: 'Battistero degli Ortodossi',
    coordinates: [44.4183, 12.1967],
    type: 'bizantina',
    description: 'Battistero Neoniano a Ravenna (400-458 d.C.)'
  },
  {
    id: 'galla-placidia',
    name: 'Mausoleo di Galla Placidia',
    coordinates: [44.4201, 12.1966],
    type: 'bizantina',
    description: 'Capolavoro dell\'arte paleocristiana-bizantina a Ravenna (450 d.C.)'
  },
  {
    id: 'san-vitale',
    name: 'Basilica di San Vitale',
    coordinates: [44.4206, 12.1954],
    type: 'bizantina',
    description: 'Capolavoro dell\'architettura bizantina a Ravenna (548 d.C.)'
  },
  {
    id: 'sant-apollinare-nuovo',
    name: 'Basilica di Sant\'Apollinare Nuovo',
    coordinates: [44.4181, 12.2030],
    type: 'bizantina',
    description: 'Basilica palatina costruita da Teodorico a Ravenna (505 d.C.)'
  },

  // Romanica
  {
    id: 'sant-ambrogio',
    name: 'Basilica di Sant\'Ambrogio',
    coordinates: [45.4620, 9.1742],
    type: 'romanica',
    description: 'Capolavoro del romanico lombardo a Milano (1080-1128)'
  },
  {
    id: 'cattedrale-modena',
    name: 'Cattedrale di San Geminiano',
    coordinates: [44.6444, 10.9267],
    type: 'romanica',
    description: 'Esemplare significativo del romanico emiliano a Modena (1099-1184)'
  },
  {
    id: 'piazza-miracoli',
    name: 'Complesso di Piazza dei Miracoli',
    coordinates: [43.7230, 10.3966],
    type: 'romanica',
    description: 'Straordinario esempio del romanico toscano a Pisa (XI-XIV sec.)'
  },
  {
    id: 'san-marco',
    name: 'Basilica di San Marco',
    coordinates: [45.4347, 12.3397],
    type: 'romanica',
    description: 'Capolavoro del romanico veneziano (1063-1094)'
  },
  {
    id: 'monreale',
    name: 'Cattedrale di Monreale',
    coordinates: [38.0815, 13.2920],
    type: 'romanica',
    description: 'Esempio magnifico del romanico meridionale in Sicilia (1174-1185)'
  }
];
