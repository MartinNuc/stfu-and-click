import React, { FC, ReactElement, ComponentType } from 'react';
import { Theme } from './Theme';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';

const AllTheProviders: FC = ({ children }) => (
  <Provider store={store}>
    <Theme>{children}</Theme>
  </Provider>
);
const customRender = (
  ui: ReactElement,
  options: Omit<RenderOptions, 'queries'> = {},
): RenderResult =>
  render(ui, { wrapper: AllTheProviders as ComponentType, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
