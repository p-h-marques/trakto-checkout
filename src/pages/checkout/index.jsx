import React, {useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { CheckoutStyles } from './styles'
import Context from '../../state/Context'
import Header from '../../components/header'
import PaymentMethods from '../../components/paymentMethods'
import PaymentActions from '../../components/paymentActions'

const Checkout = () => {
    const {state} = useContext(Context)
    let history = useHistory()

    /**
     * Redirecionando para tela de sucesso,
     * caso o objeto de estado global identifique
     * um pagamento bem sucedido
     */
    useEffect(()=>{
        if(state.step === 'success') history.push('/success')
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
