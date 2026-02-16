import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import ProductRating from "@/components/ProductRating"
import { ProductReview } from "@/types/product"

type Props = {
  review: ProductReview
}

export default function ProductReviewCard({ review }: Props) {
  return (
    <div className="flex items-start gap-4 rounded-lg border bg-card p-5">
      <Avatar className="h-10 w-10 shrink-0">
        <AvatarFallback>
          {review.reviewerName
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">
            {review.reviewerName}
          </span>

          <span className="text-xs text-muted-foreground">
            {new Date(review.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>

        <ProductRating value={review.rating} />

        <p className="text-sm text-muted-foreground">
          {review.comment}
        </p>
      </div>
    </div>
  )
}
