// import react-testing methods
import { render, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
// the component to test
import Otpscreen from './otpscreen';

test('show otp input fields', () => {
    const { container } = render(<Otpscreen />);
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
})

test('submit OTP', () => {
    render(<Otpscreen />);
    const submit = screen.getByTestId('submitotp');
    expect(submit).toHaveBeenCalled(1);
})