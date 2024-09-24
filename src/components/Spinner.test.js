import { render, screen } from '@testing-library/react';
import Spinner from './Spinner'; // Assuming this is the correct path

describe("Spinner", () => {
    test("renders correctly", () => {
        render(<Spinner />); // No need for act here

        const outerContainer = screen.getByTestId("outer-container");
        expect(outerContainer).toBeInTheDocument();
    });
});
