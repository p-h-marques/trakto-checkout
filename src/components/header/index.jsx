import React from 'react'
import {HeaderStyles} from './styles'
import ImgLogo from '../../assets/images/header/logo.svg'
import ImgBaloon from '../../assets/images/header/baloon.svg'
import ImgSupport from '../../assets/images/header/support.svg'

const Header = () => {
    return (
        <HeaderStyles>
            <div className="container">
                <div className="logo">
                    <img src={ImgLogo} alt="Trakto" />
                </div>
                <div className="support">
                    <img src={ImgBaloon} alt="Ajuda" />
                    <span>Precisa de ajuda?</span>
                    <img src={ImgSupport} alt="Suporte" />
                </div>
            </div>
        </HeaderStyles>
    )
}

export default Header