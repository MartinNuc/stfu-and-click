import React from 'react';
import { Theme } from './Theme';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import store, { RootState, rootReducer } from '../store';
import { configureStore, DeepPartial } from '@reduxjs/toolkit';
import { Router } from 'react-router-dom';
import { createMemoryHistory, History } from 'history';

type EnhancedOptions = Parameters<typeof render>[1] & {
  initialState?: DeepPartial<RootState>;
  history?: History<any>,
  store?: typeof store;
};

type RenderResultWithStore = RenderResult & { store: typeof store };

const customRender = (
  ui: React.ReactElement,
  {
    initialState,
    history = createMemoryHistory(),
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    }),
    ...remainingOptions
  }: EnhancedOptions = {},
): RenderResultWithStore => ({
  store,
  ...render(ui, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <Router history={history}>
          <Theme>{children}</Theme>
        </Router>
      </Provider>
    ),
    ...remainingOptions,
  }),
});

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
