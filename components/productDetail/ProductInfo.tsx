import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Truck, Shield, RotateCcw, Package } from "lucide-react"
import { Product } from "@/types/product"
import ProductRating from "../ProductRating"

type Props = {
    product: Product
}

export default function ProductInfo({ product }: Props) {
    const discountedPrice = product.price - (product.price * product.discountPercentage) / 100

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="capitalize">
                    {product.category}
                </Badge>
                <p>{product.brand}</p>
            </div>

            <h1 className="text-2xl font-bold lg:text-3xl">
                {product.title}
            </h1>
            <div className="flex items-center gap-2">
                <ProductRating value={product.rating} />
                <span className="text-sm font-medium text-foreground">
                    {product.rating.toFixed(1)}
                </span>
                <span className="text-sm text-muted-foreground">
                    ({product.reviews.length} reviews)
                </span>
            </div>

            <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold">
                    ${discountedPrice.toFixed(2)}
                </span>
                <span className="text-lg line-through text-muted-foreground">
                    ${product.price}
                </span>
                <Badge className="bg-amber-400 text-black">
                    Save {Math.floor(product.discountPercentage)}%
                </Badge>
            </div>

            <p className="text-sm text-muted-foreground">
                {product.description}
            </p>

            <Separator />

            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-medium text-foreground">Shipping</p>
                        <p className="text-xs text-muted-foreground">
                            {product.shippingInformation}
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-medium text-foreground">Warranty</p>
                        <p className="text-xs text-muted-foreground">
                            {product.warrantyInformation}
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <RotateCcw className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-medium text-foreground">Returns</p>
                        <p className="text-xs text-muted-foreground">
                            {product.returnPolicy}
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <Package className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-medium text-foreground">Stock</p>
                        <p className={`text-xs font-medium ${product.stock > 10
                            ? "text-emerald-600"
                            : product.stock > 0
                                ? "text-amber-600"
                                : "text-destructive"
                            }`}

                        >
                            {product.availabilityStatus} ({product.stock} units)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
