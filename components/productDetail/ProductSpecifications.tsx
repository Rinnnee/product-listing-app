import { Badge } from "@/components/ui/badge"
import { Product } from "@/types/product"

type Props = {
    product: Product
}

export default function ProductSpecifications({ product }: Props) {
    return (
        <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
                Specifications
            </h3>
            <div className="rounded-lg border border-border overflow-hidden">
                <table className="w-full text-sm">
                    <tbody>
                        <tr className="border-b border-border">
                            <td className="px-4 py-2.5 font-medium text-muted-foreground bg-secondary/50">
                                SKU
                            </td>
                            <td className="px-4 py-2.5 text-foreground">{product.sku}</td>
                        </tr>
                        <tr className="border-b border-border">
                            <td className="px-4 py-2.5 font-medium text-muted-foreground bg-secondary/50">
                                Weight
                            </td>
                            <td className="px-4 py-2.5 text-foreground">
                                {product.weight}g
                            </td>
                        </tr>
                        <tr className="border-b border-border">
                            <td className="px-4 py-2.5 font-medium text-muted-foreground bg-secondary/50">
                                Dimensions
                            </td>
                            <td className="px-4 py-2.5 text-foreground">
                                {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm
                            </td>
                        </tr>
                        <tr className="border-b border-border">
                            <td className="px-4 py-2.5 font-medium text-muted-foreground bg-secondary/50">
                                Min. Order
                            </td>
                            <td className="px-4 py-2.5 text-foreground">
                                {product.minimumOrderQuantity} units
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2.5 font-medium text-muted-foreground bg-secondary/50">
                                Tags
                            </td>
                            <td className="px-4 py-2.5">
                                <div className="flex flex-wrap gap-1.5">
                                    {product.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="text-xs capitalize bg-amber-300">
                                            {tag}
                                        </Badge>
                                    ))}

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
