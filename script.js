"use strict"

const AUTH_TOKEN = "at_FbLYYeehq69DIa9DdAMOyhClI4pzi";
let ip = document.querySelector('#ip');
let locale = document.querySelector('#location');
let zone = document.querySelector('#zone');
let isp = document.querySelector('#isp');

let input = document.querySelector('#search');
let submit = document.querySelector('#submit');

let lat = 0;
let lng = 0;

let map = document.querySelector('#map');
map = L.map("map", {zoomControl: false}, 13)

const fetchMapData = (input = "") => {
  fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${AUTH_TOKEN}&ipAddress=${input}`)
    .then(res => {
      if(!res.ok){
        throw new Error("Invalid Ip address or domain");
      }

      return res.json();
    })
    .then(data => {
      isp.textContent = data.isp;
      ip.textContent = data.ip;
      locale.textContent = `${data.location.country} ${data.location.region} ${data.location.city}`
      zone.textContent = data.location.timezone

      lat = data.location.lat;
      lng = data.location.lng;

      console.log(`ip: ${ip.textContent}, location: ${locale.textContent}, zone: ${zone.textContent}, isp: ${isp.textContent}, lat and lng: ${lat} ${lng}`);

      showMap(lat, lng);
    })

    .catch(err => console.log(err))


}

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

const showMap = (lat, lng) => {
  if (map !== null){
    map.remove();
    generateMap(lat, lng);
  } else {
    generateMap(lat, lng)
}}

const onSubmit = () => {
  console.log(input.value)

  fetchMapData(input.value)
}

submit.addEventListener("click", () => onSubmit())

// var map = L.map('map').setView([lat, lng], 13);
// var marker = L.marker([lat, lng]).addTo(map)

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);




fetchMapData()
console.log(`ip: ${ip.textContent}, location: ${locale.textContent}, zone: ${zone.textContent}, isp: ${isp.textContent}, lat and lng: ${lat} ${lng}`);