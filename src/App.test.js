import { render } from '@testing-library/react';
import {test} from "jest-snapshot/build/mock_serializer";
import React from 'react';

import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
