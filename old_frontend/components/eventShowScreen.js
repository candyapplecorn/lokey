import React from 'react';
import { Text, View } from 'react-native';

class EventShowScreen extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>This is the {params.event} specific show page!</Text>
      </View>
    );
  }
}

export default EventShowScreen;
