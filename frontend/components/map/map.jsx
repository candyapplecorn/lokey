import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    const map = this.refs.map;

    this.map = new google.maps.Map(map, mapOptions);

  }
  render() {
    return (
      <div style={{width: 500, height:500}}
        id='map'
        ref="map">
      </div>
    );
  }
}

export default Map;
