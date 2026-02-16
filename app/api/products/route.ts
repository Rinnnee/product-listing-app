import { getProducts } from "@/services/product";
import { errorResponse, successResponse } from "@/lib/apiResponse";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || undefined;

    const products = await getProducts(search);

    return successResponse(products);

  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.message === "PRODUCT_NOT_FOUND") {
        return errorResponse("Product not found", 404);
      }
    }

    return errorResponse("Internal Server Error", 500);
  }
}
