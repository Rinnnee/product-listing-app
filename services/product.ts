export async function getProducts(search?: string) {
  const baseURL = process.env.BACKEND_URL;

  if (!baseURL) {
    throw new Error("BACKEND_URL is not defined");
  }

  const url = search
    ? `${baseURL}/products/search?q=${encodeURIComponent(search)}`
    : `${baseURL}/products`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("PRODUCT_NOT_FOUND");
    }
    throw new Error("FETCH_FAILED");
  }

  return res.json();
}

export async function getProductById(id: number) {
  const baseURL = process.env.BACKEND_URL;

  if (!baseURL) {
    throw new Error("BACKEND_URL not defined");
  }

  const res = await fetch(`${baseURL}/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("PRODUCT_NOT_FOUND");
    }
    throw new Error("FETCH_FAILED");
  }

  return res.json();
}
