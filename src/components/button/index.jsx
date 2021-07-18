import React, { useContext } from 'react'
import { ButtonStyles } from './styles'

import {formatingValue} from '../../utils/formats'
import Context from '../../state/Context'

const Button = () => {
    const {state} = useContext(Context)

    return (
        <ButtonStyles>
            Assinar (R$ {formatingValue(state.plan.value[state.plan.recurrence])})
        </ButtonStyles>
    )
}

export default Button