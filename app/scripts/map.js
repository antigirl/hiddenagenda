function initialize() {
    var styles = [{
        "featureType": "all",
        "elementType": "all",
        "stylers": [{
            "saturation": -100
        }, {
            "lightness": -60
        }, {
            "gamma": 0.90
        }]

    }];

    var myLatlng = new google.maps.LatLng(53.344867, -6.264573);

    var mapOptions = {
        zoom: 18,
        center: myLatlng,
           disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.SATELLITE, 'map_style']
        }
    };

    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Styled Map"
    });



    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');


    // var marker = new google.maps.Marker({
    //     position: myLatlng,
    //     map: map,
    //     icon: 'images/global/map_marker.png'
    // });
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);
}

window.onload = loadScript;