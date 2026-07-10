import { track } from '@vercel/analytics';

export const trackEvent = (name, props = {}) => {
  try {
    track(name, props);
  } catch (err) {
    if (import.meta.env.DEV) {
      console.warn('[analytics] failed to track event', name, err);
    }
  }
};
