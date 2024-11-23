let nycmap = L.map("nycmap").setView([40.744,-73.922], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/maiija/cm3qdiciq000m01qpf5vd4mz1/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFpaWphIiwiYSI6ImNtM3FkMjB3ZTBva2IybXEyeHowaThmMGcifQ.c6IO0ebHke6uD7SnFwfLkw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(nycmap);

for (let i = 0; i < places.length; i++ ) {
    L.marker( [ places[i].latitude, places[i].longitude ] )
    .bindPopup( '<h3>' + places[i].name + '</h3>' + '<p>' + places[i].description + '</p>')
    .addTo( nycmap );
}