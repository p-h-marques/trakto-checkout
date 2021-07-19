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

/**
 * Atualiza as informações de endereço do
 * usuário, provenientes da consulta do CEP
 *
 * @param {object} data Retorno da API ViaCep
 * @returns {object}
 */
export function updateCep(data){
    return {
        type: types.UPDATE_CEP,
        payload: {
            postalCode: data.cep,
            street: data.logradouro,
            neighborhood: data.bairro,
            city: data.localidade,
            state: data.uf,
        }
    }
}

/**
 * Atualiza a recorrência selecionada pelo usuário
 *
 * @param {string} recurrence Tipo de recorrência selecionada
 * @returns {object}
 */
export function updateRecurrence(recurrence){
    return {
        type: types.UPDATE_RECURRENCE,
        payload: recurrence
    }
}

/**
 * Atualiza os erros do formulário
 *
 * @param {string} type Método de pagamento utilizado
 * @param {array} errors Campos que possuem erros
 * @returns {object}
 */
export function updateErrors({type, errors}){
    return {
        type: types.UPDATE_ERRORS,
        payload: {
            type,
            newErrors: errors
        }
    }
}

/**
 * Atualiza o status de aceite dos termos do plano
 *
 * @param {boolean} isAccepted Status de aceitação dos termos do plano
 * @returns {object}
 */
export function updatePlanTerms(isAccepted){
    return {
        type: types.UPDATE_PLAN_TERMS,
        payload: isAccepted
    }
}

/**
 * Atualiza a lista de erros de determinado método
 * de pagamento, removendo um campo desejado
 *
 * @param {string} type Método de pagamento a ser interagido
 * @param {string} error Campo que continha o erro
 * @param {array} previous Lista de campos que continham erros anteriormente
 * @returns {object}
 */
export function removeError(type, error, previous){
    const index = previous.indexOf(error)

    if (index > -1) previous.splice(index, 1)

    return {
        type: types.UPDATE_ERRORS,
        payload: {
            type,
            newErrors: previous
        }
    }
}

/**
 * Atualiza a lista de erros do plano com base
 * no condicional e tipo passados
 *
 * @param {boolean} hasError Presença de erro no tipo em questão
 * @param {string} type Tipo de erro a ser alterado
 * @returns {object}
 */
export function updatePlanErrors({hasError, type}){
    return {
        type: types.UPDATE_PLAN_ERRORS,
        payload: {
            [type]: hasError
        }
    }
}