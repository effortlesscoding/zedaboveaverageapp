import * as React from 'react';
import { AppRoutes } from './routes/routes.container';
import { Container } from './application.styled-components';

export const Application = () => {
  return (
    <Container>
      <AppRoutes />
    </Container>
  );
};
