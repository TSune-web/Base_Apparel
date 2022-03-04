# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpg)


### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

1. Background -> linear-gradient
```css
body {
  background-image: linear-gradient(
    135deg,
    hsl(0, 0%, 100%),
    hsl(0, 100%, 98%)
  );
}
```

2. Regex (Regular Expressions)
```js
const re = /\w{6,}@\S+\.\S+/gi;
if (!re.test(inputValue)) {
    errIcon.classList.add('warning');
    errText.classList.add('warning');
}
```


### Continued development
1. Image rendering and positioning
2. Gradient colors (design)
3. Responsive design
  - resizing images based on screen sizes


### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) - for background-color: linear-gradient(); and regular expressions for email validation.
- [RegExr](https://regexr.com/) - for learning the meaning of regular expressions and trying out how they work.
