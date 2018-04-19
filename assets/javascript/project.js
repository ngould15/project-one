var map;
var locationChosen;
var geocoder;
var service;
var infowindow;
var recommendationCounter = 0;
var numRecommendations;
var queryURL;


//Load map when the page is fisrt loaded
function initMap() {

    var latlng = new google.maps.LatLng(40.7128, - 74.0060);
    var mapOptions = {
        zoom: 12,
        center: latlng,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#523735"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c9b2a6"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#dcd2be"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ae9e90"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#93817c"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.government",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#a5b076"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#447530"
                    }
                ]
            },
            {
                "featureType": "poi.place_of_worship",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fdfcf8"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f8c967"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#e9bc62"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e98d58"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#db8555"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#806b63"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8f7d77"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#b9d3c2"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#92998d"
                    }
                ]
            }
        ]
    }
    geocoder = new google.maps.Geocoder()
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //Start geocode function & fourSquare API request once button is clicked
    $("#location").on("click", function () {
        geocodeAddress(geocoder, map)


        var locationChosen = $("#locationSelected").val().trim();
        var clientID = "Y0THHOXVAO3E2J32CKEOXSGYSZ2ACS4NZU5J4ABSYVOS5I50";
        var clientSecret = "JZGTVKXP4H3E4IROULCOUJR4KBOXRY24TCZ4QS0DILORD3RI";
        var venues;

        queryURL = "https://api.foursquare.com/v2/venues/explore?near=" + locationChosen + "&section=topPicks&v=20180408&sortByDistance=1&venuePhotos=1&client_id=" + clientID + "&client_secret=" + clientSecret + "&categoryId="

        $("#recSearch").on("click", function () {
            var categories = [];

            $(".check:checked").each(function () {
                categories.push($(this).val());
            })

            queryURL = queryURL + categories.join(",")

            $.ajax({
                url: queryURL,
                method: 'GET',
            }).done(function (result) {
                console.log(result)
                console.log(queryURL)
                console.log(result.response.groups[0].items.length)
                $("#recommend").removeClass("hidden")

                for (var i = 0; i < 5; i++) {
                    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

                    if (result.response.groups[0].items[i].venue.url != undefined) {
                        var url = result.response.groups[0].items[i].venue.url
                        $("#rec-"+ i ).html("<a href=" + url + " target=_blank>" + result.response.groups[0].items[i].venue.name + "<a>");
                    }
                    else {
                        $("#rec-"+ i ).html("<p><strong>" + result.response.groups[0].items[i].venue.name + "</strong></p>");
                    }    

                    if (result.response.groups[0].items[i].venue.rating != undefined) {
                        $("#rec-"+ i).append("<p>Rating: " + result.response.groups[0].items[i].venue.rating + "</p>");                    }
                    
                    if (result.response.groups[0].items[i].tips[0].text != undefined) {
                        $("#rec-"+ i).append("<p>Top Review: " + result.response.groups[0].items[i].tips[0].text + "</p>");
                    }
                    
                    $("#rec-"+ i).append("<p><strong>Map Label: " + labels[i] + "<strong></p>");
                    
                    // var price = result.response.groups[0].items[i].venue.price.tier
                    // if (price == 1) {
                    //     $("#rec-"+ i).append("<p> $ </p>");
                    // }
                    // else if (price == 2) {
                    //     $("#rec-"+ i).append("<p> $$ </p>");
                    // }
                    // else if (price == 3) {
                    //     $("#rec-"+ i).append("<p> $$$ </p>");
                    // }
                    // else if (price == 4) {
                    //     $("#rec-"+ i).append("<p> $$$$ </p>");
                    // }
                    // else if (price == 5) {
                    //     $("#rec-"+ i).append("<p> $$$$$ </p>");
                    // } else {
                    //     console.log("undefined");
                    // // }
                };

            for (j = 0; j < result.response.groups[0].items.length; j++) {
                createMarkerFourSquare(result.response.groups[0].items[j].venue, j)
            }

        })
    })

});

}


//transform location into latlng
function geocodeAddress(geocoder, resultsMap) {
    address = $("#locationSelected").val().trim();
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            console.log(results[0].geometry.location)
            var marker = new google.maps.Marker({
                map: resultsMap,
            });

            //call for lodging locations
            infowindow = new google.maps.InfoWindow();
            service = new google.maps.places.PlacesService(map);
            service.textSearch({
                location: results[0].geometry.location,
                radius: 10000,
                type: ['lodging']
            }, detailsCallback);

        } else {
            console.log('Geocode was not successful for the following reason: ' + status);
        }

    });
}

//create entries in the map
function detailsCallback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var request = {
                placeId: results[i].place_id
            };

            service.getDetails(request, placeDetailsCallback);

            function placeDetailsCallback(place, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    createMarker(place);
                }
            }

        }
    }

}

function createMarkerFourSquare(venue, j) {

    var latitude = parseFloat(venue.location.lat);
    var longitude = parseFloat(venue.location.lng);
    var newPosition = { lat: latitude, lng: longitude }
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if (j < 5) {
        var marker = new google.maps.Marker({
            map: map,
            position: newPosition,
            title: venue.name,
            label: labels[j]
        });
    }
    else {
        var marker = new google.maps.Marker({
            map: map,
            position: newPosition,
            title: venue.name,
        });
    }

    google.maps.event.addListener(marker, 'click', function () {

        var locationName = "<p><strong> " + venue.name + "</strong></p>";
        var locationAddress = "<p>Address: " + venue.location.address + "</br>";
        //var locationPhone = "Phone Number: " + result.response.groups[0].items.venue.name + "</p>";

        infowindow.setContent(locationName + locationAddress);
        infowindow.open(map, this);
    });

}

//add markers in the map
function createMarker(place) {
    var icons = "assets/images/hotel-icon.png"

    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
        icon: icons,
    });

    //expand marker when clicked
    google.maps.event.addListener(marker, 'click', function () {
        if (place.name != undefined) {
            var hotelName = "<p><strong> " + place.name + "</strong></p>";
        }
        else {
            var hotelName = "";
        }

        if (place.formatted_address != undefined) {
            var hotelAddress = "<p>Hotel Address: " + place.formatted_address + "</br>";
        }
        else {
            var hotelAddress = "";
        }

        if (place.international_phone_number != undefined) {
            var hotelPhone = "Hotel Phone Number: " + place.international_phone_number + "</br>";
        }
        else {
            var hotelPhone = "";
        }

        if (place.rating != undefined) {
            var hotelRating = "Hotel Rating: " + place.rating + " out of 5</p>";
        }
        else {
            var hotelRating = "</p>";
        }


        if (place.website != undefined) {
            var bookHotel = " <a href=" + place.website + " target ='_blank'> Book Online</a></p>";
        }
        else {
            var bookHotel = "";
        }

        infowindow.setContent(hotelName + hotelAddress + hotelPhone + hotelRating + bookHotel);
        infowindow.open(map, this);
    });
}

