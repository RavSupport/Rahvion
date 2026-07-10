export async function startCheckout({ email } = {}) {
  const res = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });

  if (!res.ok) {
    throw new Error('checkout-unavailable');
  }

  const { url } = await res.json();
  if (!url) {
    throw new Error('checkout-unavailable');
  }
  return url;
}
