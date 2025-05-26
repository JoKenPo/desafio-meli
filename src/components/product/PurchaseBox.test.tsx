import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PurchaseBox from './PurchaseBox';

const mockProduct = {
  id: '1',
  title: 'Test Product',
  price: 100,
  discount: 10,
  installments: {
    amount: 3,
    value: 30
  },
  images: {
    full: ['image1.jpg', 'image2.jpg'],
    preview: ['image1-preview.jpg', 'image2-preview.jpg']
  },
  color: 'Black',
  ram: '8GB',
  storage: '256GB',
  description: ['Description line 1', 'Description line 2'],
  seller: {
    name: 'Test Seller',
    logo: 'logo.jpg'
  },
  suggestions: ['Suggestion 1', 'Suggestion 2']
};

describe('PurchaseBox Component', () => {
  it('renders price information', () => {
    render(<PurchaseBox product={mockProduct} />);
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('$90')).toBeInTheDocument(); // After 10% discount
  });

  it('renders installment information', () => {
    render(<PurchaseBox product={mockProduct} />);
    expect(screen.getByText('3 installments of $30')).toBeInTheDocument();
  });

  it('renders add to cart button', () => {
    render(<PurchaseBox product={mockProduct} />);
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });
});
