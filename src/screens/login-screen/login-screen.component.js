import React, { useState, } from 'react';
import { withLoading } from '../enhancers/with-loading/with-loading.enhancer';
import { Alert, } from 'react-native';
import { Container, AuthInput, AuthButton, LogoImage, LogoSlogan, LogoWrapper, } from './login-screen.styled-components';
import { authenticationService } from 'root/services/api/authentication.service';

export const LoginScreenComponent = withLoading((props) => {
  const [state, setState ] = useState({ username: '', password: '' });
  const { username, password } = state;

  const handleLogin = () => {
    props.setIsLoading(true);
    authenticationService.login({ username, password }).then((data) => {
      props.setIsLoading(false);
      props.navigation.push('dashboard');
    }).catch(e => {
      props.setIsLoading(false);
      setTimeout(() => Alert.alert(e.message), 0);
    });
  };
  return (
    <Container>
      <LogoWrapper>
        <LogoImage />
        <LogoSlogan >Effortless Coding</LogoSlogan>
      </LogoWrapper>
      <AuthInput value={username} placeholder="Username" onChangeText={(username) => setState({ ...state, username, })}  />
      <AuthInput value={password} placeholder="Password" onChangeText={(password) => setState({ ...state, password })} secureTextEntry />
      <AuthButton onPress={handleLogin} >Sign In</AuthButton>
    </Container>
  );
});