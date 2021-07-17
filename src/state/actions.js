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

/**
 * Atualiza as informações de cadastro do usuário
 *
 * @param {string} key Campo a ser atualizado
 * @param {string} value Valor a ser atualizado
 * @returns {object}
 */
export function updateUserInfo(key, value){
    return {
        type: types.UPDATE_USER_INFO,
        payload: {
            [key]: value
        }
    }
}

/**
 * Atualiza as informações do cartão do usuário
 *
 * @param {string} key Campo a ser atualizado
 * @param {string} value Valor a ser atualizado
 * @returns {object}
 */
export function updateCardInfo(key, value){
    return {
        type: types.UPDATE_CARD_INFO,
        payload: {
            [key]: value
        }
    }
}