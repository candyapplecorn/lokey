import React from 'react';

import EventMapIndex from './event_map_index';
import ActivityMap from './map';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveNewProps(newProps){
    this.props = newProps;
  }

  render() {
    return(
      <div className="user-pane">
        <div className="left-half">
          <h5>Click Map to Add an Activity!</h5>
          <ActivityMap
            events={this.props.events}
            updateFilter={this.props.updateFilter}
            getActivities={this.props.getActivities}
            singleEvent={false}
            activities={this.props.activities}
            createEvent={this.props.createEvent}
            currentUser={this.props.currentUser}
          />
        </div>
      </div>
    );
  }
}

export default Search;
