import type { ImageMetadata } from 'astro';

import moxyPublicRoomsStair from '../assets/work/moxy-hotel-williamsburg/public-rooms-stair.png';
import moxyGalleryCorridor from '../assets/work/moxy-hotel-williamsburg/gallery-corridor.jpg';
import moxyPublicRoomsWide from '../assets/work/moxy-hotel-williamsburg/public-rooms-wide.jpg';
import maximesImg from '../assets/work/maximes.jpg';
import maximesCustomColor from '../assets/work/maximes/custom-color.jpg';
import maximesCorridorCameraCorner from '../assets/work/maximes/corridor-camera-corner.jpg';
import maximesCorridorDoorway from '../assets/work/maximes/corridor-doorway.jpg';
import maximesCrownFloralDetail from '../assets/work/maximes/crown-floral-detail.jpg';
import maximesPilasterDetail from '../assets/work/maximes/pilaster-detail.jpg';
import maximesWindowFrameDetail from '../assets/work/maximes/window-frame-detail.jpg';
import maximesMirroredCeiling from '../assets/work/maximes/mirrored-ceiling.jpg';
import friedmansPdrWide from '../assets/work/friedmans/pdr-wide.jpg';
import friedmansPdrMirrorWall from '../assets/work/friedmans/pdr-mirror-wall.jpg';
import friedmansPdrCeiling from '../assets/work/friedmans/pdr-ceiling.jpg';
import friedmansGildingDetail1 from '../assets/work/friedmans/gilding-detail-01.jpg';
import friedmansGildingDetail2 from '../assets/work/friedmans/gilding-detail-02.jpg';
import w13thImg from '../assets/work/w-13th-st-residence.jpg';
import laightStHeadboardCeilingDetail from '../assets/work/laight-st-residence/headboard-ceiling-beam-detail.jpg';
import laightStBedroomArtworkWall from '../assets/work/laight-st-residence/bedroom-eye-artwork-wall.jpg';
import laightStMediaWallWide from '../assets/work/laight-st-residence/bedroom-media-wall-wide.jpg';
import laightStMediaWallDetail from '../assets/work/laight-st-residence/bedroom-media-wall-detail.jpg';
import laightStCorridorArchway from '../assets/work/laight-st-residence/corridor-archway.jpg';
import laightStCorridorDoors from '../assets/work/laight-st-residence/corridor-doors.jpg';
import carverImg from '../assets/work/carver-steak/coffered-ceiling.jpg';
import carverChandelierCorridor from '../assets/work/carver-steak/chandelier-corridor.jpg';
import carverGoldPlasterWall from '../assets/work/carver-steak/gold-plaster-wall.jpg';
import carverEntryGlassDoors from '../assets/work/carver-steak/entry-glass-doors.jpg';
import carverMirrorCornerDetail from '../assets/work/carver-steak/mirror-corner-detail.jpg';
import carverPlasterColumnCorner from '../assets/work/carver-steak/plaster-column-corner.jpg';
import carverBeadboardCeilingCorner from '../assets/work/carver-steak/beadboard-ceiling-corner.jpg';

import horatioBedroom1 from '../assets/work/horatio-st-apartment/bedroom-01.jpg';
import horatioBedroom2 from '../assets/work/horatio-st-apartment/bedroom-02.jpg';
import horatioKitchenRange from '../assets/work/horatio-st-apartment/kitchen-range-wall.jpg';
import horatioKitchenSink from '../assets/work/horatio-st-apartment/kitchen-sink-wall.jpg';
import horatioBathShower from '../assets/work/horatio-st-apartment/primary-bath-shower.jpg';
import horatioBathVanityWide from '../assets/work/horatio-st-apartment/primary-bath-vanity-wide.jpg';
import horatioBathVanity from '../assets/work/horatio-st-apartment/primary-bath-vanity.jpg';

import forgioneDiningBooth from '../assets/work/forgione/dining-room-booth.jpg';
import forgioneDiningDoorway from '../assets/work/forgione/dining-room-doorway.jpg';
import forgioneDiningBrickDetail from '../assets/work/forgione/dining-room-brick-detail.jpg';
import forgioneBackDiningWide from '../assets/work/forgione/back-dining-room-wide.jpg';
import forgioneBackDiningWall from '../assets/work/forgione/back-dining-room-wall.jpg';
import forgioneBackDiningSconces from '../assets/work/forgione/back-dining-room-sconces.jpg';
import forgionePlasterDetail from '../assets/work/forgione/plaster-patina-detail.jpg';

