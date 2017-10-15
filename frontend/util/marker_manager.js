class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};
  }

  // Activity is referring to an event in this file.

  updateMarkers(events){
    const eventsObject = {};
    events.forEach(event => {
      eventsObject[event.id] = event;
    });

      events
      .filter(event => !this.markers[event.id])
      .forEach(newEvent=> this.createMarkerFromEvent(newEvent, this.handleClick));
    Object.keys(this.markers)
      .filter(eventId => !eventsObject[eventId])
      .forEach((eventId) => this.removeMarker(this.markers[eventId]));
  }


  createMarkerFromEvent(event) {
    const position = new google.maps.LatLng(event.lat, event.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      eventId: event.id
    });
    const contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            `<h1 id="firstHeading" class="firstHeading">${event.activity}</h1>`+
            '<div id="bodyContent">'+
            `<p> ${event.description}</p>` +
            '</div>'+
            '</div>';
    const infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', () => (infowindow.open(this.map, marker)));
    this.markers[marker.eventId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.eventId].setMap(null);
    delete this.markers[marker.eventId];
  }
}

export default MarkerManager;
