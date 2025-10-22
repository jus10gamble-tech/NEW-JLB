document.addEventListener('DOMContentLoaded',function(){
  var map = L.map('map').setView([33.0,-88.0],5);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
  var places = [
    ["Missouri",38.573936,-92.603760],
    ["Colorado",39.550051,-105.782067],
    ["Illinois",40.000,-89.000],
    ["Indiana",39.8,-86.1],
    ["Tennessee",35.8,-86.4],
    ["Wisconsin",44.5,-89.5],
    ["Texas",31.0,-99.0],
    ["Oklahoma",35.5,-97.5],
    ["Arkansas",35.1,-92.4],
    ["Louisiana",30.9,-92.0],
    ["Kentucky",37.8,-84.3],
    ["Nebraska",41.5,-99.8],
    ["Kansas",38.5,-98.0],
    ["Iowa",42.1,-93.5],
    ["Florida",28.1,-81.6],
    ["Georgia",32.7,-83.2],
    ["Mississippi",32.7,-89.7],
    ["Alabama",32.8,-86.9],
    ["Bahamas",25.047984,-77.355413]
  ];
  places.forEach(function(p){ L.circleMarker([p[1],p[2]],{radius:7, color:'#6ec1e4', fillColor:'#6ec1e4'}).addTo(map).bindPopup('<b>'+p[0]+'</b>'); });
});