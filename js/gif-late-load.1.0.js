var Gif_Load_Control = (function (window, d) {

	"use strict";

	// Wait until load event fires then go fetch large gifs.
	// On gif load replace the content jpg and add a pause button.
  
  // If supporting IE9 then comment out requestAnimationFrame

	var dataAttr = "data-gif";
	
	var btnClass = "btn-anim";
	var btnOnClass = "btn-anim-on";

	var svgPlayIcon = "icon-play";
	var svgPauseIcon = "icon-pause";
	var svgClass = "svg-pausePlay";
	
	var svgPlayTitle = "Play animation";
	var svgPauseTitle = "Pause animation";


  var _getSVG = function (icon, clss, title) {
    var svg = d.createElementNS("http://www.w3.org/2000/svg", "svg");

		svg.setAttribute("class", clss); // IE9 and Edge supported

		// Prevent IE focusing on SVG
		svg.setAttribute("focusable", "false");
    if (title) {
      var t = d.createElementNS("http://www.w3.org/2000/svg", "title");
      t.textContent = title;
      svg.appendChild(t);
    }
    var use = d.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + icon);
    svg.appendChild(use);
    return svg;
  };



  var _displayImage = function(newImg, origImg) {

    window.requestAnimationFrame(function() {
			origImg.src = newImg.src;
    });

  };


	var _toggleAnimation = function (e) {

		var target = e.target;
		var origImg = e.target.origImg;

		window.requestAnimationFrame(function() { 

			if (origImg.src === origImg.staticSrc) {
				origImg.src = origImg.animatedSrc;
				target.className = target.className.replace(btnClass, btnClass + " " + btnOnClass);
				target.textContent = "";
				target.appendChild(_getSVG(svgPauseIcon, svgClass, svgPauseTitle));
			} else {
				origImg.src = origImg.staticSrc;
				target.className = target.className.replace(btnClass + " " + btnOnClass, btnClass);
				target.textContent = "";
				target.appendChild(_getSVG(svgPlayIcon, svgClass, svgPlayTitle));
			}

		});
	};


	var _addPauseBtn = function (origImg) {

		var parentObj = origImg.parentElement;
		var btn = d.createElement("button");

		btn.origImg = origImg;

		btn.className = btnClass + " " + btnOnClass;
		btn.appendChild(_getSVG(svgPauseIcon, svgClass, svgPauseTitle));
		btn.addEventListener("click", _toggleAnimation, false);

		parentObj.appendChild(btn);
	};


  var _requestImage = function (src, origImg) {

    var newImg = new Image();

		origImg.staticSrc = origImg.src;
		origImg.animatedSrc = src;

    newImg.addEventListener("load", function() {

      _displayImage(newImg, origImg);
			_addPauseBtn(origImg);

    }, false);

    newImg.src = src;
  };


	var initialise = function () {

		var imgs = d.querySelectorAll("[" + dataAttr + "]");
		var i = imgs.length;
		while (i--) {
			_requestImage (imgs[i].getAttribute(dataAttr), imgs[i]);
		}
	};

	window.addEventListener("load", initialise, false);

}(window, document));