import React from 'react';
import { Text, View, Button} from 'react-native';
import EventShow from './eventShowScreen';

class MapScreen extends React.Component {
  render() {
    // Allows for navigation to a different screen. Can be passed as a callback for the onPress function of the button
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>This is the map screen!</Text>
        <Button
            onPress={() => navigate('EventShow', {event: 'mapping'})}
            title="Event Details"
          />
      </View>
    );
  }
}

export default MapScreen;
