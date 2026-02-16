"use client"

import Rating from "@mui/material/Rating"

export default function ProductRating({ value }: { value: number }) {
  return (
    <Rating
      value={value}
      precision={0.5}
      size="small"
      readOnly
    />
  )
}
