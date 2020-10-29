var apiKey =
  "pk.eyJ1IjoiZGVycmlrZGVubmlzIiwiYSI6ImNrZXVkMnJhMjAxNXYyeHA1NmphbG55dXUifQ.tdm1bY7gd-2JjCP3swyY5Q";

var graymap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/light-v10",
    accessToken: apiKey,
  }
);

var satellitemap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/satellite-v9",
    accessToken: apiKey,
  }
);

var outdoors = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/outdoors-v11",
    accessToken: apiKey,
  }
);
//Now creating the map object with options.  Adding the tile layers we just created to an array of layers

var map = L.map("mapid", {
  center: [40.7, -94.5],
  zoom: 3,
  layers: [graymap, satellitemap, outdoors],
});

//Adding our 'graymap' tile layer to the map.
graymap.addTo(map);

//We create the layers for our two different sets of data, earthquakes and tectonic plates
var tectonicplates = new L.LayerGroup();
var earthquakes = new L.LayerGroup();

//Defining an object that contains all of our different map choices.  Only one of these maps will be visible at a time.

var baseMaps = {
  Satellite: satellitemap,
  Grayscale: graymap,
  Outdoors: outdoors,
};

//We define an object that contains all of our overlays.  Any combination of tehese overalys may be visible at the same time!

var overlays = {
  "Tectonic Plates": tectonicplates,
  Earthquakes: earthquakes,
};

//Then we add a control to the map that will allow the user to change which layers are visible

L.control.layers(baseMaps, overlays).addTo(map);
