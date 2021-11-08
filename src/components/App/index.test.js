import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './index';
import { config } from 'config';

test('renders title', () => {
  act(()=>{
    render(<App />);
  });
  const title = config.app.title;
  const el = screen.getByText(title);
  expect(el).toBeInTheDocument();
});
