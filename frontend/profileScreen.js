import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>This is the Profile Screen with a list of user specific interests.</Text>
      </View>
    );
  }
}

export default ProfileScreen;
