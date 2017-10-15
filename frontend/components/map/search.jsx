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
          <h5>Click Map to Add Acivity!</h5>
          <ActivityMap
            events={this.props.events}
            updateFilter={this.props.updateFilter}
            singleEvent={false}
          />
        </div>
        <div className="right-half">
        <EventMapIndex events={this.props.events} />
        </div>
      </div>
    );
  }
}

export default Search;
