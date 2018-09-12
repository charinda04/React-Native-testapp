import {RootStack} from './index';
import {
  ROOT_NAV_HOME,
  ROOT_NAV_COUNTER,
  ROOT_NAV_TODOLIST,
} from './HomeRoutes.js';
import HomeNavigationService from './HomeNavigation.service';

// export const navigateBack = (navigation: any) => {
//   return navigation.goBack();
// };

// export const navigateBackSpecifiedScreen = (navigation: any, screenKey?: any) => {
//   return navigation.goBack(screenKey);
// };

// export const navigateToHomeScreen = () => {
//   return RootStack
//     .router
//     .getActionForPathAndParams(`/${ROOT_NAV_HOME}`);
// };

export const navigateToCounterScreen = (params?: navParams) => {
    HomeNavigationService.navigate(ROOT_NAV_COUNTER, params);
};

export const navigateToToDoListScreen = (params?: navParams) => {
    HomeNavigationService.navigate(ROOT_NAV_TODOLIST, params);
};

// export const navigateToToDoListScreen = (navParams?: any) => {
//   return RootStack
//     .router
//     .getActionForPathAndParams(`/${ROOT_NAV_MYPLAN}`, navParams);
// };
