import { AppRegistry } from 'react-native';
import App from './src/App';

//ADD THIS LINE TO FIX WARNING ISMOUNT
import { YellowBox } from 'react-native';
console.disableYellowBox = true;

AppRegistry.registerComponent('TestProps', () => App);
