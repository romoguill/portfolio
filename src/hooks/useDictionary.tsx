import { useEffect, useState } from 'react';
import useLocale from './useLocale';
import { getDictionary } from '../app/[lang]/dictionaries';

function useDictionary() {
  const locale = useLocale();
  const [dictionary, setDictionary] = useState<Awaited<
    ReturnType<typeof getDictionary>
  > | null>(null);

  useEffect(() => {
    getDictionary(locale).then((dict) => setDictionary(dict));
  }, [locale]);

  return dictionary;
}
export default useDictionary;
