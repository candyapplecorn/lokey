import React from 'react';
import EventMapIndexItem from 'react';

class EventMapIndex extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillReceiveNewProps(newProps){
    this.props = newProps;
  }

  events() {
    const events = this.props.events.map (event =>
      <EventMapIndexItem
      event = {event}
      key = {event.id}
      />
    );

    return events;
  }

  render(){
    return(
      <div>
        <h1>Activities: </h1>
        {this.events()}
      </div>
    );
  }
}

export default EventMapIndex;
