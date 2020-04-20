import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: '#498fe2',
  secondary: '#417ec1',
  backgroundPrimary: '#dce9f8',
  backgroundSecondary: '#ecf3fd',
  subtleText: '#9a9a9a',
};

export const Theme: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
