import React from 'react';
import { HeaderLeftButton } from './header/header-left-button.component';
import { DashboardContainer } from './dashboard-screen.styled-components';

export const withNavigation = (Component) => {
  const enhancedComponent = (p) => (
    <DashboardContainer>
      <Component {...p} />
    </DashboardContainer>
  );
  enhancedComponent.navigationOptions = (props) => ({
    headerStyle: {
      backgroundColor: '#0dd3c3',
    },
    headerLeft: (_p) => {
      return (<HeaderLeftButton onPress={() => props.navigation.openDrawer()} />);
    }
  });
  return enhancedComponent;
}