let map;

function initMapOcorrencias() {
    
    map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(-22.8615638,-47.1528286),
    zoom: 17,
    });

    const icons = {
        police: {
        icon: "/images/police-car.png",
        },
        police_dd: {
        icon: "/images/police-car-diagonal-down.png",
        },
        car_diagonal: {
        icon: "/images/car-diagonal.png",
        },
        arma: {
        icon: "../MapaCriminalidade/assets/gun_2x.png",
        },
        outros: {
        icon: "../MapaCriminalidade/assets/exclamation_2x.png",
        },
    };

    const polices = {
        1: {
            lat:-22.8617500,
            lng:-47.1528300,
            icon:"police"
        },
        2: {
          lat: -22.8613,
          lng: -47.1490,
          icon:"police_dd"
        },
    };

    const cars = {
        1: {
            lat: -22.8603,
            lng: -47.1565,
            icon:"car_diagonal"
        },
    };

    const armas = {
        1: {
            lat: -22.862763,
            lng: -47.149916,
            icon:"arma"
        },
    };

    const outros = {
        1: {
            lat: -22.864278,
            lng: -47.157495,
            icon:"outros"
        },
    };

    const infoPolice =
    "<div id='message'>" +
    "<h4><center>Em patrulhamento</center></h4>" +
    "<ul>" +
    "<li>Viatura: 258</li>" +
    "<li>Inicio: 1 hrs e 10 min atrás</li>" +
    "</ul>" +
    "</div>";

    const infoPolicePersiguicao =
    "<div id='message'>" +
    "<h4><center>Em perseguição</center></h4>" +
    "<ul>" +
    "<li>Viatura: 277</li>" +
    "<li>Ínicio da perseguição: 2 min atrás</li>" +
    "</ul>" +
    "</div>";

    const infoCar =
    "<div id='message'>" +
    "<h4><center>Carro furtado</center></h4>" +
    "<ul>" +
    "<li>Modelo: Punto</li>" +
    "<li>Placa: FSS-0253</li>" +
    "</ul>" +
    "</div>";

    const infoArma =
    "<div id='message'>" +
    "<h4><center>Possível roubo em andamento</center></h4>" +
    "<ul>" +
    "<li>Há alguém armado: Sim</li>" +
    "<li>Ínicio: 5 min atrás</li>" +
    "</ul>" +
    "</div>";

    const infoOutros =
    "<div id='message'>" +
    "<h4><center>Assédio</center></h4>" +
    "<ul>" +
    "<li>Agressor armado: Talvez</li>" +
    "<li>Desc. Agressor: Alto, camisa azul, calça jeans e óculos</li>" +
    "<li>Ínicio: 11 min atrás</li>" +
    "</ul>" +
    "</div>";

    const infoWindowPolice = new google.maps.InfoWindow({
        content: infoPolice,
    });

    const infoWindowPolicePer = new google.maps.InfoWindow({
        content: infoPolicePersiguicao,
    });

    const infoWindowCar = new google.maps.InfoWindow({
        content: infoCar,
    });

    const infoWindowarArma = new google.maps.InfoWindow({
        content: infoArma,
    });

    const infoWindowarOutro = new google.maps.InfoWindow({
        content: infoOutros,
    });

    for (const police in polices) {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(polices[police].lat,polices[police].lng),
            icon: icons[polices[police].icon].icon,
            map: map,
        });

        marker.addListener("click", () => {
            if (polices[police].icon == "police") {
                infoWindowPolicePer.open(map, marker);
            }else{
                infoWindowPolice.open(map, marker);
            }
            
        });
    }

    for (const car in cars) {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(cars[car].lat,cars[car].lng),
            icon: icons[cars[car].icon].icon,
            map: map,
        });

        marker.addListener("click", () => {
            infoWindowCar.open(map, marker);
        });
    }  
    
    for (const arma in armas) {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(armas[arma].lat,armas[arma].lng),
            icon: icons[armas[arma].icon].icon,
            map: map,
        });

        marker.addListener("click", () => {
            infoWindowarArma.open(map, marker);
        });
    }

    for (const outro in outros) {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(outros[outro].lat,outros[outro].lng),
            icon: icons[outros[outro].icon].icon,
            map: map,
        });

        marker.addListener("click", () => {
            infoWindowarOutro.open(map, marker);
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