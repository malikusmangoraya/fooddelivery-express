# Webhook Integration Guide — Ecommerce

## Inbound Endpoints

| Endpoint                            | Source   | Description                  |
| ----------------------------------- | -------- | ---------------------------- |
| `POST /api/webhooks/stripe`         | Stripe   | Payment events               |
| `POST /api/webhooks/custom/:source` | Any      | Generic HMAC-signed webhooks |
| `POST /api/webhooks/emit`           | Internal | Programmatic event emission  |
| `GET /api/webhooks/logs`            | Internal | Delivery audit log           |

## Registered Events

| Event                    | Source   | Description               |
| ------------------------ | -------- | ------------------------- |
| `order.created`          | internal | New order placed          |
| `order.paid`             | stripe   | Stripe payment succeeded  |
| `order.shipped`          | internal | Order marked as shipped   |
| `order.delivered`        | internal | Order delivered           |
| `order.cancelled`        | internal | Order cancelled           |
| `order.refunded`         | stripe   | Stripe refund processed   |
| `payment.failed`         | stripe   | Stripe payment failed     |
| `subscription.created`   | stripe   | New subscription          |
| `subscription.cancelled` | stripe   | Subscription cancelled    |
| `inventory.low`          | internal | Stock below threshold     |
| `review.submitted`       | internal | Customer review submitted |
| `user.registered`        | internal | New user signup           |

## Environment Variables

```bash
STRIPE_WEBHOOK_SECRET=whsec_xxx  # From Stripe Dashboard
INTERNAL_WEBHOOK_SECRET=your_secret
WEBHOOK_ENDPOINTS='[{"url":"https://hooks.slack.com/xxx","events":["order.created"],"secret":"xxx"}]'
```

## Usage Example

```javascript
import { eventBus } from './utils/event-bus.js';

// Emit an event after order is created:
eventBus.emit('order.created', { orderId: order._id, total: order.total });

// Listen for an event:
eventBus.on('order.created', async (data) => {
  await sendOrderConfirmationEmail(data.orderId);
  await notifySlack(data);
});
```
