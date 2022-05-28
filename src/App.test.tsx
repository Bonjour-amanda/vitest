import { describe, expect, it } from 'vitest';
import App from './App';
import { render, screen, userEvent } from './utils/test-utils';

describe('Sample App vitest', () => {
    it('the title is visible', () => {
        render(<App />);
        expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument();
    });

    it('should increment the count when icon (+) clicked', async() => {
        render(<App />);
        userEvent.click(screen.getByText('+'));
        expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument();
    } )

    it('should decrement the count when icon (-) clicked', async() => {
        render(<App />);
        userEvent.click(screen.getByText('-'));
        expect(await screen.findByText(/count is: -1/i)).toBeInTheDocument();
    } )
})