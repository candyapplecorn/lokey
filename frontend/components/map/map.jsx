import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';
import Modal from 'react-modal';
import modalStyle from './modal_style';

class ActivityMap extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      lat: "",
      lng: "",
      activity: "",
      description: "",
    };
    this.props.getActivities();
    this.close = this.close.bind(this);
    this.options = this.options.bind(this);
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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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
      const coords = {lat: event.latLng.lat(), lng: event.latLng.lng()};
      this.handleClick(coords);
    });
  }

  handleClick(coords) {
    if (Object.keys(this.props.currentUser).length > 0){
      this.setState({modalIsOpen: true});
      this.setState({lat: coords.lat});
      this.setState({lng: coords.lng});
    }else{
      this.props.history.push("/sign-in");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent({
      lat: this.state.lat,
      lng: this.state.lng,
      activity: this.state.activity,
      description: this.state.description
    });
    const { north, south, east, west } = this.map.getBounds().toJSON();
    const bounds = {
      northEast: { lat: north, lng: east },
      southWest: { lat: south, lng: west } };
    this.props.updateFilter(bounds);
    this.close();
  }

  close() {
    this.setState({modalIsOpen: false});
  }

  options() {
    const activities = Object.values(this.props.activities).map(activity =>
    <option value={activity} key={activity}>{activity}</option>);
    return activities;
  }

  render() {
    const description = this.state.description;
    return (
      <div className="mapContainer">
        <div className="map"
          id='map'
          ref="map">
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="add-event-modal"
          style={modalStyle}
          onRequestClose={this.close}>
          <a className="close-modal" onClick={this.close}>x</a>
          <h1 className="modal-title">Add Event</h1>
          <form onSubmit={(e) => this.handleSubmit(e)} className="event-form">
            <label>Activity:
              <br></br>
              <select onChange={this.update('activity')}>
                <option disabled="true" selected="true">Please Select an Option</option>
                {this.options()}
              </select>
            </label>
            <br></br>
            <label>Description:
              <br></br>
              <textarea
                onChange={this.update('description')}
                value={description}>
                </textarea>
            </label>
            <br></br>
            <label>Latitude:
              <br></br>
              <input type="text" value={this.state.lat}
                onChange={this.update('lat')}></input>
            </label>
            <br></br>
            <label>Longitude:
              <br></br>
              <input type="text" value={this.state.lng}
                onChange={this.update('lng')}></input>
            </label>
            <br></br>
            <input className="submit" type="submit"></input>
          </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(ActivityMap);
