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
        </CheckoutStyles>
    )
}

export default Checkout
