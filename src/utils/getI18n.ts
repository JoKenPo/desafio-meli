import { getI18nBase } from "./getI18nString";

const ROOT = '';
const PRODUCT = 'PRODUCT';

const I18N_PATHS_MAP = {
  root: ROOT,
  product: PRODUCT
} as const

export function getI18n(
  rootPath: keyof typeof I18N_PATHS_MAP,
): (path: string, options?: Record<string, string | number>) => string {
  return getI18nBase(I18N_PATHS_MAP[rootPath]);
}
