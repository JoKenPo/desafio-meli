'use client';

import { usePathname, useRouter } from 'next/navigation';
import { AcceptedLanguages } from '@/services/i18n.config';

const locales: AcceptedLanguages[] = ['pt-BR', 'en', 'es'];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as AcceptedLanguages;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  const currentLocale = pathname.split('/')[1] as AcceptedLanguages;

  return (
    <select
      value={currentLocale}
      onChange={handleChange}
      className="border rounded px-2 py-1 text-sm"
    >
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
