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
        streetNumber: '',
        neighborhood: '',
        complement: '',
        city: '',
        state: 'UF',
        terms: false,
        errors: []
    },
    creditCard: {
        name: '',
        number: '',
        expiration: '',
        securityCode: '',
        errors: []
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