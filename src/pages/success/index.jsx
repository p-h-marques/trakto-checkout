import React, {useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { SuccessStyles } from './styles'
import Context from '../../state/Context'

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
            Parabéns!
        </SuccessStyles>
    )
}

export default Success