# Shriram Fabrications & Constructions

Live site: https://shrikarvk.github.io/marutisriramfabcons/

One-page static website for Shriram Fabrications & Constructions (Hubballi, Dharwad and Hangal), run by Maruti Doddamani and Ram Doddamani. There is no build step. GitHub Pages serves the files on `main` as they are.

## Files

- `index.html`: all page content
- `style.css`: styles. Colours are at the top: graphite is construction, red oxide is fabrication.
- `script.js`: mobile menu, WhatsApp chooser and the enquiry form that opens WhatsApp
- `assets/img/`: Maruti's photo for the About section (`about-maruti-480` and `about-maruti-800`, in `.jpg` and `.webp`) and `share.jpg`, the preview image shown when the link is shared on WhatsApp or Facebook
- `assets/fonts/`: Anek by Ek Type (SIL Open Font License, see `OFL.txt`), cut down to the characters this site uses

## Common edits

- **Phone numbers:** search `index.html` for `8217039257` (Maruti) and `6362172966` (Ram). Update the `tel:` links, the `wa.me/` links and the visible numbers.
- **Add a review:** in `index.html`, copy a `<figure class="review">` block inside `<div class="reviews">`. Use real client feedback only.
- **Change the photo:** replace the files in `assets/img/about-maruti-*` and keep the same names (4:5 portrait, 480 and 800px wide).
- **Kannada tagline:** the Kannada font file holds only the letters of the current tagline. If you change the wording, either regenerate that font file or delete the `font-family` line under `.kn` in `style.css` so phones use their built-in Kannada font.

### Add a photo to "Our work"
1. Save two sizes in `assets/work/`: a thumbnail at 640px on the long side (`name-sm.jpg` + `name-sm.webp`) and a large one at 1400px (`name-lg.jpg` + `name-lg.webp`). The current photos were auto-levelled, given a little extra contrast and colour, and sharpened before resizing.
2. Copy one `<li class="work-item">` block in `index.html`, then change the file names, the `width`/`height` of the thumbnail, the `alt` text and the caption.
3. Blur house name plates, house numbers and vehicle number plates before publishing.
