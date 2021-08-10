import {render, screen, cleanup} from '@testing-library/react';
import About from '../About';

test('should render about component', ()=>{
    render(<About />);
    const todoElement = screen.getByTestId('about');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('jajco');
    expect(todoElement).toHaveAttribute('data-testid');
})