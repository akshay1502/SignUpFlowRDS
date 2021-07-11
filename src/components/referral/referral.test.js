import { render, screen } from '@testing-library/react';
// import Referral from './referral.js';

describe.skip("check referral component", () => {
    test("input for referral", () => {
        // eslint-disable-next-line react/jsx-no-undef
        render(<Referral />);
        const input = screen.getByTestId('referral');
        expect(input).not.toBeNull();
    })

    test("submit should be disabled", () => {
        // eslint-disable-next-line react/jsx-no-undef
        render(<Referral />);
        const button = screen.getByTestId('submit');
        const input = screen.getByTestId('referral');
        expect(button).toBeDisabled();
        expect(input).not.toBeNull();
        expect(button).not.toBeDisabled();
    })

    test("skip referral code", () => {
        // eslint-disable-next-line react/jsx-no-undef
        render(<Referral />);
        const skip = screen.getByTestId('skip');
        expect(skip).toBeInTheDocument();
    })
})