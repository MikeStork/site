import {render, screen, cleanup} from '@testing-library/react';
import About from '../About';

test('should render about component', ()=>{
    render(<About />);
    const Element = screen.getByTestId('about');
    expect(Element).toBeInTheDocument();
    expect(Element).toHaveTextContent('jajco');
    expect(Element).toHaveAttribute('data-testid');
})