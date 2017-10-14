import React from 'react';

import EventIndex from './event_map_index';
import ActivityMap from './map';

const Search = ({ events, updateFilter }) => (
  <div className="user-pane">
    <div className="left-half">
      <h5>Click Map to Add Activity!</h5>
      <ActivityMap
        events={events}
        updateFilter={updateFilter}
        singleEvent={false}
      />
    </div>
    <div className="right-half">
    <EventIndex events={events} />
    </div>
  </div>
);

export default Search;
