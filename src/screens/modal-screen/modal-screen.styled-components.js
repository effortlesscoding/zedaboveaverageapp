import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';

export const Container = styled.View`
  height: 100%;
  background-color: #efefef;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding-top: 80px;
`;

const ButtonView = styled.TouchableOpacity`
  width: 100%;
  background-color: #f19737;
  color: #ffffff;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const Button = (props) => (
  <ButtonView onPress={props.onPress}>
    <Text>{props.children}</Text>
  </ButtonView>
);