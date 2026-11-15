import { afterEach, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './state/store';

afterEach(() => vi.unstubAllGlobals());

test('shows the user table and adds a username', () => {
  vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, json: async () => [] })));

  render(<Provider store={store}><App /></Provider>);

  expect(screen.getByRole('columnheader', { name: 'Username' })).toBeInTheDocument();
  fireEvent.change(screen.getByPlaceholderText('New username'), {
    target: { value: 'bar' },
  });
  fireEvent.click(screen.getByRole('button', { name: 'Add username' }));
  expect(screen.getByText('bar')).toBeInTheDocument();
});
