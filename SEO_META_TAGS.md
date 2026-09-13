# SEO Meta Tags Reference — food-restaurant-001

## Essential Meta Tags (add to index.html <head>)

```html
<!-- Primary Meta Tags -->
<title>Food Restaurant 001 - Where Every Plate Tells A Story</title>
<meta name="title" content="Food Restaurant 001 - Where Every Plate Tells A Story" />
<meta
  name="description"
  content="Reserve your table today and taste the difference: locally sourced ingredients, chef-crafted recipes, and service that turns first-timers into regulars."
/>
<meta
  name="keywords"
  content="restaurant booking, best restaurant, reservations, chef specials, local dining"
/>
<meta name="robots" content="index, follow" />
<meta name="language" content="English" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="canonical" href="https://www.food-restaurant-001.com" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.food-restaurant-001.com" />
<meta property="og:title" content="Food Restaurant 001 - Where Every Plate Tells A Story" />
<meta
  property="og:description"
  content="Brand-new menu, warm ambience, and tables that fill fast. Reserve now."
/>
<meta property="og:image" content="https://www.food-restaurant-001.com/og-image.jpg" />

<!-- Twitter Card -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://www.food-restaurant-001.com" />
<meta property="twitter:title" content="Food Restaurant 001 - Where Every Plate Tells A Story" />
<meta
  property="twitter:description"
  content="Brand-new menu, warm ambience, and tables that fill fast. Reserve now."
/>
<meta property="twitter:image" content="https://www.food-restaurant-001.com/twitter-image.jpg" />

<!-- JSON-LD Structured Data -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Food Restaurant 001",
    "url": "https://www.food-restaurant-001.com",
    "description": "Brand-new menu, warm ambience, and tables that fill fast. Reserve now.",
    "foundingDate": "2026",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Urdu"]
    },
    "sameAs": [
      "https://www.facebook.com/food-restaurant-001",
      "https://www.instagram.com/food-restaurant-001",
      "https://twitter.com/food-restaurant-001"
    ]
  }
</script>
```

## Multilingual (hreflang) — Add if i18n enabled

```html
<link rel="alternate" hreflang="en" href="https://www.food-restaurant-001.com/" />
<link rel="alternate" hreflang="ur" href="https://www.food-restaurant-001.com/ur/" />
<link rel="alternate" hreflang="ar" href="https://www.food-restaurant-001.com/ar/" />
<link rel="alternate" hreflang="x-default" href="https://www.food-restaurant-001.com/" />
```

## PWA Meta Tags — Add if PWA enabled

```html
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#0d9488" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="apple-mobile-web-app-title" content="Food Restaurant 001" />
```
