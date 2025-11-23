// Required for CSS to work on Expo Web.
import './strict.css';
// Required for Fast Refresh to work on Expo Web
import '@expo/metro-runtime';

import { LogBox } from 'react-native';
import { registerRootComponent } from 'expo';
import App from './App';

if (LogBox != null) {
    LogBox.ignoreLogs([
        // /React Strict DOM: .*/,
        // /Failed prop type: .*/,
    ]);
}

registerRootComponent(App);