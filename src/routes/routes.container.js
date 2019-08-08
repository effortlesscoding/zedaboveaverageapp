import {
  createAppContainer, createStackNavigator,
} from 'react-navigation';
import { LoginScreenComponent } from '../screens/login-screen/login-screen.component';
import { DashboardScreenComponent } from '../screens/dashboard-screen/dashboard-screen.component';
import { ModalScreen } from '../screens/modal-screen/modal-screen.component';

const mainStack = createStackNavigator(
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

const rootStack = createStackNavigator(
  {
    root: { screen: mainStack, },
    modal: { screen: ModalScreen, },
  },
  {
    initialRouteName: 'root',
    mode: 'modal',
    headerMode: 'none',
  }
)

export const AppRoutes = createAppContainer(rootStack);
