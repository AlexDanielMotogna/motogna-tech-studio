// Quote Builder Data Types and Configuration

export type PlatformType = 'web' | 'mobile' | 'both';
export type ProjectType = 'landing' | 'corporate' | 'ecommerce' | 'webapp' | 'blog';

export interface PlatformOption {
  id: PlatformType;
  nameKey: string;
  descriptionKey: string;
  multiplier: number;
  icon: string;
}

export interface ProjectTypeOption {
  id: ProjectType;
  nameKey: string;
  descriptionKey: string;
  basePrice: number;
  icon: string;
}

export interface PageOption {
  id: string;
  nameKey: string;
  included: boolean; // Some pages are included by default
}

export interface FeatureOption {
  id: string;
  nameKey: string;
  descriptionKey: string;
  price: number;
  icon: string;
}

export interface DesignOption {
  id: 'custom' | 'template' | 'provided';
  nameKey: string;
  descriptionKey: string;
  price: number;
}

// Platform Options with multipliers
export const platformOptions: PlatformOption[] = [
  {
    id: 'web',
    nameKey: 'quote.platform.web',
    descriptionKey: 'quote.platform.webDesc',
    multiplier: 1.0,
    icon: 'monitor',
  },
  {
    id: 'mobile',
    nameKey: 'quote.platform.mobile',
    descriptionKey: 'quote.platform.mobileDesc',
    multiplier: 1.4,
    icon: 'smartphone',
  },
  {
    id: 'both',
    nameKey: 'quote.platform.both',
    descriptionKey: 'quote.platform.bothDesc',
    multiplier: 1.9,
    icon: 'devices',
  },
];

// Project Types with base prices
export const projectTypes: ProjectTypeOption[] = [
  {
    id: 'landing',
    nameKey: 'quote.projectTypes.landing',
    descriptionKey: 'quote.projectTypes.landingDesc',
    basePrice: 800,
    icon: 'rocket',
  },
  {
    id: 'corporate',
    nameKey: 'quote.projectTypes.corporate',
    descriptionKey: 'quote.projectTypes.corporateDesc',
    basePrice: 1500,
    icon: 'building',
  },
  {
    id: 'blog',
    nameKey: 'quote.projectTypes.blog',
    descriptionKey: 'quote.projectTypes.blogDesc',
    basePrice: 1200,
    icon: 'pencil',
  },
  {
    id: 'ecommerce',
    nameKey: 'quote.projectTypes.ecommerce',
    descriptionKey: 'quote.projectTypes.ecommerceDesc',
    basePrice: 2500,
    icon: 'cart',
  },
  {
    id: 'webapp',
    nameKey: 'quote.projectTypes.webapp',
    descriptionKey: 'quote.projectTypes.webappDesc',
    basePrice: 3000,
    icon: 'code',
  },
];

// Available Pages
export const pageOptions: PageOption[] = [
  { id: 'home', nameKey: 'quote.pages.home', included: true },
  { id: 'about', nameKey: 'quote.pages.about', included: false },
  { id: 'services', nameKey: 'quote.pages.services', included: false },
  { id: 'contact', nameKey: 'quote.pages.contact', included: false },
  { id: 'blog', nameKey: 'quote.pages.blog', included: false },
  { id: 'portfolio', nameKey: 'quote.pages.portfolio', included: false },
  { id: 'faq', nameKey: 'quote.pages.faq', included: false },
  { id: 'pricing', nameKey: 'quote.pages.pricing', included: false },
  { id: 'team', nameKey: 'quote.pages.team', included: false },
  { id: 'testimonials', nameKey: 'quote.pages.testimonials', included: false },
];

