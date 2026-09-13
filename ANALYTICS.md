# Analytics Setup Guide — Ecommerce

## Recommended Provider Stack

- **Primary:** ga4 (region-optimised for MENA)
- **Secondary:** PostHog (session recording + feature flags)

## Environment Variables

```bash
VITE_GA4_ID=G-XXXXXXXXXX
VITE_POSTHOG_KEY=phc_xxxxx
VITE_POSTHOG_HOST=https://app.posthog.com
VITE_PLAUSIBLE_DOMAIN=yourdomain.com
VITE_MIXPANEL_TOKEN=xxxxxxxxx
VITE_FATHOM_SITE_ID=XXXXXXX
```

## Conversion Goals

The following events are tracked as conversions:

- `purchase`
- `add_to_cart`
- `begin_checkout`
- `sign_up`

## Event Taxonomy

| Event              | Trigger                  | Key Parameters                             |
| ------------------ | ------------------------ | ------------------------------------------ |
| `view_item_list`   | Products page load       | item_list_id, item_list_name, items        |
| `view_item`        | Product detail page load | currency, value, items                     |
| `add_to_cart`      | Add to cart button click | currency, value, items                     |
| `remove_from_cart` | Remove from cart         | currency, value, items                     |
| `view_cart`        | Cart page view           | currency, value, items                     |
| `begin_checkout`   | Checkout step 1          | currency, value, coupon...                 |
| `add_payment_info` | Payment info entered     | currency, value, payment_type...           |
| `purchase`         | Order confirmed          | transaction_id, affiliation, revenue...    |
| `refund`           | Refund processed         | transaction_id, value, items               |
| `add_to_wishlist`  | Wishlist button click    | currency, value, items                     |
| `search`           | Search submitted         | search_term                                |
| `select_promotion` | Banner/promo click       | creative_name, creative_slot, promotion_id |
| `sign_up`          | Account created          | method                                     |
| `login`            | User logged in           | method                                     |

## Quick Start

```jsx
import useAnalytics from '@/hooks/useAnalytics';

function CheckoutButton({ item }) {
  const { trackEvent } = useAnalytics();
  return (
    <button
      onClick={() =>
        trackEvent('add_to_cart', {
          currency: 'USD',
          value: item.price,
          items: [item],
        })
      }
    >
      Add to Cart
    </button>
  );
}
```
