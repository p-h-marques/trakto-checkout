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

        default:
            throw new Error()
    }
}

export default reducer