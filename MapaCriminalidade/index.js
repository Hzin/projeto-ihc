let map;

const redCircles = {
  1: {
    lat: -22.846200933004823,
    lng: -47.050287128744465,
  },

  2: {
    lat: -22.846247016782158,
    lng: -47.05039007069633,
  },

  3: {
    lat: -22.846123338328468,
    lng: -47.050291998199654,
  },
};

const orangeCircles = {
  1: {
    lat: -22.844576880498426,
    lng: -47.052375658378146,
  },

  2: {
    lat: -22.844487895262766,
    lng: -47.05246685208555,
  },

  3: {
    lat: -22.84744415737641,
    lng: -47.05095408810524,
  },

  4: {
    lat: -22.84752819823294,
    lng: -47.05093262967161,
  },
};

const blueCircles = {
  1: {
    lat: -22.845832550179534,
    lng: -47.05260633272748,
  },
};

function initMap() {
  const icons = {
    car: {
      name: "Assalto de carro",
      icon: "./assets/car_2x.png",
    },
    gun: {
      name: "Assalto armado",
      icon: "./assets/gun_2x.png",
    },
    exclamation: {
      name: "Assedio",
      icon: "./assets/exclamation_2x.png",
    },
  };

  const colors = {
    red: {
      name: "Risco: alto",
      code: "#FF0000",
      icon: "./assets/rectangleRed.png",
    },
    orange: {
      name: "Risco: medio",
      code: "#FFA500",
      icon: "./assets/rectangleOrange.png",
    },
    blue: {
      name: "Risco: baixo",
      code: "#0000FF",
      icon: "./assets/rectangleBlue.png",
    },
  };

  const rectangleTransparency = 0.1;

  const messageRed =
    "<div id='message'>" +
    "<h4><center>Roubo armado</center></h4>" +
    "<ul>" +
    "<li>Risco: alto</li>" +
    "<li>Primeiro reporte: ha 17 minutos</li>" +
    "</ul>" +
    "</div>";

  const messageOrange =
    "<div id='message'>" +
    "<h4><center>Roubo de veiculo</center></h4>" +
    "<ul>" +
    "<li>Risco: medio</li>" +
    "<li>Primeiro reporte: ha 2 horas e 57 minutos</li>" +
    "</ul>" +
    "</div>";

  const messageBlue =
    "<div id='message'>" +
    "<h4><center>Assedio</center></h4>" +
    "<ul>" +
    "<li>Risco: medio</li>" +
    "<li>Primeiro reporte: ha 1 horas e 10 minutos</li>" +
    "</ul>" +
    "</div>";

  const pixelOffset = new google.maps.Size(0, -50);

  const infoWindowRed = new google.maps.InfoWindow({
    pixelOffset: pixelOffset,
    content: messageRed,
  });

  const infoWindowOrange = new google.maps.InfoWindow({
    pixelOffset: pixelOffset,
    content: messageOrange,
  });

  const infoWindowBlue = new google.maps.InfoWindow({
    pixelOffset: pixelOffset,
    content: messageBlue,
  });

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -22.84656676534597, lng: -47.051059616883165 },
    zoom: 18,
  });

  const rectangleRed = new google.maps.Rectangle({
    strokeColor: colors.red.code,
    strokeOpacity: 0.5,
    strokeWeight: 2,
    fillColor: colors.red.code,
    fillOpacity: rectangleTransparency,
    map,
    bounds: {
      north: -22.84568688303695,
      south: -22.846609953918833,
      east: -47.0496764034167,
      west: -47.05101337040792,
    },
  });

  const rectangleOrange = new google.maps.Rectangle({
    strokeColor: colors.orange.code,
    strokeOpacity: 0.5,
    strokeWeight: 2,
    fillColor: colors.orange.code,
    fillOpacity: rectangleTransparency,
    map,
    bounds: {
      north: -22.847267593376987,
      south: -22.8476439530116,
      east: -47.05065655354774,
      west: -47.05110794447695,
    },
  });

  const rectangleOrange2 = new google.maps.Rectangle({
    strokeColor: colors.orange.code,
    strokeOpacity: 0.5,
    strokeWeight: 2,
    fillColor: colors.orange.code,
    fillOpacity: rectangleTransparency,
    map,
    bounds: {
      north: -22.844256707042973,
      south: -22.844783614916032,
      east: -47.05216118293326,
      west: -47.05268564984084,
    },
  });

  const blueOrange = new google.maps.Rectangle({
    strokeColor: colors.blue.code,
    strokeOpacity: 0.5,
    strokeWeight: 2,
    fillColor: colors.blue.code,
    fillOpacity: rectangleTransparency,
    map,
    bounds: {
      north: -22.845628628704095,
      south: -22.845966823381364,
      east: -47.0524192660416,
      west: -47.05275939683626,
    },
  });

  for (const redCircle in redCircles) {
    const marker = new google.maps.Marker({
      position: redCircles[redCircle],
      icon: icons.gun.icon,
      map: map,
    });

    marker.addListener("click", () => {
      infoWindowOrange.close();
      infoWindowBlue.close();

      infoWindowRed.setPosition(redCircles[redCircle]);
      infoWindowRed.open(map);
    });
  }

  for (const orangeCircle in orangeCircles) {
    const marker = new google.maps.Marker({
      position: orangeCircles[orangeCircle],
      icon: icons.car.icon,
      map: map,
    });

    marker.addListener("click", () => {
      infoWindowRed.close();
      infoWindowBlue.close();

      infoWindowOrange.setPosition(orangeCircles[orangeCircle]);
      infoWindowOrange.open(map);
    });
  }

  for (const blueCircle in blueCircles) {
    const marker = new google.maps.Marker({
      position: blueCircles[blueCircle],
      icon: icons.exclamation.icon,
      map: map,
    });

    marker.addListener("click", () => {
      infoWindowRed.close();
      infoWindowBlue.close();

      infoWindowBlue.setPosition(blueCircles[blueCircle]);
      infoWindowBlue.open(map);
    });
  }

  // legendas de ícones
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(
    document.getElementById("legendIcons")
  );

  var legendIcons = document.getElementById("legendIcons");

  for (const key in icons) {
    const type = icons[key];
    const name = type.name;
    const icon = type.icon;
    const div = document.createElement("div");
    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legendIcons.appendChild(div);
  }

  // legendas de cores
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(
    document.getElementById("legendColors")
  );

  var legendColors = document.getElementById("legendColors");

  for (const key in colors) {
    const type = colors[key];
    const name = type.name;
    const icon = type.icon;
    const div = document.createElement("div");
    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legendColors.appendChild(div);
  }

  // converte coordenadas para endereço
  const geocoder = new google.maps.Geocoder();

  // adicionando listener que vai abrir um modal de reporte
  map.addListener("click", (mapsMouseEvent) => {
    infoWindowRed.close();
    infoWindowOrange.close();
    infoWindowBlue.close();

    const latLng = JSON.parse(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    );

    let resultadoGeocoder = latLng.lat + ", " + latLng.lng;

    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          resultadoGeocoder = results[0].formatted_address;
        } else {
          console.log("Não foi possível obter o endereço");
        }
      } else {
        console.log("Geocoder failed due to: " + status);
      }

      document
        .getElementById("localizacao").innerHTML = resultadoGeocoder;

      document.getElementById("modalReportarButton").click();
    });
  });
}
