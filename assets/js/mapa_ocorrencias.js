// Initialize and add the map
function initMapOcorrencias() {
    // The location of Uluru
    // const uluru = { lat: -22.8413569, lng: -47.053000 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(-22.8615638,-47.1528286),
    zoom: 17,
    });

    const icons = {
        police: {
        icon: "/images/police-car-min.png",
        },
    };

    const features = [
        {
        position: new google.maps.LatLng(-22.8617500,-47.1528300),
        type: "police",
        },
        // {
        // position: new google.maps.LatLng(-22.8616995,-47.1528300),
        // type: "police",
        // },
        // {
        // position: new google.maps.LatLng(-33.91747, 151.22912),
        // type: "police",
        // },
        // {
        // position: new google.maps.LatLng(-33.9191, 151.22907),
        // type: "police",
        // },
    ];

// Create markers.
    for (let i = 0; i < features.length; i++) {
        const marker = new google.maps.Marker({
        position: features[i].position,
        icon: icons[features[i].type].icon,
        map: map,
        });
    }

    const flightPlanCoordinates = [
        { lat:-22.8616000, lng:-47.1531000 },
        { lat:-22.8614, lng:-47.153888 },
        { lat:-22.8598, lng:-47.1565 },
        // { lat: -27.467, lng: 153.027 },
      ];
      const flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      flightPath.setMap(map);
}