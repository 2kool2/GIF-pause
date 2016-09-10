
<h1>Late-load animated GIFs and add a pause button</h1>

Provides a pause button to meet <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2 level AA (supply controls for animations which last longer than 5 seconds).

CodePen demo: <a href="http://codepen.io/2kool2/pen/kkNLYO">Late-load an animated gif and provide a pause button</a>

Super small script: 543 bytes gzipped.

<h2>How it works</h2>

Initially loads a static image (.jpg) then once the page has fully loaded, swaps it out for the (much) larger animated gif.

A pause control is added which flips between the static image and the animation to meet WCAG 2 level AA. Which states a pause control is a requirement on animations which last longer than 5 seconds.

The animated gif is preloaded into memory, then displayed, preventing flashes of white occuring.

The SVGs used for control buttons are defined in the HTML.

<h2>To use</h2>

Include a link to the script:

```html
<script src="js/gif-late-load.1.0.min.js"></script>
```

Add data attributes to the image(s):

```html
<img src="img/static.jpg"
     data-gif="img/animated.gif"
     alt="Alt text description">
```

Add an SVG definition for the play and pause buttons:

```html
<svg style="display:none">
  <defs>
    <symbol viewBox="0 0 34 34" id="icon-play">
      <path d="M25 17.2l-14 7v-14l14 7z"></path>
    </symbol>
    <symbol viewBox="0 0 34 34" id="icon-pause">
      <path d="M20 11h2v12h-2V11zm-8 0h2v12h-2V11z"></path>
    </symbol>
  </defs>
</svg>
```

Tested Mac and PC: IE9+, Chrome, Safari, Firefox.
