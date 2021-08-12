import {render, screen, cleanup} from '@testing-library/react';
import Navbar from '../Navbar';

test('should render navbar component', ()=>{
    render(<Navbar />);
    const Element = screen.getByTestId('Navbar');
    expect(Element).toHaveAttribute('data-testid');
    expect(Element).toBeInTheDocument();
})
test('navbar should be as wide as document', ()=>{
    render(<Navbar/> );
    const Element = screen.getByTestId('Navbar');
    expect(Element.style.width).toEqual(document.body.style.width);
})
test('should contain list of navigatory elements', ()=>{
    render(<Navbar/> );
    const Element = screen.getByTestId('Navbar');
    const ChildElement = Element.querySelector('ul');
    expect(Element).toContainElement(ChildElement);
    expect(ChildElement).toContainElement(ChildElement.querySelector('li'));
})