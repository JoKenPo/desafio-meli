import { render } from '@testing-library/react';
import {
  addLinkAnchors,
  escapeHTML,
  link,
  applyBreakLine,
  formatMessage
} from './formatText';

describe('formatText utilities', () => {
  describe('escapeHTML', () => {
    it('should escape HTML special characters', () => {
      expect(escapeHTML('&<>"\'')).toBe('&<>"&#39;');
    });

    it('should return unchanged text when no special chars', () => {
      expect(escapeHTML('plain text')).toBe('plain text');
    });
  });

  describe('addLinkAnchors', () => {
    it('should convert URLs to anchor tags', () => {
      const input = 'Visit https://example.com';
      const expected = 'Visit <a href="https://example.com">https://example.com</a>';
      expect(addLinkAnchors(input)).toBe(expected);
    });

    it('should handle multiple URLs', () => {
      const input = 'Links: https://one.com and http://two.org';
      const output = addLinkAnchors(input);
      expect(output).toContain('https://one.com');
      expect(output).toContain('http://two.org');
    });
  });

  describe('link', () => {
    it('should escape text when no searchedKey', () => {
      const input = 'Text with <script>';
      expect(link(input, null)).toContain('&lt;script&lt;');
    });

    it('should not escape text when searchedKey exists', () => {
      const input = 'Text with <key>';
      expect(link(input, 'key')).toBe(input);
    });
  });

  describe('applyBreakLine', () => {
    it('should convert newlines to br tags', () => {
      const { container } = render(applyBreakLine('line1\nline2'));
      expect(container.innerHTML).toContain('<span>line1<br>line2<span>');
    });

    it('should handle bold formatting', () => {
      const { container } = render(applyBreakLine('*bold* text'));
      expect(container.innerHTML).toContain('<b>bold</b>');
    });
  });

  describe('formatMessage', () => {
    it('should apply all formatting', () => {
      const input = 'Visit https://example.com\n*click*';
      const { container } = render(formatMessage(input, null));
      const html = container.innerHTML;
      expect(html).toContain('https://example.com');
      expect(html).toContain('<b>click</b>');
    });
  });
});