// Features with prices
export const featureOptions: FeatureOption[] = [
  {
    id: 'login',
    nameKey: 'quote.features.login',
    descriptionKey: 'quote.features.loginDesc',
    price: 300,
    icon: 'user',
  },
  {
    id: 'admin',
    nameKey: 'quote.features.admin',
    descriptionKey: 'quote.features.adminDesc',
    price: 500,
    icon: 'settings',
  },
  {
    id: 'cart',
    nameKey: 'quote.features.cart',
    descriptionKey: 'quote.features.cartDesc',
    price: 600,
    icon: 'cart',
  },
  {
    id: 'booking',
    nameKey: 'quote.features.booking',
    descriptionKey: 'quote.features.bookingDesc',
    price: 400,
    icon: 'calendar',
  },
  {
    id: 'contactForm',
    nameKey: 'quote.features.contactForm',
    descriptionKey: 'quote.features.contactFormDesc',
    price: 100,
    icon: 'mail',
  },
  {
    id: 'newsletter',
    nameKey: 'quote.features.newsletter',
    descriptionKey: 'quote.features.newsletterDesc',
    price: 150,
    icon: 'mail',
  },
  {
    id: 'multilang',
    nameKey: 'quote.features.multilang',
    descriptionKey: 'quote.features.multilangDesc',
    price: 250,
    icon: 'globe',
  },
  {
    id: 'cms',
    nameKey: 'quote.features.cms',
    descriptionKey: 'quote.features.cmsDesc',
    price: 350,
    icon: 'edit',
  },
  {
    id: 'chat',
    nameKey: 'quote.features.chat',
    descriptionKey: 'quote.features.chatDesc',
    price: 200,
    icon: 'message',
  },
  {
    id: 'payments',
    nameKey: 'quote.features.payments',
    descriptionKey: 'quote.features.paymentsDesc',
    price: 400,
    icon: 'credit-card',
  },
  {
    id: 'seo',
    nameKey: 'quote.features.seo',
    descriptionKey: 'quote.features.seoDesc',
    price: 200,
    icon: 'search',
  },
  {
    id: 'analytics',
    nameKey: 'quote.features.analytics',
    descriptionKey: 'quote.features.analyticsDesc',
    price: 100,
    icon: 'chart',
  },
];

// Design Options
export const designOptions: DesignOption[] = [
  {
    id: 'custom',
    nameKey: 'quote.design.custom',
    descriptionKey: 'quote.design.customDesc',
    price: 800,
  },
  {
    id: 'template',
    nameKey: 'quote.design.template',
    descriptionKey: 'quote.design.templateDesc',
    price: 300,
  },
  {
    id: 'provided',
    nameKey: 'quote.design.provided',
    descriptionKey: 'quote.design.providedDesc',
    price: 0,
  },
];

// Quote State Interface
export interface QuoteState {
  platform: PlatformType | null;
  projectType: ProjectType | null;
  selectedPages: string[];
  selectedFeatures: string[];
  designOption: 'custom' | 'template' | 'provided' | null;
}

// Calculate total price
export function calculatePrice(state: QuoteState): { min: number; max: number; base: number } {
  let base = 0;

  // Project type base price
  if (state.projectType) {
    const project = projectTypes.find(p => p.id === state.projectType);
    if (project) base += project.basePrice;
  }

  // Features prices
  state.selectedFeatures.forEach(featureId => {
    const feature = featureOptions.find(f => f.id === featureId);
    if (feature) base += feature.price;
  });

  // Design price
  if (state.designOption) {
    const design = designOptions.find(d => d.id === state.designOption);
    if (design) base += design.price;
  }

  // Additional pages beyond 3 add ~100€ each
  const extraPages = Math.max(0, state.selectedPages.length - 3);
  base += extraPages * 100;

  // Apply platform multiplier
  let platformMultiplier = 1.0;
  if (state.platform) {
    const platform = platformOptions.find(p => p.id === state.platform);
    if (platform) platformMultiplier = platform.multiplier;
  }
  base = Math.round(base * platformMultiplier);

  return {
    base,
    min: Math.round(base * 0.9),
    max: Math.round(base * 1.3),
  };
}

// Format price for display
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
