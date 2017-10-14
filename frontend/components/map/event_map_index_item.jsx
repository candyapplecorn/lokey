import React from 'react';
import { withRouter } from 'react-router-dom';

// import EventShowContainer from '../event_show/event_show_container';

class EventMapIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const eventId = this.props.event.id;
    this.props.history.push(`/events/${eventId}`);
  }

  render() {
    const { description, activity } = this.props.event;
    return (
      <div
        className="bench-map-index-item"
        onClick={this.handleClick}
      >
        <div className="index-item-info">
          <span className="index-item-category">Activity:</span>
          <span className="index-item-copy">
            {activity}
          </span>
          <span className="index-item-category">Description:</span>
          <span className="index-item-copy">{description}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(EventMapIndexItem);
