import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductImages from './ProductImages';

const mockImages = {
  full: ['image1.jpg', 'image2.jpg'],
  preview: ['image1-preview.jpg', 'image2-preview.jpg']
};

describe('ProductImages', () => {
  it('renders without crashing', () => {
    const { container } = render(<ProductImages images={mockImages} />);
    expect(container).toBeTruthy();
  });

  it('displays the correct number of images', () => {
    const { getAllByRole } = render(<ProductImages images={mockImages} />);
    const images = getAllByRole('img');
    expect(images.length).toBe(2);
  });
});
