import React, { useEffect } from 'react';
import { Text, Button } from 'react-native';
import { Container } from './dashboard-screen.styled-components';

export const DashboardScreenComponent = (props) => {
  const goToTos = () => {
    props.navigation.push('modal');
  };
  useEffect(() => {
    goToTos();
  });
  return (
    <Container>
      <Text>Welcome to the dashboard</Text>
      <Button title="View TOS" onPress={goToTos} />
    </Container>
  );
};