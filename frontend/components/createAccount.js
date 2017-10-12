import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../stylesheets/stylesheet';


class NewAccountScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Create an Account"
  });

  // constructor(props){
  //   this.props.state = {username: "", password: ""}
  // }


  // async newUser() {
  //   newUser(this.state.username, this.state.email, this.state.password)
  // }


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
          placeholder="Email"
          onChangeText={(text) => this.setState({email: text})}
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

export default NewAccountScreen;
