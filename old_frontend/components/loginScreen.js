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
    this.login = this.login.bind(this);
  }
  //
  //
  login() {
    const { navigate } = this.props.navigation;
    getUser(this.state.username, this.state.password)
      .then((response) => {
        if (response.status !== 200){
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        response.json().then(function(data) {
          console.log(data);
          navigate('MainScreenNavigator')
        });
      })
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