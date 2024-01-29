# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [View](https://your-solution-url.com)
- Live Site URL: [Visit](https://ip-address-tracker-lexzee.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [IP Geolocation API by IPify](https://geo.ipify.org/) - Ipify
- [LeafletJS](https://leafletjs.com/) - Leeflet JS to render map

### What I learned
How to generate map with Ipify

```js
const generateMap = (lat, lng) => {
  map = L.map("map", {zoomControl: false}).setView([lat, lng], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  let icon = L.icon({
    iconUrl: './images/icon-location.svg',
  })

  L.marker([lat, lng], {icon: icon}).addTo(map)

  L.control.zoom({
    position: 'bottomright'
  }).addTo(map);
}
```

## Author

- Website - [Abdulquddus Abdulrahman (Lexzee)](https://creativedev-lexzee.vercel.app/)
- Frontend Mentor - [@lexzee](https://www.frontendmentor.io/profile/lexzee)
- Twitter - [@devlexzee](https://www.twitter.com/devlexzee)
- LinkedIn - [@abdulquddus-abdulrahman](https://www.linkedin.com/in/abdulquddus-abdulrahman)
