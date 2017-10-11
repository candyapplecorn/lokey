import MapScreen from './mapScreen';
import EventIndexScreen from './eventIndexScreen';
import EventFormScreen from './eventFormScreen';
import ProfileScreen from './profileScreen';
import EventShowScreen from './eventShowScreen';
import { StackNavigator, TabNavigator } from 'react-navigation';

const MainScreenNavigator = TabNavigator({
  Map: { screen: MapScreen },
  EventIndex: { screen: EventIndexScreen },
  CreateEvent: { screen: EventFormScreen },
  Profile: { screen: ProfileScreen }
});

// Similar to our switch statement for routes
export const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  EventShow: { screen: EventShowScreen }

});
