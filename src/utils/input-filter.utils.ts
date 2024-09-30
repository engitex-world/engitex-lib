export const removeAccents = (str: string) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const inputFilter = (value: string, search: string) => {
  const normalizedValue = removeAccents(value.toLowerCase());
  const normalizedSearch = removeAccents(search.toLowerCase());

  return normalizedValue.includes(normalizedSearch) ? 1 : 0;
};
