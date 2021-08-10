import {render, screen, cleanup} from '@testing-library/react';
import Navbar from '../Navbar';

test('should render navbar component', ()=>{
    render(<Navbar />);
    const todoElement = screen.getByTestId('Navbar');
    expect(todoElement).toHaveAttribute('data-testid');
    expect(todoElement).toBeInTheDocument();
})