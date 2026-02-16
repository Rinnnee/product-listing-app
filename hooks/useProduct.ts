"use client";

import { Product } from "@/types/product";
import { useEffect, useState, useRef } from "react";

export function useProductById(id: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchProductById() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/products/${id}`, {
          cache: "no-store",
        });

        const json = await res.json();

        if (!res.ok) {
          throw new Error(json.error);
        }

        setProduct(json.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProductById();
  }, [id]);

  return { product, loading, error };
}

export function useProducts(search: string) {
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cacheRef = useRef<Record<string, Product[]>>({});

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        setError(null);

        const key = search || "all"; 

        if (cacheRef.current[key]) {
          setProduct(cacheRef.current[key]);
          setLoading(false);
          return;
        }

        setLoading(true);

        const res = await fetch(
          `/api/products?search=${encodeURIComponent(search)}`,
          {
            signal: controller.signal,
          }
        );

        const json = await res.json();

        if (!res.ok) {
          throw new Error(json.error || "Failed to fetch");
        }

        const products = json.data.products;
        cacheRef.current[key] = products;

        setProduct(products);

      } catch (err: unknown) {
        if ((err as any).name === "AbortError") return;

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();

    return () => controller.abort();

  }, [search]);

  return { product, loading, error };
}
