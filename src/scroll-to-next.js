/* ScrollToNext -- Author: Justin Lowery -- License: MIT */
/**
 * ScrollToNext scrolls to the next instance of a DOM element tag or class.
 * @param {array} elements - A list of elements to scroll between.
 * @param {object} options - An object containing Element.scrollIntoView options.
 */
export const ScrollToNext = (elements, options) => {
  if (elements.length === 0) {
    throw new Error('ScrollToNext: No instance of the given tag or class could be found.');
  }
  Object.keys(elements).map((val, idx, arr) => {
    if (idx === 0 && !isElementAboveViewport(val) && !isElementInViewport(val)) {
      val.scrollIntoView(options);
      return;
    }
    if (idx + 1 < arr.length && !isElementAboveViewport(arr[idx + 1]) && !isElementInViewport(arr[idx + 1])) {
    	arr[idx + 1].scrollIntoView(options);
      return;
    }
    if (idx === arr.length - 1 && !isElementInViewport(arr[0])) {
    	arr[0].scrollIntoView(options);
    }
  });
};

const isElementInViewport = element => {
  const rect = element.getBoundingClientRect();
  return (rect.top >= 0 && rect.bottom <= rect.height + window.innerHeight);
};

const isElementAboveViewport = element => {
  const rect = element.getBoundingClientRect();
  return (rect.top - window.innerHeight < 0 && rect.bottom < window.innerHeight);
};
