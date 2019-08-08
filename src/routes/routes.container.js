import {
  createAppContainer, createStackNavigator,
} from 'react-navigation';
import { LoginScreenComponent } from '../screens/login-screen/login-screen.component';
import { DashboardScreenComponent } from '../screens/dashboard-screen/dashboard-screen.component';

const routesStack = createStackNavigator(
  {
    login: { screen: LoginScreenComponent },
    dashboard: { screen: DashboardScreenComponent, },
  },
  {
    backBehavior: 'initialRoute',
    headerMode: 'none',
    initialRouteName: 'login',
  }
);

export const AppRoutes = createAppContainer(routesStack);
