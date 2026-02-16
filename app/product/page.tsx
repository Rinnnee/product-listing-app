"use client"

import { useState } from "react"
import ProductCard from "@/components/productCard/ProductCard"
import { useProducts } from "@/hooks/useProduct"
import { useDebounce } from "@/hooks/useDebounce"
import { Product } from "@/types/product"
import ProductCardSkeleton from "@/components/productCard/ProductCardSkeleton"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import EmptyState from "@/components/EmptyState"

export default function ProductsList() {
    const [search, setSearch] = useState("")
    const debouncedSearch = useDebounce(search, 500)
    const { product, loading } = useProducts(debouncedSearch)

    return (
        <>
            <div className="flex flex-col md:flex-row gap-5 justify-between py-6">
                <h1 className="font-display text-3xl font-bold tracking-tight ">
                    Discover Products
                </h1>
                <div className="relative w-full sm:max-w-xs">
                    <Search
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <Input
                        type="search"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        className="pl-9 rounded-full"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 items-stretch">
                {loading ? (
                    Array.from({ length: 8 }).map((_, i) => (
                        <ProductCardSkeleton key={i} />
                    ))
                ) : product?.length === 0 ? (
                    <div className="col-span-full ">
                        <EmptyState
                            variant="empty"
                        />
                    </div>
                ) : (
                    product?.map((item: Product) => (
                        <ProductCard key={item.id} {...item} />
                    ))
                )}
            </div>
        </>
    )
}
