# The AI Side Hustle Blueprint — Sales Funnel

## Files

```
index.html       → the sales page
thank-you.html    → the post-payment confirmation + download page
style.css         → all styling (shared by both pages)
script.js         → CTA link wiring, sticky mobile CTA, scroll reveal
assets/           → empty, reserved if you add real images later
```

## What to replace before launch

Open **script.js** and edit the two constants at the top:

```js
const PAYMENT_CHECKOUT_URL = "YOUR_PAYMENT_CHECKOUT_URL";
const DOWNLOAD_URL = "YOUR_EBOOK_DOWNLOAD_URL";
```

- `PAYMENT_CHECKOUT_URL` — your payment gateway's checkout link (Stripe Payment Link, Gumroad, Lemon Squeezy, etc). Every "GET THIS EBOOK" button on the site pulls from this one value automatically.
- `DOWNLOAD_URL` — the direct link to your eBook PDF (or a gated download page). Powers the "DOWNLOAD YOUR EBOOK" button on `thank-you.html`.

Then in **index.html**, update:

- `[YOUR PRICE]` in the offer section — search for it and replace with your real price (e.g. `$19`).
- `support@YOURDOMAIN.com` in the footer — your real support email.

And in **thank-you.html**:

- `support@YOURDOMAIN.com` near the bottom of the page.

## Configuring your payment gateway redirect

Set your payment gateway's "after payment" or "success URL" redirect to point at your deployed `thank-you.html` (e.g. `https://yourdomain.com/thank-you.html` or `https://yourdomain.com/thank-you`).

## Protecting the PDF download

The download link on the thank-you page is a placeholder for now. A raw public link to a PDF can be shared or found by search engines. A few options if you want to reduce unauthorized sharing later:

- Use a paid-delivery tool built into your payment gateway (e.g. Gumroad, Lemon Squeezy, or Stripe + a delivery app) that generates a unique, expiring link per customer.
- Host the file behind a simple serverless function that checks a token/order ID before serving it.
- At minimum, avoid linking directly to a public, permanent, guessable file URL.

This page does not implement any of these — it's a placeholder link for you to wire up.

## Deployment

This is a static site (HTML/CSS/JS only, no build step). You can deploy it to any static host:

- **Netlify / Vercel**: drag-and-drop the folder, or connect a Git repo.
- **GitHub Pages**: push the folder to a repo and enable Pages.
- **Any traditional host**: upload the four files via FTP/SFTP to your web root.

Make sure `thank-you.html` is reachable at a clean URL your payment gateway can redirect to.

## Notes

- Google Fonts (Space Grotesk, Inter, IBM Plex Mono) are loaded via `<link>` tags in the `<head>` of both pages. If you need to work fully offline, self-host these fonts instead.
- The eBook cover and page previews are built as SVG/HTML mockups from the book's real content — not screenshots — so there's nothing to swap out unless you want to replace them with actual cover art or screenshots later.
- No fake scarcity, countdown timers, testimonials, or guarantees were added. The testimonial section is left as a clearly marked placeholder for you to fill in once you have real reviews.
