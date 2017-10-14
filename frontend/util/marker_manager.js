class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
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
    const position = new google.maps.LatLng(event.latitude, event.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      eventId: event.id
    });

    marker.addListener('click', () => this.handleClick(event));
    this.markers[marker.eventId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.eventId].setMap(null);
    delete this.markers[marker.eventId];
  }
}

export default MarkerManager;
