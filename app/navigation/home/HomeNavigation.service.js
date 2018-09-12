// @flow
import {NavigationActions} from 'react-navigation';

let _navigator;
type navParams = any;

function setHomeNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

function navigate(routeName: string, params: navParams = {}) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export default {
  navigate,
  setHomeNavigator,
};
