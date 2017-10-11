import React from 'react';
import { View, TextInput, Header } from 'react-native';
import { styles } from '../stylesheets/stylesheet';


class LoginScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Welcome Back"
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={styles.loginscreen}>
        <TextInput
          style={{height: 40}}
          placeholder="Username"
          onChangeText={(text) => this.setState({username: text})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
        />
      </View>
    );
  }
}

export default LoginScreen;
