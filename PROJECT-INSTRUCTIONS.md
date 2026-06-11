# WinCo Run, project instructions

## What this is
A single-page web app David uses on his iPhone while grocery shopping at WinCo. He taps items into the cart, types the shelf price, and watches a running total climb. Bulk-bin and by-weight items use a price-per-pound field times a weight field. It's built as a small PWA so it can be added to the iPhone home screen and works offline in the store.

## Who it's for
David, a dad shopping cheap for himself and three teens. The list is the dinner plan for one week. He reshops roughly weekly, so the item list will change. Keeping the list easy to edit is the point.

## Files in this project
- `index.html` , the whole app (HTML, CSS, JS inline, no external dependencies)
- `manifest.json` , PWA manifest for the home-screen icon and standalone mode
- `sw.js` , service worker for offline use
- `icon-512.png`, `icon-192.png`, `apple-touch-icon-180.png` , app icons
- `shopping-data.md` , the source-of-truth menu and shopping list for this week
- `README-DEPLOY.md` , how to push and turn on GitHub Pages

## What already works (don't rebuild)
- Tap-to-check rows with strikethrough, plus an "in cart" counter
- Flat price entry per item
- Per-pound mode (price/lb times weight) with a live line total
- A "by lb" toggle on every row so any item can switch modes
- Live running total pinned to the bottom in a receipt-style bar
- Optional budget field with a remaining/over readout
- Prices, checks, and budget saved to the phone with localStorage, so a reload doesn't wipe progress
- Offline support through the service worker
- iPhone-friendly: big tap targets, decimal keypad on number fields, safe-area padding

## How to update the weekly list
The item list lives in the `DATA` array near the top of the script in `index.html`. Each item is:
```
{ id:"unique-id", name:"Display name", note:"qty and why", bulk:true/false, weighed:true/false }
```
- `bulk:true` shows the amber BULK tag.
- `weighed:true` starts that row in per-pound mode (used for bulk-bin items).
- Keep `id` values unique and stable. If you rename an id, saved prices for that row reset.
When the menu changes, edit `shopping-data.md` first so it stays the real record, then mirror it into the `DATA` array.

## Open refinements to discuss with David (his call, not assumptions)
1. Should the running total count every entered price, or only items checked into the cart? It currently counts every entered price.
2. Tax: WinCo grocery food is mostly untaxed in Nevada, so there's no tax line right now. Add an optional estimate toggle if he wants one.
3. Add and remove items on the fly at the store, not yet built.
4. A "hide checked" or "move checked to bottom" view for long lists.
5. Quantity multiplier on flat items (for example 2 boxes at one unit price), currently he just enters the line price.
6. Per-section subtotals.

## David's writing style (apply to any copy in the app or docs)
No em dashes. No negative parallelism. No forced three-item lists. Use contractions. Short paragraphs. Plain, direct language. No AI writing tells.

## Deploy target
GitHub Pages, served from the repo root. GitHub is already connected to Cowork on David's Windows desktop. He uses the finished URL on his iPhone and adds it to the home screen. See `README-DEPLOY.md`.
