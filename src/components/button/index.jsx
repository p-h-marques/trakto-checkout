import React, { useCallback, useContext } from 'react'
import { ButtonStyles } from './styles'

import {formatingValue} from '../../utils/formats'
import handleFormValidation from '../../utils/formValidators'
import Context from '../../state/Context'
import * as actions from '../../state/actions'

const Button = () => {
    const {state, dispatch} = useContext(Context)

    /**
     * Inicia dinâmicas de validação para
     * efetuar pagamento do plano
     */
    const handlePayment = useCallback(()=>{
        const validation = handleFormValidation(state)

        if(validation.action === 'updateErrors'){
            dispatch(actions[validation.action]({...validation.args}))
        }
    }, [state])

    return (
        <ButtonStyles
            onClick={handlePayment}
        >
            Assinar (R$ {formatingValue(state.plan.value[state.plan.recurrence])})
        </ButtonStyles>
    )
}

export default Button