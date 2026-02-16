import { getProductById } from "@/services/product";
import { errorResponse, successResponse } from "@/lib/apiResponse";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const numericId = Number(id);

    if (isNaN(numericId) || numericId <= 0) {
      return errorResponse("Invalid product id", 400);
    }

    const product = await getProductById(numericId);

    return successResponse(product);

  } catch (error: unknown) {
    if (error instanceof Error) {
  
      if (error.message === "PRODUCT_NOT_FOUND") {
        return errorResponse("Product not found", 404);
      }
  
      return errorResponse("Internal Server Error", 500);
    }
  
    return errorResponse("Internal Server Error", 500);
  }
}