import stRegisStairEnclosureWide from '../assets/work/st-regis-residences-rye/stair-enclosure-wide.jpg';
import stRegisStairEnclosureDetail from '../assets/work/st-regis-residences-rye/stair-enclosure-detail.jpg';
import stRegisStairTreadDetail from '../assets/work/st-regis-residences-rye/stair-tread-detail.jpg';
import stRegisSpiralStairUnderside from '../assets/work/st-regis-residences-rye/spiral-stair-underside.jpg';
import stRegisSideTableDetail from '../assets/work/st-regis-residences-rye/side-table-detail.jpg';

import dramaBookExplosionWall from '../assets/work/drama-book-shop/book-explosion-wall.jpg';
import dramaPlasterWallPoster from '../assets/work/drama-book-shop/plaster-wall-poster.jpg';
import dramaPosterGalleryWall from '../assets/work/drama-book-shop/poster-gallery-wall.jpg';
import dramaBookExplosionWide from '../assets/work/drama-book-shop/book-explosion-wide.jpg';
import dramaBookSpiralDetail from '../assets/work/drama-book-shop/book-spiral-detail.jpg';

export interface Photo {
  img: ImageMetadata;
  alt: string;
  room: string;
  materials: string;
}

export interface Job {
  slug: string;
  name: string;
  href?: string;
  /** Hidden from the /work listing grid, but still gets its own detail page. */
  hidden?: boolean;
  year: string;
  location: string;
  category?: string;
  /** One-sentence, unique summary used as the detail page's meta description. */
  seoDescription: string;
  photos: Photo[];
}

export const categories = ['Restaurants', 'Hotels', 'Residences', 'Private clubs', 'Restoration'];

