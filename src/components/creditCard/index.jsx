import React, { useCallback, useContext } from 'react'
import { CreditCardStyles } from './styles'

import Input from '../input'
import ImgCard from '../../assets/images/input/card.svg'

import Context from '../../state/Context'
import * as actions from '../../state/actions'
import * as validators from '../../utils/fieldValidators'

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
                    hasError={state.creditCard.errors.includes('name')}
                    onChange={e => {
                        if(state.creditCard.errors.includes('name')){
                            dispatch(
                                actions.removeError('creditCard', 'name', state.creditCard.errors)
                            )
                        }

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
                    hasError={state.creditCard.errors.includes('number')}
                    onChange={e => {
                        if(state.creditCard.errors.includes('number')){
                            dispatch(
                                actions.removeError('creditCard', 'number', state.creditCard.errors)
                            )
                        }

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
                    hasError={state.creditCard.errors.includes('expiration')}
                    onChange={e => {
                        if(state.creditCard.errors.includes('expiration')){
                            dispatch(
                                actions.removeError('creditCard', 'expiration', state.creditCard.errors)
                            )
                        }

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
                    hasError={state.creditCard.errors.includes('securityCode')}
                    onChange={e => {
                        if(state.creditCard.errors.includes('securityCode')){
                            dispatch(
                                actions.removeError('creditCard', 'securityCode', state.creditCard.errors)
                            )
                        }

                        handleUpdateCardInfo('securityCode', e.target.value)
                    }}
                />
            </div>
        </CreditCardStyles>
    )
}

export default CreditCard
