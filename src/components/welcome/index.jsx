import React from 'react'
import { WelcomeStyles } from './styles'
import ImgLogo from '../../assets/images/misc/logo.svg'
import ImgNext from '../../assets/images/misc/next.svg'

export const Welcome = () => {
    return (
        <WelcomeStyles>
            <div className="content">
                <img src={ImgLogo} alt="Trakto" />

                <h1>Pedro, aproveite<br />o Premium. 🎉</h1>

                <p>
                Tenha acesso ao nosso banco de imagens, templates,
                ilustrações e remoções de fundo de forma ilimitada.
                </p>

                <a href="https://dashboard.trakto.io/auth/register">
                    <span>Começar agora</span>
                    <img src={ImgNext} alt="Começar" />
                </a>
            </div>
        </WelcomeStyles>
    )
}
