import React from 'react'
import { PaymentActionsStyles } from './styles'

import Button from '../button'
import PlanInfo from '../planInfo'

const PaymentActions = () => {
    return (
        <PaymentActionsStyles>
            <PlanInfo />
            <Button />
        </PaymentActionsStyles>
    )
}

export default PaymentActions