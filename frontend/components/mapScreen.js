import React from 'react';
import { Text, View, Button} from 'react-native';
import EventShow from './eventShowScreen';
import config from './config'

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
  /* MOVE THIS TO EXPORT FUNCTION FILE */
  async getUser(){
    const ipAddress = config.ip;

    try {
      const user = await fetch(`${ipAddress}/api/session`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username: 'tester',
            password: '123456'
          }
        })
      });
      var data = await user.json()


      this.setState({ user: data })
  } catch (e) {
    console.log(e)
    throw e;
  }
}

  render() {
    // Allows for navigation to a different screen. Can be passed as a callback for the onPress function of the button
    const { navigate } = this.props.navigation;
    const { username } = this.state.user
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
