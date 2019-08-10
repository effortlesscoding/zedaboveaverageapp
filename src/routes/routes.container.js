import {
  createAppContainer, createStackNavigator, createDrawerNavigator
} from 'react-navigation';
import { LoginScreenComponent } from '../screens/login-screen/login-screen.component';
import { DashboardScreenComponent } from '../screens/dashboard-screen/dashboard-screen.component';
import { ModalScreen } from '../screens/modal-screen/modal-screen.component';

const homeStack = createStackNavigator({
  dashboardHome: DashboardScreenComponent,
}, {
  backBehavior: 'initialRoute',
  initialRouteName: 'dashboardHome',
  headerMode: 'screen',
});

const dashboardStack = createDrawerNavigator(
  {
    home: homeStack,
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);

const mainStack = createStackNavigator(
  {
    login: { screen: LoginScreenComponent },
    dashboard: { screen: dashboardStack, },
  },
  {
    backBehavior: 'initialRoute',
    initialRouteName: 'login',
    headerMode: 'none',
  }
);

const rootStack = createStackNavigator(
  {
    root: { screen: mainStack, },
    modal: { screen: ModalScreen, },
  },
  {
    initialRouteName: 'root',
    mode: 'modal',
    headerBackTitleVisible: false,
    headerMode: 'none',
  }
)

export const AppRoutes = createAppContainer(rootStack);
