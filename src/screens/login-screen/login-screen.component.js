import React from 'react';
import { withLoading } from '../enhancers/with-loading/with-loading.enhancer';
import { Button } from 'react-native';
import { Container, AuthInput, AuthInputLabel } from './login-screen.styled-components';

export const LoginScreenComponent = withLoading((props) => {
  const handleLogin = () => {
    props.setIsLoading(true);
    setTimeout(() => {
      props.setIsLoading(false);
      props.navigation.push('dashboard');
    }, 2500);
  };
  return (
    <Container>
      <AuthInputLabel>Username:</AuthInputLabel>
      <AuthInput  />
      <AuthInputLabel>Password:</AuthInputLabel>
      <AuthInput secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </Container>
  );
});