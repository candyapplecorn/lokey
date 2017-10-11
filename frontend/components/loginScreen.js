import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../stylesheets/stylesheet';


class LoginScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Welcome Back"
  });

  // constructor(props){
  //   super(props);
  //   this.props.state = {username: "", password: ""}
  // }
  //
  //
  async login() {
    getUser(this.state.username, this.state.password)
  }


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
      <Button
        onPress={() => login()}
        title="Submit"
      />
      </View>
    );
  }
}

export default LoginScreen;
