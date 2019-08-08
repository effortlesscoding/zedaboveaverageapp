import * as React from 'react';
import { Text } from 'react-native';
import { Container } from './dashboard-screen.styled-components';

export const DashboardScreenComponent = (props) => {
  return (
    <Container>
      <Text>Welcome to the dashboard</Text>
    </Container>
  );
};