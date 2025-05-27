import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {
  acceptedLanguages,
  defaultLanguage,
  headerName,
  initializeI18n,
  type Resource,
} from './i18n.config';

// Mock i18next
jest.mock('i18next', () => ({
  use: jest.fn().mockReturnThis(),
  init: jest.fn().mockResolvedValue({ undefined }),
  addResourceBundle: jest.fn(),
  changeLanguage: jest.fn().mockResolvedValue(undefined),
}));

describe('i18n configuration', () => {
  const mockResources: Resource = {
    'pt-BR': { translation: { key: 'valor' } },
    'en': { translation: { key: 'value' } },
    'es': { translation: { key: 'valor' } },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should have correct accepted languages', () => {
    expect(acceptedLanguages).toEqual(['pt-BR', 'en', 'es']);
  });

  test('should have correct header name', () => {
    expect(headerName).toBe('x-i18next-current-language');
  });

  test('should have correct default language from browser', () => {
    Object.defineProperty(window, 'navigator', {
      value: { language: 'en-US' },
      writable: true,
    });
    expect(defaultLanguage).toBe('en');
  });

  test('should initialize i18n with correct configuration', async () => {
    await initializeI18n('en', mockResources);

    expect(i18n.use).toHaveBeenCalledWith(initReactI18next);
    expect(i18n.init).toHaveBeenCalledWith({
      resources: mockResources,
      lng: 'en',
      fallbackLng: 'pt-BR',
      defaultNS: 'translation',
      ns: ['translation'],
      interpolation: {
        escapeValue: false,
      },
      returnNull: false,
    });
  });

  test('should handle initialization without resources', async () => {
    await initializeI18n('es');
    expect(i18n.init).toHaveBeenCalledWith(
      expect.objectContaining({
        lng: 'es',
        fallbackLng: 'pt-BR',
        defaultNS: 'translation',
        ns: ['translation'],
        interpolation: {
          escapeValue: false,
        },
        returnNull: false,
      })
    );
  });

  test('should not call changeLanguage during initialization', async () => {
    await initializeI18n('en', mockResources);
    expect(i18n.changeLanguage).not.toHaveBeenCalled();
  });
});