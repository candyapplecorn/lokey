import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import EventShow from './eventShowScreen';
import { StackNavigator, TabNavigator } from 'react-navigation';

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

export default EventIndexScreen;
