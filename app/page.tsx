"use client"

import ProductsList from "./product/page"

export default function Home() {

  return (
    <>
      <div className="px-6 md:px-10 lg:px-18 py-8">
        <ProductsList />
      </div>
    </>
  )
}
