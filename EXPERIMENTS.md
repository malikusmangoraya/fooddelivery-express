# A/B Testing & Feature Flags — Ecommerce Website

## Experiments

| ID                    | Name                  | Priority | Min Sample | Expected Lift |
| --------------------- | --------------------- | -------- | ---------- | ------------- |
| `hero_cta_text`       | Hero CTA Button Text  | high     | 1000       | 12-18%        |
| `product_card_layout` | Product Card Layout   | high     | 2000       | 10-25%        |
| `checkout_steps`      | Checkout Flow Steps   | critical | 500        | 20-35%        |
| `trust_badges`        | Trust Badge Placement | medium   | 800        | 5-12%         |

### Experiment Details

#### Hero CTA Button Text (`hero_cta_text`)

**Hypothesis:** Changing CTA from 'Shop Now' to 'Explore Collection' increases CTR by 15%
**Success Metric:** `cta_click_rate`
**Variants:**

- `control`: Shop Now (50% traffic)
- `variant_a`: Explore Collection (50% traffic)

#### Product Card Layout (`product_card_layout`)

**Hypothesis:** Grid view vs list view — grid increases add-to-cart by 22%
**Success Metric:** `add_to_cart_rate`
**Variants:**

- `control`: Grid 4-col (50% traffic)
- `variant_a`: Grid 3-col (25% traffic)
- `variant_b`: List view (25% traffic)

#### Checkout Flow Steps (`checkout_steps`)

**Hypothesis:** Single-page checkout reduces abandonment by 30% vs multi-step
**Success Metric:** `checkout_completion_rate`
**Variants:**

- `control`: Multi-step (3 pages) (50% traffic)
- `variant_a`: Single page (50% traffic)

#### Trust Badge Placement (`trust_badges`)

**Hypothesis:** Moving trust badges near checkout button increases conversions
**Success Metric:** `purchase_rate`
**Variants:**

- `control`: Footer only (50% traffic)
- `variant_a`: Near add-to-cart btn (50% traffic)

## Feature Flags

| Key                          | Description                            | Default | Rollout % |
| ---------------------------- | -------------------------------------- | ------- | --------- |
| `show_ai_recommendations`    | AI product recommendations widget      | False   | 20%       |
| `one_click_checkout`         | One-click checkout for returning users | False   | 10%       |
| `live_inventory_counter`     | Show live stock countdown              | True    | 100%      |
| `social_proof_notifications` | Live purchase notifications popup      | False   | 50%       |

## Implementation Guide

1. Install PostHog: `npm install posthog-js`
2. Add `VITE_POSTHOG_KEY=phc_xxx` to `.env`
3. Call `initPostHog()` in `main.jsx`
4. Use `useExperiment('hero_cta_text', variants)` hook in components
5. Monitor results in PostHog Experiments dashboard

> Run each experiment for minimum 2 weeks for statistical significance.
