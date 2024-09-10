export async function wpquery<T>({
  query,
  variables = {},
}: {
  query: string;
  variables?: object;
}): Promise<T> {
  try {
    const res = await fetch(import.meta.env.VITE_BASE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const result = await res.json();

    if (result.errors) {
      console.error("GraphQL Errors:", result.errors);
      throw new Error("GraphQL query failed");
    }

    return result.data;
  } catch (error) {
    console.error("Error in wpquery:", error);
    throw error;
  }
}