export const jobs: Job[] = [
  {
    slug: 'moxy-hotel',
    name: 'Moxy Hotel',
    year: '2023',
    location: 'Williamsburg, Brooklyn',
    category: 'Hotels',
    seoDescription:
      'Venetian plaster and hand-painted murals through the public rooms and stair at Moxy Hotel Williamsburg, decorative plaster by Conor Foy Plaster.',
    photos: [
      {
        img: moxyPublicRoomsStair,
        alt: 'Moxy Hotel Williamsburg — plaster columns and curved soffit',
        room: 'Public rooms & stair',
        materials:
          'Venetian plaster through the public rooms, with hand-painted murals carried up the stair.',
      },
      {
        img: moxyGalleryCorridor,
        alt: 'Moxy Hotel Williamsburg — plaster gallery corridor with arched openings and banquette seating',
        room: 'Gallery corridor',
        materials:
          'Venetian plaster in a warm grey, worked to a soft, cloud-like patina through the arched openings.',
      },
      {
        img: moxyPublicRoomsWide,
        alt: 'Moxy Hotel Williamsburg — wide view of the curved plaster soffit above the dining room',
        room: 'Dining room soffit',
        materials:
          'The same curved plaster soffit seen from the dining room below, banded in cast reveals and dressed with trailing greenery.',
      },
    ],
  },
  {
    slug: 'maximes',
    name: "Maxime's",
    href: 'https://www.maximesclub.com/',
    year: '2025',
    location: 'Midtown',
    category: 'Private clubs',
    seoDescription:
      "Gold leaf crown molding, antiqued mirror ceilings and Bloomsbury-style pilasters at Maxime's, Midtown, decorative plaster by Conor Foy Plaster.",
    photos: [
      {
        img: maximesImg,
        alt: "Maxime's — restored Art Nouveau dining room with gold leaf and plaster",
        room: 'Dining room',
        materials:
          'Hand-painted faux marble crown molding in gold leaf, veining drawn by hand coat over coat.',
      },
      {
        img: maximesMirroredCeiling,
        alt: "Maxime's — antiqued mirror ceiling panels with gilded rosettes",
        room: 'Dining room ceiling',
        materials:
          'Antiqued mirror set in a diamond grid with gilded rosettes at the joints, reflecting the room below.',
      },
      {
        img: maximesCrownFloralDetail,
        alt: "Maxime's — detail of gold leaf crown molding with hand-painted floral border",
        room: 'Crown molding detail',
        materials:
          'Detail of the faux marble crown in gold leaf, paired with a hand-painted floral trim along the ceiling.',
      },
      {
        img: maximesCustomColor,
        alt: "Maxime's — custom faux marble finish in deep red with gilded veining",
        room: 'Custom color',
        materials: 'Hand-painted faux marble in a deep red, veining built up coat over coat to a high gloss.',
      },
      {
        img: maximesPilasterDetail,
        alt: "Maxime's — hand-painted leaf and ring motif over a faux wood-grain pilaster",
        room: 'Pilaster detail',
        materials:
          'Leaf and ring motif hand-painted over a faux wood-grain ground, one of a repeating set in the Bloomsbury style.',
      },
      {
        img: maximesWindowFrameDetail,
        alt: "Maxime's — hand-painted trim wrapping a window frame",
        room: 'Window frame detail',
        materials: 'The same painted trim carried around a window frame, over a faux wood-grain ground.',
      },
      {
        img: maximesCorridorCameraCorner,
        alt: "Maxime's — corridor with hand-painted horizontal stripe over paneled wainscoting",
        room: 'Corridor corner',
        materials:
          'Hand-painted horizontal stripe in navy, teal and cream, carried around the corner above paneled wainscoting.',
      },
      {
        img: maximesCorridorDoorway,
        alt: "Maxime's — corridor view toward a doorway hung with vintage travel posters",
        room: 'Corridor doorway',
        materials: 'The same striped corridor, looking toward a doorway framed in the original paneling.',
      },
    ],
  },
  {
    slug: 'friedmans',
    name: 'Friedmans',
    year: '2024',
    location: 'Greenwich St.',
    category: 'Restaurants',
    seoDescription:
      'Gold leaf diamond gilding over troweled plaster in the private dining room at Friedmans, Greenwich St, by Conor Foy Plaster.',
    photos: [
      {
        img: friedmansPdrWide,
        alt: 'Friedmans — private dining room with gold leaf diamond pattern over troweled plaster',
        room: 'Private dining room',
        materials:
          'Gold leaf laid in a diamond field over troweled plaster, wrapping the banquette wall floor to ceiling.',
      },
      {
        img: friedmansPdrMirrorWall,
        alt: 'Friedmans — private dining room mirror wall with gold leaf diamond pattern',
        room: 'Mirror wall',
        materials: 'The same gold-leaf diamond pattern framing three mirrors above the banquette.',
      },
      {
        img: friedmansPdrCeiling,
        alt: 'Friedmans — private dining room ceiling medallion with gold leaf diamond walls',
        room: 'Ceiling medallion',
        materials: 'Gold-leaf diamonds continue around the oval ceiling medallion.',
      },
      {
        img: friedmansGildingDetail1,
        alt: 'Friedmans — detail of gold leaf diamond pattern applied over plaster',
        room: 'Gilding detail',
        materials: 'Gold leaf applied diamond by diamond over the plastered wall, shown here mid-application.',
      },
      {
        img: friedmansGildingDetail2,
        alt: 'Friedmans — detail of gold leaf diamond pattern turning a corner',
        room: 'Gilding corner detail',
        materials: 'Each diamond built up in overlapping leaf, catching light differently as it wraps the corner.',
      },
    ],
  },
  {
    slug: 'w-13th-st-residence',
    name: 'W 13th St Residence',
    hidden: true,
    year: '2026',
    location: 'West 13th Street',
    category: 'Residences',
    seoDescription:
      'Polished plaster carried wall to wall in a bedroom on West 13th Street, by Conor Foy Plaster.',
    photos: [
      {
        img: w13thImg,
        alt: 'W 13th St Residence — polished plaster bedroom wall',
        room: 'Bedroom',
        materials:
          'Polished plaster carried wall to wall in a single warm tone, burnished to a faint sheen.',
      },
    ],
  },
  {
    slug: 'laight-st-residence',
    name: 'Laight St Residence',
    year: '2025',
    location: 'Tribeca',
    category: 'Residences',
    seoDescription:
      'Hand-troweled lime plaster through a residence on Laight Street, bedroom, media wall and vaulted corridor by Conor Foy Plaster.',
    photos: [
      {
        img: laightStHeadboardCeilingDetail,
        alt: 'Laight St Residence — detail of the lime-plaster beam meeting the reclaimed wood headboard wall',
        room: 'Primary bedroom',
        materials: 'Detail of the plaster beam where it meets the reclaimed wood accent wall.',
      },
      {
        img: laightStBedroomArtworkWall,
        alt: 'Laight St Residence — bedroom wall in smooth lime plaster behind the bed',
        room: 'Bedroom artwork wall',
        materials: 'Smooth lime plaster carried up behind the bed in a warm greige tone.',
      },
      {
        img: laightStMediaWallWide,
        alt: 'Laight St Residence — bedroom media wall in lime plaster',
        room: 'Bedroom media wall',
        materials: 'The same lime plaster continues along the media wall, banded by a beam finished to match.',
      },
      {
        img: laightStMediaWallDetail,
        alt: 'Laight St Residence — detail of the bedroom media wall in lime plaster',
        room: 'Bedroom media wall detail',
        materials: 'Detail of the plaster media wall, finished smooth beneath the beam.',
      },
      {
        img: laightStCorridorArchway,
        alt: 'Laight St Residence — barrel-vaulted plaster corridor between rooms',
        room: 'Corridor archway',
        materials: 'Hand-troweled plaster carried through a barrel-vaulted passage between rooms.',
      },
      {
        img: laightStCorridorDoors,
        alt: 'Laight St Residence — plaster corridor leading toward the bedroom suite',
        room: 'Corridor doorway',
        materials: 'The same vaulted plaster passage, continuing toward the bedroom suite.',
      },
    ],
  },
  {
    slug: 'carversteak-nyc',
    name: 'Carversteak NYC',
    href: 'https://carversteaknyc.com/',
    year: '2026',
    location: 'Midtown',
    category: 'Restaurants',
    seoDescription:
      'Polished plaster coffered ceilings and gold venetian plaster walls at Carversteak NYC, Midtown, by Conor Foy Plaster.',
    photos: [
      {
        img: carverImg,
        alt: 'Carversteak NYC — polished plaster coffered ceiling above dark millwork',
        room: 'Dining room ceiling',
        materials: 'Polished plaster coffered ceiling burnished to a warm limestone glow.',
      },
      {
        img: carverChandelierCorridor,
        alt: 'Carversteak NYC — entry corridor in deep bronze plaster beneath twin art deco chandeliers',
        room: 'Entry corridor',
        materials:
          'Hand-troweled plaster in a deep bronze tone through the entry corridor, framed by dark millwork and paired art deco chandeliers.',
      },
      {
        img: carverGoldPlasterWall,
        alt: 'Carversteak NYC — dining room wall in warm gold venetian plaster between antiqued mirror windows',
        room: 'Dining room wall',
        materials:
          'Hand-troweled venetian plaster in a warm gold, set within dark wood paneling between antiqued mirror windows.',
      },
      {
        img: carverEntryGlassDoors,
        alt: 'Carversteak NYC — plaster-paneled entry vestibule leading to etched-glass doors at the host stand',
        room: 'Host stand',
        materials: 'The plaster-paneled entry vestibule leading to the etched-glass doors at the host stand.',
      },
      {
        img: carverMirrorCornerDetail,
        alt: 'Carversteak NYC — antiqued mirror panels framed in gold venetian plaster',
        room: 'Mirror detail',
        materials: 'Antiqued mirror panels framed in the same gold plaster, reflecting the dining room beyond.',
      },
      {
        img: carverPlasterColumnCorner,
        alt: 'Carversteak NYC — detail of venetian plaster wrapping a column corner in mustard gold',
        room: 'Plaster column detail',
        materials: 'Detail of the venetian plaster wrapping a column corner, deepened to a rich mustard gold.',
      },
      {
        img: carverBeadboardCeilingCorner,
        alt: 'Carversteak NYC — plaster wall meeting a beadboard ceiling corner',
        room: 'Ceiling & wall corner',
        materials: 'Plaster wall meeting the beadboard ceiling, worked to a soft travertine texture.',
      },
    ],
  },
  {
    slug: 'horatio-st-apartment',
    name: 'Horatio St. Apartment',
    year: '2026',
    location: 'West Village',
    category: 'Residences',
    seoDescription:
      'Warm lime plaster and a gold polished-plaster kitchen backsplash in a West Village apartment, by Conor Foy Plaster.',
    photos: [
      {
        img: horatioBedroom1,
        alt: 'Horatio St. Apartment — bedroom with warm lime-plaster walls and ceiling',
        room: 'Bedroom',
        materials: 'Smooth lime plaster carried wall to ceiling in a warm sand tone.',
      },
      {
        img: horatioBedroom2,
        alt: 'Horatio St. Apartment — primary bedroom with lime-plaster walls and skyline view',
        room: 'Primary bedroom',
        materials: 'The same warm lime plaster, with built-in cabinetry below the skyline view.',
      },
      {
        img: horatioKitchenRange,
        alt: 'Horatio St. Apartment — kitchen range wall with gold polished-plaster backsplash',
        room: 'Kitchen range wall',
        materials:
          'Polished plaster backsplash in a burnished gold tone, set within an arched niche behind the range.',
      },
      {
        img: horatioKitchenSink,
        alt: 'Horatio St. Apartment — kitchen sink wall with gold polished-plaster backsplash',
        room: 'Kitchen sink wall',
        materials:
          'The same gold polished plaster continues behind the sink, paired with green marble counters.',
      },
      {
        img: horatioBathShower,
        alt: 'Horatio St. Apartment — primary bathroom shower with grey venetian plaster and marble',
        room: 'Primary bathroom shower',
        materials:
          'Fine venetian plaster in warm grey on the walls and ceiling, framing a book-matched marble shower.',
      },
      {
        img: horatioBathVanityWide,
        alt: 'Horatio St. Apartment — primary bathroom, shower and vanity wall',
        room: 'Primary bathroom, shower and vanity',
        materials: 'Grey venetian plaster surrounds the marble-clad shower and vanity wall.',
      },
      {
        img: horatioBathVanity,
        alt: 'Horatio St. Apartment — primary bathroom vanity and mirror niche',
        room: 'Primary bathroom vanity',
        materials: 'Venetian plaster meets a marble vanity top beneath a backlit mirror niche.',
      },
    ],
  },
  {
    slug: 'forge',
    name: 'Forge',
    href: 'https://www.marcforgione.com/',
    year: '2026',
    location: 'Tribeca',
    category: 'Restaurants',
    seoDescription:
      "Faux-aged whitewashed brick and hand-troweled lime plaster at Forge, Marc Forgione's Tribeca restaurant, by Conor Foy Plaster.",
    photos: [
      {
        img: forgioneDiningBooth,
        alt: 'Forge — dining room booth with faux-aged whitewashed brick finish',
        room: 'Dining room booth',
        materials:
          'A faux-aged brick finish, hand-painted and distressed to read as whitewashed century-old brick, above reclaimed wood wainscoting.',
      },
      {
        img: forgioneDiningDoorway,
        alt: 'Forge — dining room doorway with faux-aged whitewashed brick finish',
        room: 'Dining room doorway',
        materials: 'The same faux-aged brick finish carried around the doorway.',
      },
      {
        img: forgioneDiningBrickDetail,
        alt: 'Forge — detail of the faux-aged whitewashed brick finish',
        room: 'Brick finish detail',
        materials: 'Detail of the hand-worked brick finish, layered whitewash over red and grey undertones.',
      },
      {
        img: forgioneBackDiningWide,
        alt: 'Forge — back dining room with smooth lime plaster walls',
        room: 'Back dining room',
        materials: 'Hand-troweled lime plaster in a warm greige tone through the back dining room, worked to a mottled, aged patina.',
      },
      {
        img: forgioneBackDiningWall,
        alt: 'Forge — back dining room lime plaster wall above wood wainscoting',
        room: 'Back dining room wall',
        materials: 'The same lime plaster above reclaimed wood wainscoting, sconce-lit along the wall.',
      },
      {
        img: forgioneBackDiningSconces,
        alt: 'Forge — back dining room lime plaster wall beneath a beamed ceiling',
        room: 'Back dining room ceiling',
        materials: 'Lime plaster and wood wainscoting continue beneath the black beamed ceiling.',
      },
      {
        img: forgionePlasterDetail,
        alt: 'Forge — detail of the aged patina lime plaster finish',
        room: 'Plaster detail',
        materials: 'Detail of the aged patina finish, light and dark limewash layered for a weathered, centuries-old look.',
      },
    ],
  },
  {
    slug: 'st-regis-residences-rye',
    name: 'St. Regis Residences',
    href: 'https://marriottresidences.com/luxury_brand/st-regis-residences/',
    year: '2025',
    location: 'Rye, NY',
    category: 'Residences',
    seoDescription:
      'Sculptural plaster stair enclosures and venetian finishes at St. Regis Residences, Rye, NY, by Conor Foy Plaster.',
    photos: [
      {
        img: stRegisStairEnclosureWide,
        alt: 'St. Regis Residences Rye — curved plaster stair enclosure beneath a crystal chandelier',
        room: 'Lobby stair enclosure',
        materials:
          'Smooth troweled plaster over the sweeping curved stair enclosure, banded in a brushed bronze cap rail.',
      },
      {
        img: stRegisStairEnclosureDetail,
        alt: 'St. Regis Residences Rye — stair enclosure showing the plaster finish meeting the bronze rail',
        room: 'Stair enclosure detail',
        materials: 'The same troweled plaster wrapping the enclosure’s curved profile beneath the bronze cap.',
      },
      {
        img: stRegisStairTreadDetail,
        alt: 'St. Regis Residences Rye — plaster stairwell wall along the lobby stair',
        room: 'Stair treads',
        materials: 'Warm grey troweled plaster carried down the curved stairwell wall, set with integrated step lighting.',
      },
      {
        img: stRegisSpiralStairUnderside,
        alt: 'St. Regis Residences Rye — underside of the sculptural spiral stair in dark plaster',
        room: 'Spiral stair underside',
        materials:
          'A dark, hand-textured plaster finish on the stair’s sculptural underside, edged in brushed bronze.',
      },
      {
        img: stRegisSideTableDetail,
        alt: 'St. Regis Residences Rye — detail of a hand-textured plaster tabletop finish',
        room: 'Side table detail',
        materials: 'Hand-textured plaster tabletop finish in a dark tone, set within a brushed bronze ring.',
      },
    ],
  },
  {
    slug: 'the-drama-book-shop',
    name: 'The Drama Book Shop',
    href: 'https://dramabookshop.com/',
    year: '2020',
    location: 'Broadway',
    seoDescription:
      'Hand-aged lime plaster behind a sculptural book installation at The Drama Book Shop on Broadway, by Conor Foy Plaster.',
    photos: [
      {
        img: dramaBookExplosionWall,
        alt: 'The Drama Book Shop — sculptural installation of books and torn pages on an aged plaster wall',
        room: 'Book sculpture wall',
        materials:
          'Hand-aged lime plaster in a soft travertine tone, backing a sculptural installation of books and torn pages.',
      },
      {
        img: dramaPlasterWallPoster,
        alt: 'The Drama Book Shop — detail of the distressed plaster finish beside a framed theater poster',
        room: 'Plaster wall detail',
        materials: 'Detail of the hand-worked plaster finish, layered and distressed to read as decades of wear.',
      },
      {
        img: dramaPosterGalleryWall,
        alt: 'The Drama Book Shop — gallery wall of vintage theater posters over aged plaster',
        room: 'Poster gallery wall',
        materials: 'The same aged plaster finish continues along the gallery wall of vintage theater posters.',
      },
      {
        img: dramaBookExplosionWide,
        alt: 'The Drama Book Shop — wide view of the book sculpture spanning the double-height plaster wall',
        room: 'Book sculpture, wide view',
        materials:
          'The book sculpture in full, spanning the double-height plaster wall above the shop floor below.',
      },
      {
        img: dramaBookSpiralDetail,
        alt: 'The Drama Book Shop — detail of the cascading book installation beside the original pressed-tin cornice',
        room: 'Book spiral detail',
        materials: 'Detail of the cascading book installation, set against the original pressed-tin cornice.',
      },
    ],
  },
];
