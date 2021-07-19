import React from 'react'
import { CarouselStyles } from './styles'
import ImgCarousel from '../../assets/images/misc/carousel.png'
import CarouselElement from '../carouselElement'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Pagination, Autoplay])

export const Carousel = () => {
    const slides = [
        {
            img: ImgCarousel,
            text: 'Utilize designs premium sem moderação.'
        },{
            img: ImgCarousel,
            text: 'Utilize fontes premium em seus projetos.'
        },{
            img: ImgCarousel,
            text: 'Filtros Profissionais.'
        },
    ]
    return (
        <CarouselStyles>
            <Swiper
                tag="section"
                wrapperTag="ul"
                slidesPerView={1}
                pagination={{clickable: true}}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
                {
                    slides.map((slide, key) => (
                        <SwiperSlide tag="li" key={key}>
                            <CarouselElement
                                img={slide.img}
                                text={slide.text}
                                keyEl={key}
                            />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </CarouselStyles>
    )
}
