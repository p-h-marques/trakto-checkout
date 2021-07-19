import * as types from './types'

function reducer(state, action) {
    switch (action.type) {
        case types.UPDATE_PAYMENT_TYPE:
            return {
                ...state,
                plan: {
                    ...state.plan,
                    payment: action.payload
                }
            }

        case types.UPDATE_USER_INFO:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            }

        case types.UPDATE_CARD_INFO:
            return {
                ...state,
                creditCard: {
                    ...state.creditCard,
                    ...action.payload
                }
            }

        case types.UPDATE_CEP:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            }

        case types.UPDATE_RECURRENCE:
            return {
                ...state,
                plan: {
                    ...state.plan,
                    recurrence: action.payload
                }
            }

        case types.UPDATE_ERRORS:
            return {
                ...state,
                [action.payload.type]: {
                    ...state[action.payload.type],
                    errors: [
                        ...action.payload.newErrors
                    ]
                }
            }

        default:
            throw new Error()
    }
}

export default reducer