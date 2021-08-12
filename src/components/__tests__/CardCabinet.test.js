import {render, screen, cleanup} from '@testing-library/react';
import CardCabinet from '../CardCabinet';

test('should render CardCabinet component', ()=>{
    render(<CardCabinet />);
    const Element = screen.getByTestId('CardCabinet');
    expect(Element).toBeInTheDocument();
    expect(Element).toHaveAttribute('data-testid');
})