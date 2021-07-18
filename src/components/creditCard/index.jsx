import React, { useCallback, useContext } from 'react'
import { CreditCardStyles } from './styles'

import Input from '../input'
import ImgCard from '../../assets/images/input/card.svg'

import Context from '../../state/Context'
import * as actions from '../../state/actions'
import * as validators from '../../utils/validators'

const CreditCard = () => {
    const { state, dispatch } = useContext(Context)

    /**
     * Atualiza as informações do cartão do usuário,
     * com base nas devidas validações disponíveis
     */
    const handleUpdateCardInfo = useCallback((type, value) => {
        let validatedData = validators.getValidator(type)(value)

        if(validatedData !== state.creditCard[type]){
            dispatch(actions.updateCardInfo(type, validatedData))
        }
    }, [state.creditCard])

    return (
        <CreditCardStyles className="border grid">
            <div className="big">
                <Input
                    code="cardName"
                    label="Nome no Cartão"
                    placeholder="Digite seu nome como está no cartão"
                    value={state.creditCard.name}
                    onChange={e => {
                        handleUpdateCardInfo('name', e.target.value)
                    }}
                />
            </div>

            <div className="big">
                <Input
                    code="cardNumber"
                    label="Dados do Cartão"
                    placeholder="Número do Cartão"
                    placeholderImg={ImgCard}
                    value={state.creditCard.number}
                    onChange={e => {
                        handleUpdateCardInfo('number', e.target.value)
                    }}
                />
            </div>

            <div className="shortl">
                <Input
                    code="cardExpiration"
                    label="Validade"
                    placeholder="MM/AA"
                    value={state.creditCard.expiration}
                    onChange={e => {
                        handleUpdateCardInfo('expiration', e.target.value)
                    }}
                />
            </div>

            <div className="shortr">
                <Input
                    code="cardSecurityNumber"
                    label="CCV"
                    placeholder="***"
                    value={state.creditCard.securityCode}
                    onChange={e => {
                        handleUpdateCardInfo('securityCode', e.target.value)
                    }}
                />
            </div>
        </CreditCardStyles>
    )
}

export default CreditCard
