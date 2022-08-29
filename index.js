function initMap() {
  //set location as los angeles via lat and long coordinates
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 34.04924594193164, lng: -118.24104309082031 },
  });
  const transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map); //get transit layer from given location
}

window.initMap = initMap; //initialize map
