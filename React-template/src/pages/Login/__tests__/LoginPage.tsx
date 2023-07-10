import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { LoginPage } from '..';



describe('LoginPage', () => {
    test('should display error messages for invalid inputs', () => {
        render(<LoginPage />);

        // Select form elements
        const usernameInput = screen.getByLabelText('Username');
        const passwordInput = screen.getByLabelText('Password');
        const loginButton = screen.getByText('Login');

        // Enter invalid inputs
        fireEvent.change(usernameInput, { target: { value: 'user' } });
        fireEvent.change(passwordInput, { target: { value: 'pass' } });

        // Trigger form submission
        fireEvent.click(loginButton);

        const errorUserMessage = screen.getByText('Username should be at least 6 characters long');
        expect(errorUserMessage).toBeInTheDocument();
    });

    test('should submit form with valid inputs', () => {
        render(<LoginPage />);

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
