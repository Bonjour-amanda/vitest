import { beforeEach, describe, expect, test, it } from "vitest";
import { fireEvent, waitFor } from '@testing-library/react';
import HideAndShow from "../components/HideAndShow";
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { render, screen, userEvent } from '../utils/test-utils';

describe('Hide and Show Component', () => {

    beforeEach(() => {
        render(<HideAndShow title='Hide and Show Testing'><h4>Content</h4></HideAndShow>)
    })
    
    test('Hide and show component snapshot test', () => {
        const component = render(<HideAndShow title='Hide and Show Testing'><h4>Content</h4></HideAndShow>);
      
        expect(component).toMatchSnapshot()
    })

    it('should show title', () => {
        expect(screen.getByText(/Hide and Show Testing/i)).toBeInTheDocument();
    })


    test("should not show the content at the start", () => {

        expect(screen.queryByText(/Content/i)).not.toBeInTheDocument();
    })

    test("should show the content on accordion click",async () => {

        const title = screen.getByText(/Visible/i);
        fireEvent.click(title)

        expect(await screen.findByText(/Content/i)).toBeInTheDocument();
    })
})
