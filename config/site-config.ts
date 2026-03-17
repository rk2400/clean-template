/**
 * Site-wide configuration for the template.
 *
 * This file is intended to be the first place developers update their branding
 * and SEO defaults when reusing the template for a new project.
 */

export const siteConfig = {
  name: 'LittleFlame',
  shortName: 'LittleFlame',
  description: 'Beautiful handcrafted candles for your home',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',

  // Paths to logo assets (should exist in /public)
  logo: {
    main: '/Logos/logo.png',
    icon: '/Logos/color_icon.png',
  },

  // Theme colors are used by tailwind config and can be referenced in components.
  theme: {
    primary: '#f97316',
    accent: '#2563eb',
  },

  // Contact info used across the site and in email templates.
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@littleflame.com',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1 (555) 123-4567',
    address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || '123 Main St, Anytown, USA',
  },

  // Social links (optional)
  social: {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || '',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || '',
  },
} as const;

export type SiteConfig = typeof siteConfig;
