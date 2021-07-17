import React, { useCallback, useContext } from 'react'
import { CreditCardStyles } from './styles'

import Input from '../input'
import ImgCard from '../../assets/images/input/card.svg'

import Context from '../../state/Context'
import * as actions from '../../state/actions'

const CreditCard = () => {
    const { state, dispatch } = useContext(Context)

    /**
     * Atualiza as informações de cadastro do usuário
     */
    const handleUpdateUserInfo = useCallback((type, value) => {
        dispatch(actions.updateUserInfo(type, value))
    }, [state.user])

    /**
     * Atualiza as informações de cadastro do usuário
     */
    const handleUpdateCardInfo = useCallback((type, value) => {
        dispatch(actions.updateCardInfo(type, value))
    }, [state.creditCard])

    return (
        <CreditCardStyles className="border">
            <div>
                <Input
                    label="Nome no Cartão"
                    placeholder="Digite seu nome completo"
                    value={state.user.name}
                    onChange={e => {
                        handleUpdateUserInfo('name', e.target.value)
                    }}
                />
            </div>

            <div>
                <Input
                    label="Dados do Cartão"
                    placeholder="Número do Cartão"
                    placeholderImg={ImgCard}
                    value={state.creditCard.number}
                    onChange={e => {
                        handleUpdateCardInfo('number', e.target.value)
                    }}
                />
            </div>
        </CreditCardStyles>
    )
}

export default CreditCard
