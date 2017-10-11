import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

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

export default EventFormScreen;
