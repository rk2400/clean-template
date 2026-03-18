import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getProductsFromDb } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { siteConfig } from '@/config/site-config';
import { theme } from '@/config/theme';

export const metadata: Metadata = {
  title: `${siteConfig.name} · Home`,
  description: siteConfig.description,
};

async function getProducts() {
  const products = await getProductsFromDb({ status: 'active', limit: 3 });
  return products || [];
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="bg-stone-50">
      {/* Hero Banner */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={theme.hero.backgroundImage}
            alt={theme.hero.alt}
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className="max-w-2xl animate-slide-up">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 text-primary-200 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-primary-500/30">
              {theme.hero.tagline}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight tracking-tight text-white">
              {theme.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-stone-200 font-light leading-relaxed max-w-lg">
              {theme.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={theme.hero.primaryCta.href}
                className="btn btn-primary bg-white text-stone-900 hover:bg-stone-100 border-none px-8 py-4 text-lg"
              >
                {theme.hero.primaryCta.label}
              </Link>
              <Link
                href={theme.hero.secondaryCta.href}
                className="btn btn-secondary bg-transparent border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                {theme.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection / Collections Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-2 block">
            {theme.collections.label}
          </span>
          <h2 className="text-4xl font-serif font-medium text-stone-900">{theme.collections.heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {theme.collections.items.map((collection) => (
            <Link
              key={collection.title}
              href={collection.href}
              className="group relative h-96 overflow-hidden rounded-xl cursor-pointer"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl text-white/80 font-serif mb-2">{collection.title}</h3>
                <p className="text-white/80 text-sm mb-4">{collection.subtitle}</p>
                <span className="inline-block border-b border-white pb-1 text-sm font-medium">
                  Shop {collection.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Values / Why Choose Us */}
      <section className="bg-white py-24 border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {theme.values.map((value) => (
              <div key={value.title} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">{value.title}</h3>
                <p className="text-stone-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-2 block">Best Sellers</span>
            <h2 className="text-4xl font-serif font-medium text-stone-900">Trending Now</h2>
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 text-stone-600 font-medium hover:text-primary-600 transition-colors"
          >
            View All{' '}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product: any) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/products" className="btn btn-secondary inline-flex w-full justify-center">
            View All Products
          </Link>
        </div>
      </section>

      <section className="bg-white py-24 border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-2 block">Testimonials</span>
            <h2 className="text-4xl font-serif font-medium text-stone-900">Loved By Our Customers</h2>
            <p className="max-w-2xl mx-auto text-stone-600 mt-4">Real experiences from customers who brought HulaLoop into their homes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {theme.testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-stone-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-yellow-500 mb-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg key={idx} className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-700 leading-relaxed">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={theme.about.hero.backgroundImage}
            alt={theme.about.hero.alt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-bold tracking-widest uppercase mb-8">
            {theme.about.hero.tagline}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8 leading-tight text-white/80">
            {theme.about.hero.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-stone-300 mb-10 leading-relaxed">
            {theme.about.story.paragraphs.join(' ')}
          </p>
          <Link href="/about" className="btn btn-primary bg-white text-stone-900 hover:bg-stone-100 border-none inline-flex">
            Read Our Full Story
          </Link>
        </div>
      </section>
    </div>
  );
}
