import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import PrintIcon from '@mui/icons-material/Print';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import GroupsIcon from '@mui/icons-material/Groups';
import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import galeryimg1 from '../images/g1.jpg';
import galeryimg2 from '../images/g2.jpg';
import galeryimg3 from '../images/g3.jpg';
import galeryimg4 from '../images/g4.jpg';
import galeryimg5 from '../images/g5.jpg';
import galeryimg6 from '../images/g6.jpg';
import galeryimg7 from '../images/g7.jpg';
import galeryimg8 from '../images/g8.jpg';
import galeryimg9 from '../images/g9.jpg';

export const navItems = [
  { title: 'O Nama', link: 'AboutUs' },
  { title: 'Ponude', link: 'Offers' },
  { title: 'Kontakt', link: 'Contact' },
  { title: 'Galerija', link: 'ImageGallery' },
];
export const productFeatures = [
  {
    icon: <PriorityHighIcon sx={{ fontSize: '6rem' }} />,
    text: 'Jednostavan za koriscenje, brzo se montira i zauzima malo prostora',
  },
  {
    icon: <CropPortraitIcon sx={{ fontSize: '6rem' }} />,
    text: 'Interaktivno ogledalo sa polu-reflektujucim staklom i touch screen-on',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: '6rem' }} />,
    text: 'Pogodan je za fotografisanje vise osoba u isto vreme',
  },
  {
    icon: <PrintIcon sx={{ fontSize: '6rem' }} />,
    text: 'Fotografije se stampaju odmah',
  },
  {
    icon: <LocalBarIcon sx={{ fontSize: '6rem' }} />,
    text: 'Idealan za sve tipove dogadjaja, vencanja, rodjendane i korporativne event-e',
  },
  {
    icon: <PriorityHighIcon sx={{ fontSize: '6rem' }} />,
    text: 'U ponudi imamo veliki broj ramova i dodataka koje ce ogledalu dati jos bolji efekat',
  },
];
export const carouselImages = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    img: img1,
  },
  {
    label: 'Bird',
    img: img2,
  },
  {
    label: 'Bali, Indonesia',
    img: img3,
  },
  {
    label: 'Goč, Serbia',
    img: img4,
  },
];
export const instagramPath =
  'https://www.instagram.com/magicno_ogledalo_carolija/?fbclid=IwAR3ty5JYdzlMw9sdk1eFa9lM9mnPx2-fmFCjagxDhbzCDHX6FH8_XUOU7Y8';
export const facebookPath =
  'https://www.facebook.com/profile.php?id=100087532722515';
export const email = 'magicmirror.carolija@gmail.com';
export const phoneNumber = '+381600781823';
export const productOffers = [
  {
    name: 'Minimum',
    price: '120',
    includes: [
      '1 sat magičnog ogledala',
      'Neogranicen broj fotografija',
      'Foto rekviziti',
      'Crveni Tepih',
    ],
  },
  {
    name: 'Standard',
    price: 300,
    includes: [
      '3 sata magičnog ogledala',
      'Neogranicen broj fotografija',
      'Foto rekviziti',
      'Crveni Tepih',
    ],
  },
  {
    name: 'Minimum',
    price: 170,
    includes: [
      '2 sata koriscenja',
      'Neogranicen broj fotografija',
      'Foto rekviziti',
    ],
  },
];
export const galeryImages = [
  {
    img: galeryimg1,
    width: 1080,
    height: 780,
  },
  {
    img: galeryimg2,
    width: 580,
    height: 780,
  },
  {
    img: galeryimg3,
    width: 580,
    height: 780,
  },
  {
    img: galeryimg4,
    width: 580,
    height: 780,
  },
  {
    img: galeryimg5,
    width: 580,
    height: 780,
  },
  {
    img: galeryimg6,
    width: 580,
    height: 780,
  },
  {
    img: galeryimg7,
    width: 1080,
    height: 780,
  },
  {
    img: galeryimg8,
    width: 580,
    height: 780,
  },
  {
    img: galeryimg9,
    width: 580,
    height: 780,
  },
];
export const FAQData = {
  title: 'Često postavljena pitanja',
  rows: [
    {
      title: 'Kada dobijam fotografije',
      content:
        'Nakon fotografisanja na licu mesta, štampač najmodernije generacije će izraditi tvoju sliku u roku od par sekundi. Ako želite, fotografije se mogu poslati nakon događaja i u digitalnom formatu putem email adrese',
    },
  ],
};
export const roseColor =
  'linear-gradient(90deg, rgba(128,85,85,1) 0%, rgba(242,190,189,1) 35%, rgba(245,196,196,1) 70%), rgba(149,103,102,1) 100%';
export const redColor =
  'linear-gradient(90deg, rgba(122,30,30,1) 0%, rgba(175,26,23,1) 35%, rgba(236,23,18,1) 70%, rgba(166,23,20,1) 100%)';
export const blackColor =
  'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(27,25,25,1) 70%, rgba(0,0,0,1) 100%)';
export const rose = '#dfb0b9';
export const white =
  'linear-gradient(90deg, rgba(218,214,214,1) 0%, rgba(251,249,249,1) 35%, rgba(200,200,200,1) 70%)';
