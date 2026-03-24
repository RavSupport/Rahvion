
# Vercel Pre-Deployment Verification Checklist

## 1. Pre-rendering Verification
- [ ] Run `npm run build` locally.
- [ ] Confirm the `build/` directory is created.
- [ ] Check inside `build/` to verify physical files like `raas.html`, `personal-it-toolkit.html`, and `index.html` exist.
- [ ] Open `build/index.html` in a raw text editor to ensure React components rendered as HTML, not just `<div id="root"></div>`.

## 2. Content Verification
- [ ] Run `npx serve -s build` locally to preview the final production output.
- [ ] Navigate to `/raas` and `/personal-it-toolkit` to verify content displays correctly.
- [ ] Test the navigation, footer links, and pricing sections for accurate visual presentation.

## 3. AdSense Removal Verification
- [ ] Perform a global search in your IDE for "adsbygoogle", "AdSense", and "Advertisement". 
- [ ] Confirm 0 results found in all output HTML/JS files.
- [ ] Inspect the network tab in browser DevTools to ensure no Google Ad services are being loaded.

## 4. SEO Verification
- [ ] Verify standard meta tags (`robots`, `description`, `viewport`) are present in `index.html`.
- [ ] View Page Source in browser to verify OpenGraph (`og:title`, `og:description`) and JSON-LD structured data exist.
- [ ] Confirm each page only possesses one `<h1>` tag with appropriate hierarchical `<h2>` and `<h3>` tags below.

## 5. Googlebot Simulation
- [ ] Start your local build server (`npx serve -s build`).
- [ ] Run the following curl command in your terminal:
  