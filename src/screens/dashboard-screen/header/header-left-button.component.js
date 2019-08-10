import React from 'react';
import { HeaderButton } from './header-left-button.styled-components';

export const HeaderLeftButton = (p) => (
  <HeaderButton onPress={p.onPress} />
);