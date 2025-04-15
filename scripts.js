function initMap() {
  const center = { lat: 37.7749, lng: -122.4194 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 12,
    mapTypeControl: true,
    zoomControl: true,
    streetViewControl: true
  });

  const marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "You are here!"
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<strong>This is your location!</strong>"
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}
