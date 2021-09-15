import React from 'react';
import { render, cleanup } from 'test-utils';
import App from './App';

describe('Card', () => {
  afterEach(cleanup);

  it('should render', () => {
    expect(() => render(<App />)).not.toThrow(new Error);
  });
});
