import React from 'react'

const Img = ({src,alt}) => {
  return (
    <div>
        <picture>
            <img src={src} alt={alt}  loading='lazy'/>
        </picture>
    </div>
  )
}

export default Img