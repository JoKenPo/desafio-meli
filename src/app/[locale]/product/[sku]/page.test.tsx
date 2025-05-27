import { render, screen } from '@testing-library/react';
import ProductPage from './page';
import * as productsService from '@/services/products';

const mockProduct = [{
  id: '1',
  title: 'Test Product',
  price: 100,
  discount: 10,
  installments: {
    amount: 3,
    value: 30
  },
  tags: ['tag1', 'tag2'],
  rating: {
    value: 4.5,
    count: 100
  },
  images: {
    full: ['image1.jpg', 'image2.jpg'],
    preview: ['image1-preview.jpg', 'image2-preview.jpg']
  },
  color: 'Black',
  variations: [{
    sku: '1',
    name: 'Test Product',
    primaryImage: 'image1.jpg'
  }],
  ram: '8GB',
  storage: '256GB',
  description: ['Description line 1', 'Description line 2'],
  seller: {
    name: 'Test Seller',
    logo: 'logo.jpg'
  },
  suggestions: ['Suggestion 1', 'Suggestion 2']
}];

jest.mock('@/services/products', () => ({
  getProduct: jest.fn((id) => { return mockProduct[id] }),
}));

describe('ProductPage', () => {

  beforeEach(() => {
    (productsService.getProduct as jest.Mock).mockResolvedValue(mockProduct);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render product details', async () => {
    const jsx = await ProductPage({ params: { sku: '1' } });
    render(jsx);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('Test Seller')).toBeInTheDocument();
  });

  it('should call getProduct with correct sku', async () => {
    const jsx = await ProductPage({ params: { sku: '1' } });
    render(jsx);

    expect(productsService.getProduct).toHaveBeenCalledWith('1');
  });
});
