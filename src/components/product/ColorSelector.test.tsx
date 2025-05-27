import { render, screen, fireEvent } from '@testing-library/react';
import ColorSelector from './ColorSelector';
import { useRouter, usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn()
}));

describe('ColorSelector', () => {
  const mockPush = jest.fn();
  const mockPathname = '/en/product/prod-1';

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush
    });
    (usePathname as jest.Mock).mockReturnValue(mockPathname);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders color options', () => {
    render(<ColorSelector
      options={[
        { sku: 'prod-1', name: 'Red', primaryImage: '/red.jpg' },
        { sku: 'prod-2', name: 'Blue', primaryImage: '/blue.jpg' }
      ]}
      active="prod-1"
    />);

    expect(screen.getByAltText('Red')).toBeInTheDocument();
    expect(screen.getByAltText('Blue')).toBeInTheDocument();
  });

  it('shows active state for selected color', () => {
    render(<ColorSelector
      options={[
        { sku: 'prod-1', name: 'Red', primaryImage: '/red.jpg' }
      ]}
      active="prod-1"
    />);

    const redButton = screen.getByAltText('Red').closest('button');
    expect(redButton).toHaveClass('border-BLUE');
  });

  it('navigates to new SKU when clicked', () => {
    render(<ColorSelector
      options={[
        { sku: 'prod-2', name: 'Blue', primaryImage: '/blue.jpg' }
      ]}
      active="prod-1"
    />);

    fireEvent.click(screen.getByAltText('Blue'));
    expect(mockPush).toHaveBeenCalledWith('/en/product/prod-2');
  });

  it('handles empty options', () => {
    render(<ColorSelector options={[]} active="" />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
