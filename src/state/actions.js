import * as types from './types'

/**
 * Atualiza a forma de pagamento a ser utilizada
 *
 * @param {string} type Tipo de pagamento selecionado
 * @returns {type, payload}
 */
export function updatePaymentType(type){
    return {
        type: types.UPDATE_PAYMENT_TYPE,
        payload: type,
    }
}