import Image from 'next/image'
import React from 'react'

type ImageWrapProps = {
  src: string
  alt?: string
  paddingTop?: string
  borderRadius?: string
  sizes?: string
  priority?: boolean
  quantity?: number
  className?: React.ComponentProps<'div'>['className']
}

const ImageWrap = ({
  src,
  alt,
  paddingTop = '56.25%',
  borderRadius,
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
  className = '',
  quantity = 75,
}: ImageWrapProps) => {
  return (
    <div
      className={`relative h-auto overflow-hidden bg-cover ${className}`}
      style={{ backgroundPosition: '50% 50%', paddingTop: paddingTop }}
    >
      <Image
        fill
        src={src}
        alt={alt || ''}
        style={{ borderRadius, objectFit: 'cover' }}
        sizes={sizes}
        priority={priority}
        quality={quantity}
      />
    </div>
  )
}

export default ImageWrap
