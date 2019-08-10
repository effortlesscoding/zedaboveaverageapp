import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const bgImage = require('./assets/bg.jpeg');
const logo = require('./assets/droplet.png');

const ScrollviewContainer = styled.ScrollView`
  height: 100%;
  width: 100%;
`;

export const Container = (props) => {
  if (Dimensions.get('window').height <= 555) {
    return (
      <ScrollviewContainer>
        <LinearGradient
          start={{x: 0.0, y: 1}} end={{x: 0.5, y: 0.35}}
          colors={['#0dd3c3', '#3a548d']}
          style={{
            height: '100%',
            padding: 24,
            paddingTop: 80,
            top: 0,
            left: 0,
          }}
        >
          {props.children}
        </LinearGradient>
      </ScrollviewContainer>
    )
  }
  return (
    <LinearGradient
      start={{x: 0.0, y: 1}} end={{x: 0.5, y: 0.35}}
      colors={['#0dd3c3', '#3a548d']}
      style={{
        height: '100%',
        padding: 24,
        paddingTop: 80,
        top: 0,
        left: 0,
      }}
    >
      {props.children}
    </LinearGradient>
  );
}

export const BackgroundImage = styled.Image.attrs({ source: bgImage })`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const AuthInputWrapper = styled.View`
  background-color: rgb(58, 84, 141);
  margin-top: 16px;
`;

const AuthInputField = styled.TextInput.attrs({ placeholderTextColor: 'rgba(255, 255, 255, .25)', })`
  padding: 8px;
  width: 100%;
  color: #fff;
  font-size: 16px;
  padding: 20px 16px;
`;

export const AuthInput = (p) => (
  <AuthInputWrapper>
    <AuthInputField {...p} />
  </AuthInputWrapper>
);


const AuthButtonWrapper = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 32px;
  font-size: 16px;
  padding: 20px 16px;
  margin-top: 16px;
`;

const AuthButtonText = styled.Text`
  color: rgb(47, 70, 121);
  text-align: center;
`;

export const AuthButton = (p) => (
  <AuthButtonWrapper {...p}>
    <AuthButtonText>{p.children}</AuthButtonText>
  </AuthButtonWrapper>
);

export const LogoWrapper = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 48px;
  padding-bottom: 48px;
`;

export const LogoImage = styled.Image.attrs({ source: logo, resizeMode: 'contain' })`
  width: 48px;
  height: 67px;
  margin-bottom: 24px;
`;

export const LogoSlogan = styled.Text`
  font-size: 16px;
  color: white;
`;
