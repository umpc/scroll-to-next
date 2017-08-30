# ScrollToNext.js

ScrollToNext scrolls to the next instance of a DOM element tag or class.

No external dependencies are required.

## Example
```js
document.getElementById("next-article").addEventListener('click', function() {
  try {
    ScrollToNext(document.getElementsByTagName("article"), {
      behavior: 'smooth'
    });
  } catch(ex) {
    console.error(ex.message);
  }
});
```
