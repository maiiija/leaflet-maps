let map = L.map("map").setView([29.649,-82.344], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/maiija/cm3qdiciq000m01qpf5vd4mz1/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFpaWphIiwiYSI6ImNtM3FkMjB3ZTBva2IybXEyeHowaThmMGcifQ.c6IO0ebHke6uD7SnFwfLkw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

let marker1 = L.marker([29.653971, -82.339043]).addTo(map);
marker1.bindPopup("This is The Hub on 3rd Avenue, where I lived summer 2024.")
let marker2 = L.marker([29.651430, -82.344780]).addTo(map);
marker2.bindPopup("This is Fletcher Hall on UF's campus, where I lived for the 2023-2024 academic year.")
let marker3 = L.marker([29.653580, -82.344670]).addTo(map);
marker3.bindPopup("This is College Park at Midtown's Orange and Blue building, where I lived summer 2023.")
let marker4 = L.marker([29.644840, -82.351060]).addTo(map);
marker4.bindPopup("This is Simpson Hall on UF's campus, where I lived for the 2022-2023 academic year.")


