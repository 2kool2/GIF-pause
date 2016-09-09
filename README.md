
<h1>Late load large gifs and swap out the smaller jpg</h1>

Provides a pause button to meet WCAG 2 level AA (supply controls for animations which last longer than 5 seconds).

CodePen demo: <a href="http://codepen.io/2kool2/pen/kkNLYO">Late-load an animated gif and provide a pause button</a>

<h2>How it works</h2>

Initially loads a static image (.jpg) then once the page has fully loaded, swaps it out for the (much) larger animated gif.

A pause control is added which flips between the static image and the animation to meet WCAG 2 level AA. Which states a pause control is a requirement on animations which last longer than 5 seconds.

The animated gif is preloaded into memory, then displayed, preventing flashes of white occuring.

The SVG controls used are defined in the HTML.

