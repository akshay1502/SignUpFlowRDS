import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Signup from './signup';
import {
    createHistory,
    createMemorySource,
    LocationProvider,
  } from '@reach/router'

function renderWithRouter(
    ui,
    { route = '/', history = createHistory(createMemorySource(route)) } = {}
  ) {
    return {
      ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
      // adding `history` to the returned utilities to allow us
      // to reference it in our tests (just try to avoid using
      // this to test implementation details).
      history,
    }

}
describe("testing signup page", () => {
    // jest.mock('react-router', () => {
    //     withRouter(<Signup />)
    // })

    test("All input fields should not be empty", () => {
        
        renderWithRouter(<Signup />)

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