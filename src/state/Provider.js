import React, { useReducer } from 'react'
import Context from './Context'
import reducer from './reducers'


export const initialState = {
    user: {
        name: '',
        document: '',
        phone: '',
        postalCode: '',
        street: '',
        number: '',
        neighborhood: '',
        complement: '',
        city: '',
        state: ''
    },
    creditCard: {
        number: '',
        expirationMonth: '',
        expirationYear: '',
        secutiryCode: ''
    },
    plan: {
        name: 'Plano Pro',
        value: {
            monthly: 25.5,
            anual: 150
        },
        recurrence: 'monthly',
        payment: 'creditCard'
    }
}


function Provider({ children }) {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    )

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export default Provider