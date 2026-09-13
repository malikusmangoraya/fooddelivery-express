# Performance Budget — Ecommerce Website

## Core Web Vitals Targets

| Metric                          | Target   | Google 'Good' Threshold |
| ------------------------------- | -------- | ----------------------- |
| LCP (Largest Contentful Paint)  | < 2000ms | < 2500ms                |
| CLS (Cumulative Layout Shift)   | < 0.05   | < 0.10                  |
| INP (Interaction to Next Paint) | < 150ms  | < 200ms                 |
| TTFB (Time to First Byte)       | < 600ms  | < 800ms                 |
| FCP (First Contentful Paint)    | < 1200ms | < 1800ms                |
| TBT (Total Blocking Time)       | < 200ms  | < 300ms                 |

## Lighthouse Score Targets

- Performance: ≥ 92
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 92

## Bundle Size Budgets

- JavaScript: < 250 KB (gzipped)
- CSS: < 60 KB (gzipped)
- Total page: < 400 KB (gzipped)

## Critical Resource Preconnects

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
```

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
```

```html
<link rel="preconnect" href="https://www.googletagmanager.com" />
```

## Optimization Checklist

- [ ] Convert all images to WebP/AVIF format
- [ ] Enable Brotli compression on server
- [ ] Set long cache headers for hashed assets (1 year)
- [ ] Defer non-critical JavaScript
- [ ] Use font-display: swap for web fonts
- [ ] Add width/height to all `<img>` elements
- [ ] Eliminate render-blocking resources
- [ ] Preload LCP image with `<link rel=preload>`
- [ ] Run Lighthouse CI on every PR

> Note: E-commerce: every 100ms delay = ~1% conversion loss
