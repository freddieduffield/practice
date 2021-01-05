import {render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders empty search bar', () => {
    render(<App />);
    const heading = screen.getByRole('heading', {name: 'Beerg🥽ggles'})
    const searchBar = screen.getByRole('textbox', {name: 'search'});
    expect(searchBar).toBeInTheDocument();
  });
  // Todo
  it('allow a user type and submit a query', () => {});
});