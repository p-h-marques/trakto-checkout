import React, {useContext, useEffect} from 'react'
import { CheckoutStyles } from './styles'
import Context from '../../state/Context'
import Header from '../../components/header'

const Checkout = () => {
    const {state} = useContext(Context)

    useEffect(()=>{
        console.log(state)
    }, [])

    return (
        <CheckoutStyles>
            <Header />

            <main>
                <div className="container">
                    <div className="grid">
                        <div>Métodos de Pagamento</div>
                        <div>Resumo da Compra</div>
                    </div>
                </div>
            </main>
        </CheckoutStyles>
    )
}

export default Checkout
