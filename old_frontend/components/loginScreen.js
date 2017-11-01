import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../stylesheets/stylesheet';
import { getUser } from '../actions/session_actions';
import MainScreenNavigator from '../navigators';


class LoginScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Welcome Back"
  });

  constructor(props){
    super(props);
    this.state = {username: "", password: ""};
    this.state = {username: "", password: "", user: "none"};
    this.login = this.login.bind(this);
  }
  //
  //
  login() {
    const { navigate } = this.props.navigation;
    async getUser(this.state.username, this.state.password){
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
    //con//sole.log(e)
    throw e;
  }
}
  }


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
      <Button
        onPress={() => this.login()}
        title="Submit"
      />
      </View>
    );
  }
}

export default LoginScreen;
