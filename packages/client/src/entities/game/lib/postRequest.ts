export const postRequest = async (url: string, formData: any) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(formData),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Произошла ошибка при запросе к ${url}`);
  }

  const contentType = response.headers.get('Content-Type');

  if (contentType && contentType.includes('application/json')) {
    return response.json();
  } else {
    return response.text();
  }
};
