import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Product from './Product';

const mockProduct = {
  id: '1',
  title: 'Test Product',
  price: 100,
  discount: 10,
  installments: {
    amount: 3,
    value: 30
  },
  color: 'Black',
  ram: '8GB',
  storage: '256GB',
  description: ['Description line 1', 'Description line 2'],
  seller: {
    name: 'Test Seller',
    logo: 'logo.jpg'
  },
  suggestion: ['Suggestion 1', 'Suggestion 2']
};

describe('Product Component', () => {
  it('renders product title', () => {
    render(<Product product={mockProduct} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('renders product price', () => {
    render(<Product product={mockProduct} />);
    expect(screen.getByText('$100')).toBeInTheDocument();
  });

  it('renders product description', () => {
    render(<Product product={mockProduct} />);
    expect(screen.getByText('Description line 1')).toBeInTheDocument();
    expect(screen.getByText('Description line 2')).toBeInTheDocument();
  });

  it('renders seller information', () => {
    render(<Product product={mockProduct} />);
    expect(screen.getByText('Test Seller')).toBeInTheDocument();
  });
});
