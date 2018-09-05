import { AppRegistry } from 'react-native';
import App from './src/App';

//ADD THIS LINE TO FIX WARNING ISMOUNT
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('TestProps', () => App);
