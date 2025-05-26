import { t } from 'i18next';

export const getI18nBase = (base: string) => {
  return (path: string, options?: Record<string, string | number>) => {
    const i18nPath = `${base ? `${base}.` : ''}${path}`;
    return t(i18nPath, options);
  };
};