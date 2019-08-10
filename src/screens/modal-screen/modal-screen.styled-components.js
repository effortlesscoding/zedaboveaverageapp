import React from 'react';
import styled from 'styled-components';

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
  background-color: #5070b6;
  color: #ffffff;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #ffffff;
`;

export const Button = (props) => (
  <ButtonView {...props}>
    <ButtonText>{props.children}</ButtonText>
  </ButtonView>
);