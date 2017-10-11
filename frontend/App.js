import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class EventIndexScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Events for User</Text>
          <Button
              onPress={() => navigate('EventShow', {event: 'indexing'})}
              title="Event Details"
            />
      </View>
    );
  }
}

class EventFormScreen extends React.Component {
  render() {
    return(
      <View>
        <Text>This is the Event Form Screen!</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Activity"
            onChangeText={(text) => this.setState({activity: text})}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Location"
            onChangeText={(text) => this.setState({location: text})}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Description"
            onChangeText={(text) => this.setState({description: text})}
          />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>This is the Profile Screen with a list of user specific interests.</Text>
      </View>
    );
  }
}

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

const MainScreenNavigator = TabNavigator({
  Map: { screen: MapScreen },
  EventIndex: { screen: EventIndexScreen },
  CreateEvent: { screen: EventFormScreen },
  Profile: { screen: ProfileScreen }
});

// Similar to our switch statement for routes
const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  EventShow: { screen: EventShowScreen }
});

export default class App extends React.Component {
  render() {
    return (
      <SimpleApp />
    );
  }
}
