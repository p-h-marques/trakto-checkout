import React, {useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { SuccessStyles } from './styles'
import Context from '../../state/Context'
import ImgLogo from '../../assets/images/misc/logo.svg'
import ImgNext from '../../assets/images/misc/next.svg'

const Success = () => {
    const {state} = useContext(Context)
    let history = useHistory()

    /**
     * Redirecionando para a tela de checkout,
     * caso o objeto de estado global ainda
     * não tenha identificado o pagamento
     */
    useEffect(()=>{
        if(state.step === 'checkout') history.push('/checkout')
    }, [state])

    return (
        <SuccessStyles>
            <div className="feedback">
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
            </div>

            <div className="images">
                ai papai
            </div>
        </SuccessStyles>
    )
}

export default Success