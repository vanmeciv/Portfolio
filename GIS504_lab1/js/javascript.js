// instructions for building this .js found here: https://github.com/UWTMGIS/TGIS_504-Wi20/blob/master/lab-1/Instructions.md
//Lab 1 Step 1: Prepare the page and initialize the map
// var map = L.map('map').fitWorld(); //commented out for step 4
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrOHJwb3k2NDAwbDAzbXQzOGVoY2draXIifQ.QIoit6ivGyGVV8q1VWDEuw', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v10',
//     //retina screen detection errors and tile size adjustments
//     tileSize: 512,
//     zoomOffset: -1,
// }).addTo(map);
//Lab 1 Step 4: Changing the basemap based on environmental conditions
var light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrOHJwb3k2NDAwbDAzbXQzOGVoY2draXIifQ.QIoit6ivGyGVV8q1VWDEuw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id:'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
});

var dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrOHJwb3k2NDAwbDAzbXQzOGVoY2draXIifQ.QIoit6ivGyGVV8q1VWDEuw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id:'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
});
// Step 4: Changing the basemap based on environmental conditions
// var map = L.map('map', {layers:[light]}).fitWorld();
// Step 5: Finishing touches
// Part 2 (basemap layer controls)
var map = L.map('map', {layers:[light, dark]}).fitWorld(); //moved the map initialization to bottom of environmental contions
// Step 5: Finishing Touches
// Part 2 Adding a layer control
var baseMaps = {
    "Light": light,
    "Dark": dark
};
L.control.layers(baseMaps).addTo(map);
//Lab 1 Step 2: Geolocation
//
function onLocationFound(e) {
    var radius = e.accuracy; //this defines a variable radius as the accuracy value returned by the locate method divided by 2. It is divided by 2 because the accuracy value is the sum of the estimated accuracy of the latitude plus the estimated accuracy of the longitude. The unit is meters.
    L.marker(e.latlng).addTo(map)  //this adds a marker at the lat and long returned by the locate function.
        .bindPopup("You are within " + Math.round(radius * 3.28084) + " feet from this point").openPopup(); //this binds a popup to the marker. The text of the popup is defined here as well. Note that we multiply the radius by 3.28084 to convert the radius from meters to feet and that we use Math.round to round the conversion to the nearest whole number.
    // L.circle(e.latlng, radius).addTo(map); //this adds a circle to the map centered at the lat and long returned by the locate function. Its radius is set to the var radius defined above.
    // Conditional circle around location based on accuracy (syntax correction "[color" should be "{color"
    // circle only shows on desktop browser if less than certain distance
// Lab 1 Step 3: Giving the user feedback about the geolocation accuracy of their device
    if (radius <= 100) {
      L.circle(e.latlng, radius, {color: 'green'}).bindTooltip("The circle is displaying your approximate<br>proximity to this marker.").addTo(map);//added a topltip description of the circle
      // L.circle([48.85, 2.35], {radius: 1000}).bindTooltip("test").addTo(map);
      // L.rectangle([[48.84, 2.34], [48.86, 2.36]]).bindTooltip("test").addTo(map);
    }
    else {
      L.circle(e.latlng, radius, {color: 'red'}).bindTooltip("The circle is displaying your approximate<br>proximity to this marker.").addTo(map); //needs to be .addTo(map) NOT .addTo(mymap); also added a topltip description of the circle
      // L.circle([48.85, 2.35], {radius: 1000}).bindTooltip("test").addTo(map);
      // L.rectangle([[48.84, 2.34], [48.86, 2.36]]).bindTooltip("test").addTo(map);
    }
//Lab 1 Step 4: Changing the basemap based on environmental conditions (Cont.)
    // Basemap changes conditionally based on sunrise/sunset time using SunCalc (https://github.com/mourner/suncalc)
    var times = SunCalc.getTimes(new Date(), e.latitude, e.longitude);
    var sunrise = times.sunrise.getHours();
    var sunset = times.sunset.getHours();


    var currentTime = new Date().getHours();
    if (sunrise < currentTime && currentTime < sunset){
      map.removeLayer(dark);
      map.addLayer(light);
    }
    else {
      map.removeLayer(light);
      map.addLayer(dark);
    }
}
//Lab 1 Step 2: Geolocation
map.on('locationfound', onLocationFound); //this is the event listener
//popup that runs if location denies access or other error
function onLocationError(e) {
  alert(e.message);
}
map.on('locationerror', onLocationError);
//recenters the map on the user's location (browser dialogue box requesting location permissions)
// setView recenters map on user's location or world view
// watch detects continuous location changes -- requests location data for each browser page refresh
// watch: true may darken red circle depending upon how many times the user allows location collection
map.locate({setView: true, watch: true, maxZoom: 16})

// Lab 1 Step 5: Finishing touches
// Part 1: This alerts visitors of the page requesing location info
// Creating window object
var win =  L.control.window(map,{title:'Geolocation',content:'This page requests your location information in order to show a circle displaying your approximate proximity to a nearby marker. This site DOES NOT store or share their location information. <br><br> From your mobile device, enable location settings. <br><br> From a desktop select Allow to continue and close out of this window. Selecting Block will not allow this page to load correctly.'})
           .show()
// Part 3: Set up the map.locate method to run at the click of a button rather than on page load. (uses Easy Button Plugin: https://github.com/CliffCloud/Leaflet.EasyButton)
// Adding hello world popup
// var helloPopup = L.popup().setContent('Hello World!');
//
// L.easyButton('<img src="img/easy-button.png">', function(btn, map){
//     helloPopup.setLatLng(map.getCenter()).openOn(map);
// }).addTo(map);
// Step 5: Finishing Touches
// Part 3 BONUS (run map.locate method on button click)
// Add crosshairs (from fontAwesome) button that gives browser alert for the map center coords
L.easyButton('fas fa-crosshairs', function(btn, map){
  alert('Map center is at: ' + map.getCenter().toString())
    helloPopup.setLatLng(map.getCenter()).openOn(map);
}).addTo(map);
