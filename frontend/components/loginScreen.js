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
          style={styles.bigblue}
          placeholder="Username" placeholderTextColor="#e8f1f2"
          onChangeText={(text) => this.setState({username: text})}
        />
        <TextInput
          style={styles.bigblue}
          placeholder="Password" placeholderTextColor="#e8f1f2"
          onChangeText={(text) => this.setState({password: text})}
        />
      </View>
    );
  }
}

export default LoginScreen;
