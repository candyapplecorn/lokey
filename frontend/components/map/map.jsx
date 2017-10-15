import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

class ActivityMap extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    const map = this.refs.map;

    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    if (this.props.singleEvent) {
      this.props.getEvent(this.props.eventId);
    }else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.events);
    }
  }

  componentDidUpdate() {
    if (this.props.singleEvent) {
      const targetEventKey = Object.keys(this.props.events)[0];
      const targetEvent = this.props.events[targetEventKey];
      this.MarkerManager.updateMarkers([targetEvent]);
    }else {
      this.MarkerManager.updateMarkers(this.props.events);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = {lat: event.lat, lng: event.lng};
      this.handleClick(coords);
    });
  }

  handleMarkerClick(event) {
      this.props.history.push(`/events/${event.id}`);
    }

  handleClick(coords) {
    this.props.history.push({
      pathname: '/',
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  render() {
    return (
      <div style={{width: 500, height: 500}}
        id='map'
        ref="map">
      </div>
    );
  }
}

export default ActivityMap;
