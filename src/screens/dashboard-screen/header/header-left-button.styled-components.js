import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Octicons';

const ButtonView = styled.TouchableOpacity`
  margin-left: 16;
`;

const ButtonText = styled.Text``;

export const HeaderButton = (p) => (
  <ButtonView {...p}>
    <Icon
      name='three-bars' 
      size={16} 
      color='#ffffff'
    />
  </ButtonView>
);