import styled from 'styled-components'
import colors from '../../styles/colors'

export const CarouselStyles = styled.div`
    background-color: ${colors.brand.trakto};

    @media(max-width: 767px){
        display: none;
    }

    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;

    section.swiper-container {
        width: 600px;

        @media (max-width: 1399px) {
            width: 500px;
        }

        @media (max-width: 1199px) {
            width: 400px;
        }

        @media (max-width: 991px) {
            width: 300px;
        }

        ul {
            padding-inline-start: 0;

            li {
                list-style: none;
            }
        }


        div.swiper-pagination {
            span.swiper-pagination-bullet-active {
                opacity: 100% !important;
                width: 40px !important;
            }

            span.swiper-pagination-bullet {
                height: 11px;
                width: 11px;
                margin: 0px 6px;
                border-radius: 4px;
                background-color: ${colors.neutral.white};
                opacity: 50%;
            }
        }

        .swiper-container-horizontal > .swiper-pagination-bullets {
            bottom: 0px !important;
        }
    }
`