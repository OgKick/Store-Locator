
var map;
var markers = [];
var infoWindow;
function initMap() {
    var losAngeles = {
        lat: 34.063380,
        lng: -118.358080
    }
    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 8,
        styles:
            [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ebe3cd"
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
            "featureType": "poi.attraction",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi.business",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi.government",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi.medical",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "on"
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
            "elementType": "geometry.fill",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi.school",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi.sports_complex",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "on"
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
                "color": "#c5b163"
              },
              {
                "weight": 1
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f7ab08"
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
                "color": "#f45a01"
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
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c5b163"
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
            "color": "#a47904"
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
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#d7f1fe"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#b6edda"
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
    });
    infoWindow = new google.maps.InfoWindow();
    searchStores();
}


function searchStores(){
    var foundStores = [];
    var zipCode = document.getElementById('zip-code-input').value;
    if(zipCode){
        stores.forEach(function(store){
            var postal = store.address.postalCode.substring(0,5);
            if(postal == zipCode){
                foundStores.push(store);
            }
        });
    } else {
        foundStores = stores;
    }
    clearLocations()
    displayStores(foundStores);
    showStoresMarkers(foundStores);
    setOnClickListener();
}


function clearLocations() {
    infoWindow.close();
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers.length = 0;
}


function setOnClickListener() {
    var storeElements = document.querySelectorAll('.store-container');
    storeElements.forEach(function(elem, index){
        elem.addEventListener('click', function(){
            google.maps.event.trigger(markers[index], 'click');
        })
    });
}

function displayStores(stores) {
    var storesHtml = "";
    stores.forEach(function(store, index){
        var name = store.name;
        var address = store.addressLines;
        var phone = store.phoneNumber;
        storesHtml += `
            <div class="store-container">
                <div class="store-container-background">
                    <div class="store-info-container">
                        <div class="store-name">
                            ${name}
                        </div>
                        <div class="store-address">
                            <span>${address[0]}</span>
                            <span>${address[1]}</span>
                        </div>
                        <div class="store-phone-number">
                        <i class="fas fa-phone-alt"></i>
                        ${phone}</div>
                    </div>
                    <div class="store-number-container">
                        <div class="store-number">
                            ${index+1}
                        </div>
                    </div>
                </div>
            </div>
        `
    });
    document.querySelector('.stores-list').innerHTML = storesHtml;
}


function showStoresMarkers(stores) {
    var bounds = new google.maps.LatLngBounds();
    stores.forEach(function(store, index){
        var latlng = new google.maps.LatLng(
            store.coordinates.latitude,
            store.coordinates.longitude);
        var name = store.name;
        var address = store.addressLines[0];
        var open = store.openStatusText;
        var openClose = store.open;
        var day = store.dayName;
        var hours = store.schedule.hours;
        var phone = store.phoneNumber;
        bounds.extend(latlng);
        createMarker(latlng, name, address, open, openClose, day, hours, phone, index);
    })
    map.fitBounds(bounds);
}


function createMarker(latlng, name, address, open, openClose, day, hours, phone, index) {
    var html = `
    <div class="marker-container">
        <div class="marker-top">
            <div class="marker-location">${name}</div>
            <div class="marker-status">${open}</div>
        </div>
        <div class"marker-bottom">
            <div class="marker-adress">
                <div class="circle">
                    <i class="fas fa-location-arrow"></i>
                </div>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=${name}" target="_blank">${address}</a>
            </div>
            <div class="marker-phone-number">
                <div class="circle">
                    <i class="fas fa-phone-alt"></i>
                </div>
                    <a href="skype:${phone}?call">${phone}</a>


              </div>
          </div>
        </div>  `;
        var image = {
        url: 'store.png'}
    var marker = new google.maps.Marker({
        icon: image,
      map: map,
      position: latlng,
    });
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.setContent(html);
      infoWindow.open(map, marker);
    });
    markers.push(marker);
}
