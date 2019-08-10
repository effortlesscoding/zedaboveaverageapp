import React, { useEffect } from 'react';
import { AppRoutes } from './routes/routes.container';
import { Container } from './application.styled-components';
import SplashScreen from 'react-native-splash-screen'

console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

export const Application = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Container>
      <AppRoutes />
    </Container>
  );
};
