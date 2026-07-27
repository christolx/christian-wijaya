import type { ImageMetadata } from "astro";
import midnightChrono from "../assets/products/MidnightChrono.png";
import royalCufflinks from "../assets/products/RoyalCufflink.png";
import executiveWallet from "../assets/products/ExecutiveWallet.png";
import goldenEra from "../assets/GoldenEra.jpg";
import diamondNecklace from "../assets/DiamondNecklace.webp";
import businessBriefcase from "../assets/BusinessBriefcase.jpg";
import silkTie from "../assets/SilkTie.jpg";
import platinumRing from "../assets/PlatinumRing.avif";
import tourbillon from "../assets/tourbillon.webp";
import alligatorBelt from "../assets/alligatorbelt.webp";
import leatherHandbag from "../assets/leatherhandbag.jpg";
import emeraldRing from "../assets/emeraldring.jpg";

export type ProductCategory = "watches" | "accessories" | "leather" | "jewelry";

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  image: ImageMetadata;
  imageAlt: string;
  description: string;
  features: string[];
  relatedIds: number[];
}

const relatedIds = [4, 9, 2, 5];

export const products: Product[] = [
  {
    id: 1,
    slug: "midnight-chrono",
    name: "Midnight Chrono",
    category: "watches",
    categoryLabel: "Watches",
    price: 12500,
    image: midnightChrono,
    imageAlt: "Midnight Chrono Watch",
    description:
      "The Midnight Chrono is the epitome of luxury timekeeping. Crafted with meticulous attention to detail, this exceptional timepiece features a 42mm 18K rose gold case, Swiss automatic movement with chronograph function, and a sapphire crystal case back revealing the intricate mechanism within. The deep midnight blue dial with luminous hands ensures perfect legibility in any lighting condition, while the hand-stitched alligator leather strap provides unparalleled comfort.",
    features: [
      "42mm 18K rose gold case",
      "Swiss automatic movement",
      "Chronograph function",
      "Sapphire crystal case back",
      "Water resistant to 100 meters",
      "Hand-stitched alligator leather strap",
    ],
    relatedIds,
  },
  {
    id: 2,
    slug: "royal-cufflinks",
    name: "Royal Cufflinks",
    category: "accessories",
    categoryLabel: "Accessories",
    price: 3850,
    image: royalCufflinks,
    imageAlt: "Royal Cufflinks",
    description:
      "Elevate your formal attire with our Royal Cufflinks, meticulously crafted from 18K white gold and adorned with brilliant-cut diamonds. These exquisite accessories feature our signature geometric design, symbolizing precision and elegance. Perfect for special occasions or as a distinguished gift, these cufflinks embody timeless sophistication and unparalleled craftsmanship.",
    features: [
      "18K white gold construction",
      "VS clarity brilliant-cut diamonds",
      "Secure toggle closure",
      "Hand-polished finish",
      "Presented in a luxury gift box",
      "Certificate of authenticity included",
    ],
    relatedIds,
  },
  {
    id: 3,
    slug: "executive-wallet",
    name: "Executive Wallet",
    category: "leather",
    categoryLabel: "Leather Goods",
    price: 1200,
    image: executiveWallet,
    imageAlt: "Executive Wallet",
    description:
      "The Executive Wallet combines refined aesthetics with practical functionality. Handcrafted from premium Italian calfskin leather, this sophisticated accessory features multiple card slots, bill compartments, and a dedicated coin pocket. The interior is lined with our signature silk fabric, while the exterior showcases our subtle embossed logo. Slim yet spacious, this wallet is designed for the modern gentleman who values both style and substance.",
    features: [
      "Italian full-grain calfskin leather",
      "8 card slots",
      "2 bill compartments",
      "Coin pocket with snap closure",
      "Silk interior lining",
      "Embossed logo detail",
    ],
    relatedIds,
  },
  {
    id: 4,
    slug: "golden-era",
    name: "Golden Era",
    category: "watches",
    categoryLabel: "Watches",
    price: 18750,
    image: goldenEra,
    imageAlt: "Golden Era Watch",
    description:
      "The Golden Era timepiece pays homage to the golden age of watchmaking with its refined design and exceptional mechanics. Featuring an 18K yellow gold case with a champagne-colored guilloché dial, this watch combines traditional craftsmanship with modern precision. The self-winding movement with small seconds and date display offers functionality without compromising the elegant aesthetic.",
    features: [
      "40mm 18K yellow gold case",
      "Champagne-colored guilloché dial",
      "Self-winding mechanical movement",
      "Small seconds and date display",
      "Sapphire crystal glass",
      "Brown alligator leather strap",
    ],
    relatedIds,
  },
  {
    id: 5,
    slug: "diamond-cascade-necklace",
    name: "Diamond Cascade Necklace",
    category: "jewelry",
    categoryLabel: "Jewelry",
    price: 24000,
    image: diamondNecklace,
    imageAlt: "Diamond Cascade Necklace",
    description:
      "The Diamond Cascade Necklace is a breathtaking statement piece that epitomizes luxury. This exquisite creation features over 5 carats of brilliant-cut diamonds set in 18K white gold, arranged in a graceful cascade design that draws the eye and captures the light from every angle. Each diamond is hand-selected for exceptional clarity and brilliance, ensuring a piece that will be treasured for generations.",
    features: [
      "Over 5 carats of VS clarity diamonds",
      "18K white gold setting",
      "Secure lobster clasp closure",
      "Adjustable length",
      "Handcrafted by master jewelers",
      "Includes certificate of authenticity",
    ],
    relatedIds,
  },
  {
    id: 6,
    slug: "business-briefcase",
    name: "Business Briefcase",
    category: "leather",
    categoryLabel: "Leather Goods",
    price: 4500,
    image: businessBriefcase,
    imageAlt: "Business Briefcase",
    description:
      "The Business Briefcase is the ultimate executive accessory, combining timeless design with contemporary functionality. Crafted from the finest full-grain leather, this sophisticated briefcase features a spacious interior with dedicated compartments for your laptop, documents, and personal items. The hand-stitched details and solid brass hardware reflect our commitment to exceptional quality, while the adjustable shoulder strap offers versatile carrying options.",
    features: [
      "Premium full-grain leather",
      "Hand-stitched construction",
      "Solid brass hardware with lock",
      'Padded laptop compartment (fits up to 15")',
      "Multiple interior organizer pockets",
      "Detachable, adjustable shoulder strap",
    ],
    relatedIds,
  },
  {
    id: 7,
    slug: "italian-silk-tie",
    name: "Italian Silk Tie",
    category: "accessories",
    categoryLabel: "Accessories",
    price: 450,
    image: silkTie,
    imageAlt: "Italian Silk Tie",
    description:
      "Our Italian Silk Tie exemplifies refined elegance for the discerning gentleman. Handcrafted in Italy from the finest mulberry silk, this tie features our exclusive pattern created by our in-house designers. The meticulous seven-fold construction technique requires no lining, resulting in a tie with exceptional drape and a substantial feel. Each tie is finished with hand-rolled edges and our subtle signature emblem.",
    features: [
      "Pure mulberry silk from Como, Italy",
      "Traditional seven-fold construction",
      "Hand-rolled edges",
      "Exclusive pattern design",
      "Standard 8.5 cm width",
      "Presented in a signature gift box",
    ],
    relatedIds,
  },
  {
    id: 8,
    slug: "platinum-signet-ring",
    name: "Platinum Signet Ring",
    category: "jewelry",
    categoryLabel: "Jewelry",
    price: 5800,
    image: platinumRing,
    imageAlt: "Platinum Signet Ring",
    description:
      "The Platinum Signet Ring is a contemporary interpretation of a classic gentleman's accessory. Crafted from solid 950 platinum, this substantial ring features a flat oval face that can be personalized with an engraved monogram or family crest. The clean lines and substantial weight create a bold statement piece that balances tradition with modern sophistication, making it the perfect heirloom to pass down through generations.",
    features: [
      "Solid 950 platinum construction",
      "Hand-polished to a mirror finish",
      "Customizable engraving option",
      "Substantial weight and presence",
      "Available in sizes 7-13",
      "Includes luxury presentation case",
    ],
    relatedIds,
  },
  {
    id: 9,
    slug: "classic-tourbillon",
    name: "Classic Tourbillon",
    category: "watches",
    categoryLabel: "Watches",
    price: 32000,
    image: tourbillon,
    imageAlt: "Classic Tourbillon",
    description:
      "The Classic Tourbillon represents the pinnacle of horological achievement. This masterpiece features a visible tourbillon mechanism at 6 o'clock, showcasing the rotating balance wheel that counteracts the effects of gravity. Housed in a 41mm platinum case with a grand feu enamel dial, this timepiece combines traditional craftsmanship with technical innovation for the discerning collector.",
    features: [
      "41mm platinum case",
      "Grand feu enamel dial",
      "Visible tourbillon at 6 o'clock",
      "Manual-winding movement",
      "72-hour power reserve",
      "Black alligator leather strap with platinum folding clasp",
    ],
    relatedIds,
  },
  {
    id: 10,
    slug: "alligator-leather-belt",
    name: "Alligator Leather Belt",
    category: "accessories",
    categoryLabel: "Accessories",
    price: 1850,
    image: alligatorBelt,
    imageAlt: "Alligator Leather Belt",
    description:
      "Our Alligator Leather Belt exemplifies luxury in its most refined form. Meticulously crafted from genuine American alligator skin, each belt is hand-selected for its exceptional scale pattern and texture. The belt is finished with our signature 18K gold-plated buckle, which can be easily interchanged with other buckles from our collection. The interior is lined with supple calfskin for added comfort and durability.",
    features: [
      "Genuine American alligator leather",
      "18K gold-plated signature buckle",
      "Calfskin lining",
      "Hand-painted edges",
      "Interchangeable buckle system",
      "Available in black, brown, and cognac",
    ],
    relatedIds,
  },
  {
    id: 11,
    slug: "leather-handbag",
    name: "Leather Handbag",
    category: "leather",
    categoryLabel: "Leather Goods",
    price: 3750,
    image: leatherHandbag,
    imageAlt: "Leather Handbag",
    description:
      "The Leather Handbag is the epitome of sophisticated elegance. Handcrafted by our master artisans from the finest calfskin leather, this timeless accessory features a structured silhouette with our signature hardware accents. The spacious interior includes multiple compartments and a detachable pouch, while the adjustable strap offers versatile carrying options. Each bag undergoes extensive quality control to ensure exceptional craftsmanship and longevity.",
    features: [
      "Premium calfskin leather",
      "Signature gold-tone hardware",
      "Suede interior lining",
      "Multiple interior compartments",
      "Detachable leather pouch",
      "Adjustable and removable shoulder strap",
    ],
    relatedIds,
  },
  {
    id: 12,
    slug: "emerald-elegy",
    name: "Emerald Elegy",
    category: "jewelry",
    categoryLabel: "Jewelry",
    price: 10000,
    image: emeraldRing,
    imageAlt: "Emerald Ring",
    description:
      "The Emerald Elegy ring showcases a magnificent 2.5-carat Colombian emerald, celebrated for its exceptional clarity and vibrant green hue. The emerald is set in 18K white gold and surrounded by a halo of brilliant-cut diamonds that enhance its natural beauty. The band features additional diamonds in a pavé setting, creating a piece that captures light from every angle. This extraordinary ring represents the perfect balance of classic elegance and contemporary design.",
    features: [
      "2.5-carat Colombian emerald center stone",
      "18K white gold setting",
      "Diamond halo and pavé band (1.2 total carat weight)",
      "VS clarity diamonds",
      "Handcrafted by master jewelers",
      "Includes certificate of authenticity and appraisal",
    ],
    relatedIds,
  },
];

export const productById = new Map(
  products.map((product) => [product.id, product]),
);

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
