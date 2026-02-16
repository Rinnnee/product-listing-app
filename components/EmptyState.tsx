"use client"

import Link from "next/link"
import { AlertCircle, SearchX, PackageX, ArrowLeft } from "lucide-react"

type Variant = "404" | "empty" | "error"

interface EmptyStateProps {
  variant?: Variant
  title?: string
  description?: string
  showAction?: boolean
  actionHref?: string
  actionLabel?: string
  fullHeight?: boolean
}

const variantConfig: Record<
  Variant,
  {
    icon: React.ReactNode
    defaultTitle: string
    defaultDescription: string
  }
> = {
  "404": {
    icon: <SearchX size={56} />,
    defaultTitle: "Page not found",
    defaultDescription:
      "The page you are looking for does not exist or has been moved.",
  },
  empty: {
    icon: <PackageX size={56} />,
    defaultTitle: "No data available",
    defaultDescription:
      "There is currently no data to display.",
  },
  error: {
    icon: <AlertCircle size={56} />,
    defaultTitle: "Something went wrong",
    defaultDescription:
      "An unexpected error occurred. Please try again later.",
  },
}

export default function EmptyState({
  variant = "empty",
  title,
  description,
  showAction = false,
  actionHref = "/",
  actionLabel = "Back to homepage",
  fullHeight = true,
}: EmptyStateProps) {
  const config = variantConfig[variant]

  return (
    <div
      className={`flex flex-col items-center justify-center text-center px-6 ${
        fullHeight ? "min-h-[90vh]" : "py-20"
      }`}
    >
      <div className="text-muted-foreground mb-4">
        {config.icon}
      </div>

      <h2 className="text-2xl font-bold mb-2">
        {title ?? config.defaultTitle}
      </h2>

      <p className="text-muted-foreground mb-6 max-w-md">
        {description ?? config.defaultDescription}
      </p>

      {showAction && (
        <Link
          href={actionHref}
          className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg hover:opacity-80 transition"
        >
          <ArrowLeft size={16} />
          {actionLabel}
        </Link>
      )}
    </div>
  )
}
