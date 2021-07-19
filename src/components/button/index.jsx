import React, { useCallback, useContext } from 'react'
import { ButtonStyles } from './styles'

import {formatingValue} from '../../utils/formats'
import handleFormValidation from '../../utils/formValidators'
import Context from '../../state/Context'
// import * as actions from '../../state/actions'

const Button = () => {
    const {state} = useContext(Context)

    const handlePayment = useCallback(()=>{
        const validation = handleFormValidation(state)
        console.log(validation)
        // dispatch(actions[validation.action](...validation.args))
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