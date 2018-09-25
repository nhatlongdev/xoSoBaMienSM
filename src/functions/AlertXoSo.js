// packages
// packages
import {BackHandler} from 'react-native';
import {Alert} from 'react-native';
import RNExitApp from 'react-native-exit-app';
const exitAlert = () => {
  Alert.alert(
    'Xổ số 98',
    'Bạn có muốn thoát khỏi ứng dụng xổ số 98 không?', [{
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
    }, {
        text: 'OK',
        onPress: () => RNExitApp.exitApp()
    }, ], {
        cancelable: false
    }
 )
 return true;
};
export {exitAlert};