import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { LoginPage } from '..';

const mockData = {
    userName: 'SmithWilson',
    password: 'password123'
}

describe('LoginPage', () => {
  test('should display error messages for invalid inputs', () => {
    render(<LoginPage userName='smithWilson' password='password@123' />);

    // Select form elements
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByText('Login');

    // Enter invalid inputs
    fireEvent.change(usernameInput, { target: { value: 'user' } });
    fireEvent.change(passwordInput, { target: { value: 'pass' } });

    // Trigger form submission
    fireEvent.click(loginButton);

    // Check error messages
    expect(screen.getByText('Username should be at least 6 characters long')).toBeInTheDocument();
    expect(screen.getByText('Password should be 8 characters long')).toBeInTheDocument();
  });

  test('should submit form with valid inputs', () => {
    render(<LoginPage  userName={mockData.userName} password={mockData.password}  />);

    // Select form elements
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByText('Login');

    // Enter valid inputs
    fireEvent.change(usernameInput, { target: { value: 'validuser' } });
    fireEvent.change(passwordInput, { target: { value: 'validpassword' } });

    // Trigger form submission
    fireEvent.click(loginButton);

  });
});
