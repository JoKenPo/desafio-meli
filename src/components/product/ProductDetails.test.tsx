import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductDetails from './ProductDetails';

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

describe('ProductDetails Component', () => {
  it('renders product title', () => {
    render(<ProductDetails product={mockProduct} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('renders product price', () => {
    render(<ProductDetails product={mockProduct} />);
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('10% off')).toBeInTheDocument();
  });

  it('renders product specification', () => {
    render(<ProductDetails product={mockProduct} />);
    expect(screen.getByText('Black')).toBeInTheDocument();
    expect(screen.getByText('8GB')).toBeInTheDocument();
    expect(screen.getByText('256GB')).toBeInTheDocument();
  });

  it('renders product description', () => {
    render(<ProductDetails product={mockProduct} />);
    expect(screen.getByText('Description line 1')).toBeInTheDocument();
    expect(screen.getByText('Description line 2')).toBeInTheDocument();
  });
});
