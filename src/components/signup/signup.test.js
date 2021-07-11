import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Signup from './signup';

describe("testing signup page", () => {
    test("All input fields should not be empty", () => {
        render(<Signup />);
        const email = screen.getByLabelText('Email');
        const password = screen.getByLabelText('Password');
        const repassword = screen.getByLabelText('Re-enter Password');
    
        expect(email).not.toBeNull();
        expect(password).not.toBeNull();
        expect(repassword).not.toBeNull();
    })
    
    test("Passwords should match", () => {
        render(<Signup />)
        const password1 = screen.getByTestId('Password', { value : 'ak'});
        const password2 = screen.getByTestId('rePassword', { value : 'ak'});
        const msg = screen.getByTestId('msg');
        expect(password1).toBe(password2);
        expect(msg).toBeInTheDocument();   
    })
})