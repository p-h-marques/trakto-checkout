import React from 'react'
import { PaymentActionsStyles } from './styles'

import Button from '../button'
import PlanInfo from '../planInfo'
import ImgSecure from '../../assets/images/misc/secure.svg'

const PaymentActions = () => {
    return (
        <PaymentActionsStyles>
            <PlanInfo />
            <Button />

            <div className="secure">
                <img src={ImgSecure} alt="Seguro" />
                <span>Pagamento 100% Seguro</span>
            </div>
        </PaymentActionsStyles>
    )
}

export default PaymentActions