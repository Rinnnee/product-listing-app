"use client"
import Link from "next/link"
import ProductRating from "@/components/ProductRating"
import { useParams } from "next/navigation"
import { ProductReview } from "@/types/product"
import { useProductById } from "@/hooks/useProduct"
import ProductDetailSkeleton from "@/components/productDetail/ProductDetailSkeleton"

import { Separator } from "@/components/ui/separator"
import { ArrowLeft } from "lucide-react"
import ProductImage from "@/components/productDetail/ProductImage"
import ProductInfo from "@/components/productDetail/ProductInfo"
import ProductSpecifications from "@/components/productDetail/ProductSpecifications"
import ProductReviewCard from "@/components/productDetail/ProductReviewCard"
import EmptyState from "@/components/EmptyState"

export default function ProductDetail() {
    const params = useParams()
    const { product, loading, error } = useProductById(params.id as string)

    if (loading) return <ProductDetailSkeleton />
    if (!product || error) {
        return (
            <EmptyState
                variant="404"
                title="Product not found"
                description="The product you are looking for does not exist or has been removed."
                showAction
                actionLabel="Back to all products"
                actionHref="/"
            />
        )
    }
    
    const averageRating =
        product.reviews?.length
            ? product.reviews.reduce((sum, r) => sum + r.rating, 0) /
            product.reviews.length
            : 0

    return (
        <>
            <div className="px-12 py-8 lg:px-32">
                <Link
                    href="/"
                    className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                    <ArrowLeft size={16} />
                    Back to Products
                </Link>
                <div className="grid grid-rows-1 md:grid-cols-2 gap-10">
                    <ProductImage
                        image={product.images?.[0]}
                        title={product.title} />
                    <div className="flex flex-col gap-4">
                        <ProductInfo product={product} />
                        <Separator />
                        <ProductSpecifications product={product} />
                    </div>

                </div>

                <section className="mt-12">
                    <div className="flex flex-col sm:flex-row  sm:items-center justify-between  mb-6">
                        <h2 className="font-display text-xl font-bold text-foreground">
                            Customer Reviews
                        </h2>
                        <div className="flex items-center gap-2">
                            <ProductRating value={averageRating} />
                            <span className="text-sm font-medium text-foreground">
                                {averageRating.toFixed(1)}
                            </span>
                            <span className="text-sm text-muted-foreground">
                                ({product.reviews.length} reviews)
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {product.reviews.map((review: ProductReview, index: number) => (
                            <ProductReviewCard key={index} review={review} />

                        ))}
                    </div>
                </section>
            </div >

        </>
    )
}