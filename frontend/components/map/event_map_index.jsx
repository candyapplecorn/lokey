import React from 'react';
import EventMapIndexItem from 'react';

const EventMapIndex = ({events}) => {
  if (events === undefined){
    events = [];
  }
  return(
    <div>
      <h1>Activities: </h1>
      {events.map (event =>
        <EventMapIndexItem
        event = {event}
        key = {event.id}
        />
      )}
    </div>
  );
};

export default EventMapIndex;
