/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {isWeb} from './src/utils/Utils';

AppRegistry.registerComponent(appName, () => App);

isWeb
  ? AppRegistry.runApplication(appName, {
      initialProps: {},
      rootTag: document.getElementById('app-root'),
    })
  : null;
