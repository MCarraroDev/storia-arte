import type { Section } from '../types';
import sanPietroImg from '../assets/san-pietro.png';

export const paleocristianoContent: Section = {
  id: 'paleocristiana',
  title: 'Arte Paleocristiana',
  content: [
    {
      type: 'paragraph',
      content: 'L\'arte paleocristiana nasce dopo l\'Editto di Milano del 313 d.C., che concesse la libertà di culto ai cristiani. Prima di questa data, le espressioni artistiche cristiane erano limitate a simboli nascosti nelle catacombe o in ambienti privati per sfuggire alle persecuzioni.'
    },
    {
      type: 'subtitle',
      content: 'Basilica di San Pietro in Vaticano (319-333 d.C.)'
    },
    {
      type: 'paragraph',
      content: 'Costruita dall\'imperatore Costantino sopra la tomba dell\'apostolo Pietro, era un\'imponente struttura a croce latina con cinque navate, un vasto atrio e un\'abside semicircolare. L\'edificio era preceduto da un quadriportico al quale si accedeva dopo aver oltrepassato una costruzione con tre portali.'
    },
    {
      type: 'paragraph',
      content: 'L\'interno era riccamente decorato con mosaici absidali che raffiguravano Cristo Pantocratore, la Vergine e scene evangeliche. Le colonne, provenienti da edifici romani preesistenti, conferivano monumentalità alla struttura. La tomba di San Pietro era protetta da un baldacchino formato da quattro colonne tortili, decorate con tralci di vite.'
    },
    {
      type: 'image',
      content: 'Ricostruzione della Basilica di San Pietro costantiniana',
      imageUrl: sanPietroImg
    },
    {
      type: 'subtitle',
      content: 'Basilica di Santa Maria Maggiore (432-440 d.C.)'
    },
    {
      type: 'paragraph',
      content: 'Prima chiesa eretta in onore della Vergine, voluta da Papa Sisto III all\'indomani del Concilio di Efeso (431 d.C.) che le aveva riconosciuto il ruolo di Madre di Dio (Theotókos). La basilica originariamente era costituita da un\'unica sala suddivisa in tre navate, separate da quaranta colonne di reimpiego, ioniche dal fusto liscio e poste a sostenere un architrave anziché arcate.'
    },
    {
      type: 'paragraph',
      content: 'L\'altare è il punto di fuga visivo e la meta ideale di un percorso obbligato. Questa soluzione determina un senso di solennità classica, amplificato dalla monumentalità dell\'arco trionfale rivestito da mosaico. Negli anni successivi furono aggiunti il nartece, il transetto e l\'abside.'
    },
    {
      type: 'image',
      content: 'Navata centrale di Santa Maria Maggiore',
      imageUrl: 'https://www.basilicasantamariamaggiore.va/content/dam/santamariamaggiore/basilica/arte/interni.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg'
    },
    {
      type: 'subtitle',
      content: 'Mausoleo di Santa Costanza (IV sec. d.C.)'
    },
    {
      type: 'paragraph',
      content: 'Costruito a Roma nel IV secolo per accogliere le spoglie di Costantina ed Elena, figlie dell\'imperatore Costantino, e annesso alla basilica di Sant\'Agnese fuori le mura. L\'edificio presenta una pianta circolare centrale (caratteristica dei monumenti funerari paleocristiani) circondato da una peristasi di colonne binate di ordine composito.'
    },
    {
      type: 'paragraph',
      content: 'Le coppie di colonne sorreggono il tamburo sul quale si imposta la cupola emisferica, un tempo interamente rivestita di mosaici. Lo spazio interno è suddiviso in due parti concentriche, con un corridoio anulare (ambulacro) esterno. La volta anulare è decorata con mosaici policromi che rappresentano una combinazione di elementi naturalistici e simbolici, come tralci di vite, grappoli d\'uva e putti vendemmiatori.'
    },
    {
      type: 'image',
      content: 'Interno del Mausoleo di Santa Costanza',
      imageUrl: 'https://www.roma.com/wp-content/uploads/2022/12/Mausoleo-di-Santa-Costanza-Deposit-Photos.jpg'
    },
    {
      type: 'subtitle',
      content: 'Battistero Lateranense (IV sec. d.C.)'
    },
    {
      type: 'paragraph',
      content: 'Situato a Roma, è uno dei più importanti edifici religiosi della cristianità. È dedicato al battesimo e fa parte del complesso del Palazzo Laterano, che include anche la Basilica di San Giovanni in Laterano. Fu costruito nel IV secolo sotto l\'imperatore Costantino, primo imperatore romano a convertirsi al cristianesimo.'
    },
    {
      type: 'paragraph',
      content: 'Il Battistero è di forma ottagonale, una scelta simbolica che rappresenta la resurrezione e la nuova vita. Al centro si trova una grande vasca per il battesimo, simbolo di purificazione. È costruito in mattoni e rivestito in marmo, con decorazioni in mosaico che adornano le pareti e la cupola, con un\'apertura centrale (oculus) che simboleggia la luce divina.'
    },
    {
      type: 'image',
      content: 'Battistero Lateranense',
      imageUrl: 'https://www.meisterdrucke.it/kunstwerke/1260px/Paleo_Christian_-_View_of_the_Paleochretian_baptistere_of_San_Giovanni_in_Laterano_%28Saint_John_Lat_-_%28MeisterDrucke-971022%29.jpg'
    }
  ]
}
