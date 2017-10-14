class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  // Activity is referring to an event in this file.

  updateMarkers(activities){
    const activitiesObject = {};
    activities.forEach(activity => {
      activitiesObject[activity.id] = activity;
    });

      activities
      .filter(activity => !this.markers[activity.id])
      .forEach(newActivity => this.createMarkerFromActivity(newActivity, this.handleClick));

    Object.keys(this.markers)
      .filter(activityId => !activitiesObject[activityId])
      .forEach((activityId) => this.removeMarker(this.markers[activityId]));
  }


  createMarkerFromActivity(activity) {
    const position = new google.maps.LatLng(activity.coordinate.latitude, activity.coordinate.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      activityId: activity.id
    });

    this.markers[marker.activityId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.activityId].setMap(null);
    delete this.markers[marker.activityId];
  }
}

export default MarkerManager;
