const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `Error ${response.status}: ${errorBody}`
    );
  }

  return response.json();
}
