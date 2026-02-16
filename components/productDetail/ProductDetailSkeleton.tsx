import { Skeleton } from "@/components/ui/skeleton"

export default function ProductDetailSkeleton() {
  return (
    <div className="px-12 py-8 lg:px-32">

      <div className="grid md:grid-cols-2 gap-10">

        <div className="relative h-80 md:h-125">
          <Skeleton className="absolute inset-0 rounded-xl" />
        </div>

        <div className="flex flex-col gap-6">

          <div className="flex gap-3">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-24" />
          </div>

          <Skeleton className="h-8 w-3/4" />

          <div className="flex gap-4">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-6 w-16" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>

        </div>
      </div>

      <div className="mt-12 space-y-4">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-20 w-full rounded-lg" />
      </div>

    </div>
  )
}
