import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import {connect} from 'react-redux';

import HomeNavigationService from './HomeNavigation.service';

import {rootRoutes, ROOT_NAV_HOME} from './HomeRoutes'


export const RootStack = createStackNavigator(rootRoutes,{initialRouteName: ROOT_NAV_HOME,});


class HomeNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleRef = (navigatorRef: any): void => {
    HomeNavigationService.setHomeNavigator(navigatorRef);
  }

  render() { 
    return ( <RootStack
          ref={this.handleRef}
        /> );
  }
}

// HomeNavigation.propTypes = {};

const mapStateToProps = (state) => ({});
 
// export default connect(mapStateToProps)(HomeNavigation);
export default HomeNavigation;
