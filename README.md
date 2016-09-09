
<h1>Late-load large gifs and add a pause button</h1>

Provides a pause button to meet WCAG 2 level AA (supply controls for animations which last longer than 5 seconds).

CodePen demo: <a href="http://codepen.io/2kool2/pen/kkNLYO">Late-load an animated gif and provide a pause button</a>

Very small script: 556 bytes gzipped

<h2>How it works</h2>

Initially loads a static image (.jpg) then once the page has fully loaded, swaps it out for the (much) larger animated gif.

A pause control is added which flips between the static image and the animation to meet WCAG 2 level AA. Which states a pause control is a requirement on animations which last longer than 5 seconds.

The animated gif is preloaded into memory, then displayed, preventing flashes of white occuring.

The SVGs used for control buttons are defined in the HTML.

<h2>To use</h2>

Include a link to the script:

<code>
<script src="js/gif-late-load.1.0.js"></script>
</code>

Add data attributes to the images:

<code>
<img  src="http://www.tesco.com/baking/2016/i/battenberg.jpg"
      data-gif="http://www.tesco.com/baking/2016/i/battenberg.gif"
      alt="Alt text description">
</code>
