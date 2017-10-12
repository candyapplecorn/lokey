import MapScreen from './components/mapScreen';
import EventIndexScreen from './components/eventIndexScreen';
import EventFormScreen from './components/eventFormScreen';
import ProfileScreen from './components/profileScreen';
import EventShowScreen from './components/eventShowScreen';
import LoginScreen from './components/loginScreen';
import NewAccountScreen from './components/createAccount';
import { StackNavigator, TabNavigator } from 'react-navigation';

const MainScreenNavigator = TabNavigator({
  Map: { screen: MapScreen },
  EventIndex: { screen: EventIndexScreen },
  CreateEvent: { screen: EventFormScreen },
  Profile: { screen: ProfileScreen }
});

// Similar to our switch statement for routes
export const SimpleApp = StackNavigator({
  Login: { screen: LoginScreen },
  NewAccount: { screen: NewAccountScreen },
  Home: { screen: MainScreenNavigator },
  EventShow: { screen: EventShowScreen }
});