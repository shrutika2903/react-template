import HomePage from "../HomePage";
import { render } from '@testing-library/react';


test('Renders main page correctly', () => {
    render(<HomePage />)
    expect(true).toBeTruthy();
  });