export const candleTheme = {
  name: 'HulaLoop',
  description: 'Handmade candles that bring warmth and calm to your space.',
  logo: {
    main: '/Logos/logo.png',
    icon: '/Logos/color_icon.png',
  },
  colors: {
    primary: {
      50: '#fdf8f6',
      100: '#f2e8e5',
      200: '#eaddd7',
      300: '#e0cec7',
      400: '#d2bab0',
      500: '#a77f71',
      600: '#8a5a4d',
      700: '#73463c',
      800: '#5e3830',
      900: '#452823',
    },
    accent: {
      50: '#f4f7f5',
      100: '#e3ebe6',
      200: '#c7dcd3',
      300: '#a4c6b8',
      400: '#83ad9e',
      500: '#649485',
      600: '#4d7a6c',
      700: '#3e6156',
      800: '#334e46',
      900: '#2a3d38',
    },
  },
  hero: {
    backgroundImage:
      'https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&w=2000&q=80',
    alt: 'Cozy candle atmosphere',
    tagline: 'Hand-poured in India',
    title: 'Illuminate Your Sanctuary',
    subtitle:
      'Crafted with sustainable soy wax and essential oils to turn everyday moments into cherished rituals.',
    primaryCta: { label: 'Shop Collection', href: '/products' },
    secondaryCta: { label: 'Our Story', href: '/about' },
  },
  collections: {
    label: 'Curated Scents',
    heading: 'Explore Our Collections',
    items: [
      {
        title: 'Floral Notes',
        subtitle: 'Gardenia, Rose, & Jasmine',
        image:
          'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80',
        href: '/products?category=Floral',
      },
      {
        title: 'Earthy & Woody',
        subtitle: 'Sandalwood, Pine, & Amber',
        image:
          'https://images.unsplash.com/photo-1577025728734-7ec67bdb97d0?auto=format&fit=crop&w=1000&q=80',
        href: '/products?category=Woody',
      },
      {
        title: 'Fresh & Clean',
        subtitle: 'Linen, Sea Salt, & Citrus',
        image:
          'https://images.unsplash.com/photo-1612293905607-b003de9e54fb?auto=format&fit=crop&w=1000&q=80',
        href: '/products?category=Fresh',
      },
    ],
  },
  values: [
    {
      title: 'Sustainably Sourced',
      description:
        'Made with 100% natural soy wax and lead-free cotton wicks for a clean, eco-friendly burn.',
    },
    {
      title: 'Hand-Poured with Love',
      description:
        'Each candle is crafted in small batches in our studio to ensure the highest quality and care.',
    },
    {
      title: 'Premium Fragrances',
      description:
        'We use only phthalate-free, premium fragrance oils infused with essential oils.',
    },
  ],
  testimonials: [
    {
      name: 'Ananya S.',
      location: 'Mumbai',
      quote:
        'Smells heavenly and fills the room in minutes. The burn is clean and the quality is top-notch.',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Rohan M.',
      location: 'Bengaluru',
      quote:
        'Amazing throw and a clean, even burn. I picked up two more as gifts and everyone loved them.',
      image:
        'https://images.unsplash.com/photo-1672843192615-5913ef88bf17?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Priya K.',
      location: 'New Delhi',
      quote:
        'Subtle, elegant fragrances that never feel overwhelming. The jars are beautiful and reusable.',
      image:
        'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=80',
    },
  ],
  about: {
    hero: {
      backgroundImage:
        'https://images.unsplash.com/photo-1546551812-9a44595c5fea?auto=format&fit=crop&w=2000&q=80',
      alt: 'Candle making studio',
      tagline: 'Our Essence',
      title: 'Crafting Light, Creating Atmosphere',
    },
    story: {
      heading: 'The HulaLoop Story',
      paragraphs: [
        'HulaLoop began with a simple yet profound realization: the right scent has the power to transform a house into a home.',
        'We believe in the beauty of slow living. In a world that often moves too fast, lighting a candle is a ritual—a moment to pause, breathe, and reconnect with yourself and your surroundings.',
      ],
    },
    commitments: {
      heading: 'Our Commitments',
      subtitle:
        'We hold ourselves to the highest standards, ensuring every product is as kind to the planet as it is delightful to your senses.',
      items: [
        {
          title: 'Clean Burning',
          description: '100% natural soy wax and lead-free cotton wicks for a soot-free experience.',
        },
        {
          title: 'Sustainable Sourcing',
          description: 'Ethically sourced ingredients and recyclable packaging materials.',
        },
        {
          title: 'Artisan Crafted',
          description: 'Hand-poured in small batches to ensure superior quality and consistency.',
        },
      ],
    },
    quote: {
      text: '“From a small studio and big hopes—every flame carries our promise to bring warmth, calm, and a little wonder to your day.”',
      author: '— The HulaLoop Team',
    },
    gallery: {
      images: [
        'https://github.com/rk2400/assets/blob/main/G1.png?raw=true',
        'https://images.unsplash.com/photo-1514436598301-27a65f40469f?auto=format&fit=crop&w=1000&q=80',
        'https://github.com/rk2400/assets/blob/main/G2.jpeg?raw=true',
      ],
    },
  },
  productPage: {
    heading: 'Curated Scents',
    subtitle:
      'Explore our hand-poured candles, each designed to evoke a specific memory or feeling.',
    categories: ['All Scents', 'Floral', 'Woody', 'Fresh', 'Seasonal', 'Signature Series', 'Gift Sets'],
  },
  cart: {
    emptyTitle: 'Your bag is empty',
    emptySubtitle: 'Looks like you haven\'t added any candles to your collection yet.',
    emptyCta: 'Start Shopping',
  },
  contact: {
    email: 'HulaLoop.official@gmail.com',
    phone: '+91 9876543210',
    studio: 'Delhi, India',
  },
  sustainability: {
    hero: {
      title: 'Sustainability',
      subtitle: 'How we craft in a responsible and mindful way.',
      backgroundImage:
        'https://images.unsplash.com/photo-1513521777634-9efa3f6022ac?auto=format&fit=crop&w=1600&q=80',
      alt: 'Sustainable materials',
    },
    initiatives: [
      {
        title: 'Wax & Wicks',
        description:
          'We use 100% natural soy wax and lead-free cotton wicks for a clean burn with low soot and minimal indoor emissions.',
      },
      {
        title: 'Fragrances',
        description:
          'Our scents are phthalate-free and infused with essential oils. We source from suppliers who follow IFRA safety standards.',
      },
      {
        title: 'Packaging',
        description:
          'Reusable glass jars and recyclable cartons. We avoid plastic where possible and choose paper from responsibly managed forests.',
      },
    ],
    careTips: [
      'Trim wicks to 5–7mm before lighting for optimal burn.',
      'Allow full melt pool to avoid tunneling and extend candle life.',
      'Clean and repurpose jars for storage, planters, or decor.',
    ],
    community: {
      title: 'Community & Transparency',
      description:
        'We share sourcing details whenever possible and welcome feedback. If you have ideas to help us improve, reach us via the contact page—your input shapes our journey.',
    },
  },
};

export type Theme = typeof candleTheme;
