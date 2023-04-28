
export const getData = async () => {
  const response = await fetch('/api/data.json');
  return response.json();
};