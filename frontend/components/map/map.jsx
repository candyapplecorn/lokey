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
    this.registerListeners();

  }

  componentDidUpdate() {
    // this.MarkerManager.updateMarkers();
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter(bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = {lat: event.lat, lng: event.lng};
      this.handleClick(coords);
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
