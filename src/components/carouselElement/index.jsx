import React from 'react'
import { CarouselElementStyles } from './styles'

const CarouselElement = ({img, text, keyEl}) => {
    return (
        <CarouselElementStyles key={keyEl}>
            <img src={img} alt="Imagem" />
            <p>{text}</p>
        </CarouselElementStyles>
    )
}

export default CarouselElement