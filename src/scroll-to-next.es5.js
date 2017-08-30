/* ScrollToNext -- Author: Justin Lowery -- License: MIT */
/**
 * ScrollToNext scrolls to the next instance of a DOM element tag or class.
 * @param {array} elements - A list of elements to scroll between.
 * @param {object} options - An object containing Element.scrollIntoView options.
 */
var ScrollToNext = function(elements, options) {
  'use strict';

  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (rect.top >= 0 && rect.bottom <= rect.height + window.innerHeight);
  };
  function isElementAboveViewport(element) {
    var rect = element.getBoundingClientRect();
    return (rect.top - window.innerHeight < 0 && rect.bottom < window.innerHeight);
  };

  if (elements.length === 0) {
    throw new Error('ScrollToNext: No instance of the given tag or class could be found.');
  }
	for (var i = 0; i < elements.length; i++) {
  	if (i === 0 && !isElementAboveViewport(elements[i]) && !isElementInViewport(elements[i])) {
      elements[i].scrollIntoView(options);
      break;
    }
    if (i + 1 < elements.length && !isElementAboveViewport(elements[i + 1]) && !isElementInViewport(elements[i + 1])) {
    	elements[i + 1].scrollIntoView(options);
      break;
    }
    if (i === elements.length - 1 && !isElementInViewport(elements[0])) {
    	elements[0].scrollIntoView(options);
    }
  }
};
