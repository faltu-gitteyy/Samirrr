LOVE SURPRISE WEBSITE
======================

Open index.html in a browser.

1. Change the date
------------------
Open script.js and change:

const startDate = new Date("2025-09-13T05:00:00");

Use the date/time when your relationship started.

2. Add your photo
-----------------
The current design intentionally leaves a photo placeholder.

In index.html, find:

<div class="photo-placeholder">
  ...
</div>

Replace it with:

<img class="your-photo" src="your-photo.jpg" alt="Us">

Then add this CSS to style.css:

.your-photo {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 20px;
}

3. Main effects
---------------
- Full-screen surprise intro
- Button reveal transition
- Animated heart-shaped tree
- Tree trunk growing animation
- Heart leaves blooming one-by-one
- Floating tree movement
- Falling heart petals
- Live relationship counter
- Responsive mobile layout

Tip:
For the biggest surprise effect, put a meaningful couple photo in the
placeholder and personalize the letter text in index.html.
