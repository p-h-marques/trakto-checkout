import React, {useContext, useEffect} from 'react'
import { CheckoutStyles } from './styles'
import Context from '../../state/Context'
import Header from '../../components/header'
import PaymentMethods from '../../components/paymentMethods'
import PaymentActions from '../../components/paymentActions'

const Checkout = () => {
    const {state} = useContext(Context)

    useEffect(()=>{
        console.log(state)
    }, [state])

    return (
        <CheckoutStyles>
            <Header />

            <main>
                <div className="container">
                    <div className="grid">
                        <PaymentMethods />
                        <PaymentActions />
                    </div>
                </div>
            </main>
        </CheckoutStyles>
    )
}

export default Checkout
