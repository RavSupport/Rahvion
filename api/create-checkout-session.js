import Stripe from 'stripe';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID_CORE;

  if (!secretKey || !priceId) {
    return res.status(501).json({
      error: 'Stripe is not configured yet. Set STRIPE_SECRET_KEY and STRIPE_PRICE_ID_CORE.'
    });
  }

  const stripe = new Stripe(secretKey, { apiVersion: '2024-06-20' });
  const origin = req.headers.origin || `https://${req.headers.host}`;
  const { email } = req.body || {};

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: email || undefined,
      success_url: `${origin}/success`,
      cancel_url: `${origin}/pricing`,
      allow_promotion_codes: true
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout session error:', err);
    return res.status(502).json({ error: 'Failed to create checkout session' });
  }
}
