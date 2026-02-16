
import Link from "next/link"
import Image from "next/image"
import { Product } from "@/types/product"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import React from "react"
import ProductRating from "../ProductRating"

export type ProductCardProps = Pick<
    Product,
    "id" | "title" | "price" | "brand" | "category" | "thumbnail" | "rating" | "discountPercentage"
>
function ProductCard({
    id,
    title,
    price,
    thumbnail,
    brand,
    category,
    rating,
    discountPercentage,
}: ProductCardProps) {
    const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(2)

    return (
        <>
            <Link href={`/product/${id}`}>
                <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative pt-0">
                    <div className="relative aspect-square overflow-hidden bg-[#f2f0ed]">
                        <Image
                            src={thumbnail}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 50vw,(max-width: 1024px) 33vw,25vw"
                        />
                        <Badge className="absolute left-3 top-3 bg-amber-300 text-accent-foreground">
                            {Math.floor(discountPercentage)}%
                        </Badge>
                    </div>
                    <CardHeader className="flex flex-col ">

                        <div className=" flex items-center w-full gap-2">
                            {brand && (
                                <CardDescription className="line-clamp-1">
                                    {brand}
                                </CardDescription>
                            )}

                            <Badge
                                variant="secondary"
                                className={!brand ? "ml-0" : "ml-auto"}
                            >
                                {category}
                            </Badge>
                        </div>
                        <div className="flex flex-col flex-1">
                            <CardTitle className="line-clamp-1 ">{title}</CardTitle>
                        </div>
                        <div className=" flex ">
                        <ProductRating value={rating} />
                        <span className="text-sm font-medium text-muted-foreground pl-1">
                                {rating.toFixed(1)}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-foreground">
                                ${discountedPrice}
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                                ${price}
                            </span>
                        </div>
                    </CardHeader>
                </Card>
            </Link>
        </>
    )
}

export default React.memo(ProductCard)