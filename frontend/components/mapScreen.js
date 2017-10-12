import React from 'react';
import { Text, View, Button} from 'react-native';
import EventShow from './eventShowScreen';

class MapScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        username: "NoNe"
      }
    };
  }
  componentDidMount(){
    this.getUser();
  }

  render() {
    // Allows for navigation to a different screen. Can be passed as a callback for the onPress function of the button
    const { navigate } = this.props.navigation;
    const { username } = this.state.user;
    return (
      <View>
        <Text>This is the map screen!</Text>
        <Text>Username: { username }</Text>
        <Button
            onPress={() => navigate('EventShow', {event: 'mapping'})}
            title="Event Details"
          />
      </View>
    );
  }
}

export default MapScreen;
