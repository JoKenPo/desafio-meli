import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StoreInfo from './StoreInfo';

const mockProduct = {
  seller: {
    name: 'Test Store',
    logo: 'logo.jpg'
  }
};

describe('StoreInfo Component', () => {
  it('renders store name', () => {
    render(<StoreInfo product={mockProduct} />);
    expect(screen.getByText(/Test Store/)).toBeInTheDocument();
  });

  it('renders official store text', () => {
    render(<StoreInfo product={mockProduct} />);
    expect(screen.getByText(/OFFICIAL_STORE/)).toBeInTheDocument();
  });

  it('renders visit store button', () => {
    render(<StoreInfo product={mockProduct} />);
    expect(screen.getByRole('button', { name: /VISIT_STORE/ })).toBeInTheDocument();
  });
});
