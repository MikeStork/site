import {render, screen, cleanup} from '@testing-library/react';
import Banner from '../Banner';

test('should render banner component', ()=>{
    render(<Banner />);
    const Element = screen.getByTestId('Banner');
    const ChildElement = screen.getByTestId('BannerImg');
    expect(Element).toBeInTheDocument();
    expect(ChildElement).toBeInTheDocument();
    expect(Element).toHaveAttribute('data-testid');
    expect(ChildElement).toHaveAttribute('data-testid');
    expect(Element).toContainElement(ChildElement);
})