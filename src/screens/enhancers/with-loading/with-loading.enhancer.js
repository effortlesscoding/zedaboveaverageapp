import React, { useState, setState } from 'react';
import { Modal, ActivityIndicator, Text } from 'react-native';
import { ModalView } from './with-loading.styled-components';

export const withLoading = (Component) => (props) => {
  const [{ isLoading }, setState ] = useState({ isLoading: false, });
  console.log('isLoading::', useState({ isLoading: false, }));
  return (
    <>
      <Component
        {...props}
        isLoading={isLoading}
        setIsLoading={(isLoading) => setState({ isLoading })}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={isLoading}
        onRequestClose={() => {
          setState({ isLoading: false });
        }}>
        <ModalView testID="loading_indicator">
          <ActivityIndicator />
          <Text>Loading...</Text>
        </ModalView>
      </Modal>
    </>
  );
};
