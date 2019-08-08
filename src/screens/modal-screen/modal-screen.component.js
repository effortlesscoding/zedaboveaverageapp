import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Container, Button } from './modal-screen.styled-components';

const tosText = ['Our TOS Below'];

for (let i = 0; i < 20; i++) {
  tosText.push('Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum');
}

export const ModalScreen = (props) => {
  return (
    <Container>
      <ScrollView>
        <View>
          {tosText.map((text, key) => <Text key={key}>{text}</Text>)}
        </View>
      </ScrollView>
      <Button onPress={() => props.navigation.goBack()} >Done</Button>
    </Container>
  );
};