import React from 'react'
import { CarouselElementStyles } from './styles'

const CarouselElement = ({img, text, key}) => {
    return (
        <CarouselElementStyles key={key}>
            <img src={img} alt="Imagem" />
            <p>{text}</p>
        </CarouselElementStyles>
    )
}

export default CarouselElement