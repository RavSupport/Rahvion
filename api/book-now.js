export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, phone, email, service, preferredTime, message } = req.body || {};

  if (!fullName || !phone || !email) {
    return res.status(400).json({ error: 'fullName, phone, and email are required' });
  }

  const notifyEmail = process.env.BOOKING_NOTIFY_EMAIL || 'helpdesk@rahvion.com';
  const fromEmail = process.env.BOOKING_FROM_EMAIL || 'bookings@rahvion.com';
  const resendApiKey = process.env.RESEND_API_KEY;

  const summary = [
    `Name: ${fullName}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service: ${service || 'N/A'}`,
    `Preferred Time: ${preferredTime || 'N/A'}`,
    `Message: ${message || 'N/A'}`
  ].join('\n');

  try {
    if (resendApiKey) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          from: fromEmail,
          to: notifyEmail,
          reply_to: email,
          subject: `New Booking Request: ${service || 'General Inquiry'}`,
          text: summary
        })
      });

      if (!response.ok) {
        throw new Error(`Email provider responded with ${response.status}`);
      }
    } else {
      // Scaffold: no email provider configured yet. Log so requests aren't silently
      // dropped until RESEND_API_KEY (or an equivalent provider) is set.
      console.log('Booking request received (no RESEND_API_KEY configured):\n', summary);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Booking handler error:', err);
    return res.status(502).json({ error: 'Failed to deliver booking request' });
  }
}
