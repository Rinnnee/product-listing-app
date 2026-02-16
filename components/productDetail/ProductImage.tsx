import Image from "next/image"

type Props = {
  image: string
  title: string
}

export default function ProductImage({ image, title }: Props) {
  return (
    <div className="relative h-80 md:h-auto">
      <Image
        src={image}
        alt={title}
        fill
        className="object-contain rounded-xl"
      />
    </div>
  )
}
