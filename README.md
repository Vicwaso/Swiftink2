# SwiftInk Website

This is a simple static website for SwiftInk. It does not require React, npm, Vite, or a database. You can upload the folder contents directly to most hosting platforms.

## Files

- `index.html` - the website structure
- `assets/css/styles.css` - all styling, including dark mode and mobile layout
- `assets/js/app.js` - navigation, service pages, product-specific order forms, live chat, WhatsApp handoff, and portfolio filters

## How to use

1. Unzip the folder.
2. Open `index.html` in your browser to preview it.
3. Upload the full folder to your hosting provider.

## Important details to edit

Open `assets/js/app.js` and update:

```js
const WHATSAPP_NUMBER = "254700000000";
const EMAIL = "hello@swiftink.co.ke";
```

Open `index.html` and replace these placeholders:

- `+254 700 000 000`
- `254700000000`
- `hello@swiftink.co.ke`
- Instagram link
- Google Map placeholder, if you want to embed a real map

## Current pricing/order details included

- Eulogies: minimum 100 copies, KSh 82 per copy, total starts at KSh 8,200
- Eulogy design: KSh 800
- Poster design: KSh 600
- Banner design: KSh 1,000
- Business card design: KSh 500 one-sided / KSh 800 double-sided
- Work begins after a 40% upfront payment

## Notes

The live chat widget is a front-end demo with WhatsApp handoff. For a real staffed chat system, connect a service like Tawk.to, Crisp, Intercom, WhatsApp Business API, or another live-chat provider.

Replace placeholder portfolio/sample images with real photos of SwiftInk printed work before launch.
