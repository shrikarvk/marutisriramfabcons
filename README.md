# Shriram Fabrications & Constructions

Live site: https://shrikarvk.github.io/marutisriramfabcons/

One-page static website for Shriram Fabrications & Constructions (Hubballi, Dharwad and Hangal), run by Maruti Doddamani and Ram Doddamani. There is no build step. GitHub Pages serves the files on `main` as they are.

## Files

- `index.html`: all page content
- `style.css`: styles. Colours are at the top: graphite is construction, red oxide is fabrication.
- `script.js`: mobile menu, WhatsApp chooser and the enquiry form that opens WhatsApp
- `assets/img/`: the on-site photo (`onsite-480` and `onsite-800`, in `.jpg` and `.webp`) and `share.jpg`, the preview image shown when the link is shared on WhatsApp or Facebook
- `assets/fonts/`: Anek by Ek Type (SIL Open Font License, see `OFL.txt`), cut down to the characters this site uses

## Common edits

- **Phone numbers:** search `index.html` for `8217039257` (Maruti) and `6362172966` (Ram). Update the `tel:` links, the `wa.me/` links and the visible numbers.
- **Add a review:** in `index.html`, copy a `<figure class="review">` block inside `<div class="reviews">`. Use real client feedback only.
- **Change the photo:** replace the files in `assets/img/onsite-*` and keep the same names.
- **Kannada tagline:** the Kannada font file holds only the letters of the current tagline. If you change the wording, either regenerate that font file or delete the `font-family` line under `.kn` in `style.css` so phones use their built-in Kannada font.
