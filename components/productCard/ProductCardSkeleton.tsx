import {
    Card,
    CardHeader,
  } from "@/components/ui/card"
  import { Skeleton } from "@/components/ui/skeleton"
  
  export default function ProductCardSkeleton() {
    return (
      <Card className="pt-0">
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <Skeleton className="w-full h-full absolute inset-0 animate-pulse" />
        </div>
  
        <CardHeader className="flex flex-col gap-3">
  
          {/* Brand + Category */}
          <div className="flex justify-between w-full">
            <Skeleton className="h-4 w-20 animate-pulse" />
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>
  
          {/* Title */}
          <Skeleton className="h-5 w-3/4" />
  
          {/* Rating */}
          <Skeleton className="h-4 w-24" />
  
          {/* Price */}
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16" />
            
          </div>
  
        </CardHeader>
      </Card>
    )
  }
  