export function formatData(data) {
  if (!data) return '';

  const date = new Date(data);

  return date.toLocaleDateString();
}