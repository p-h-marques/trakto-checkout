/**
 * Formata número de cartão de crédito para
 * formato 9999.9999.9999.9999.
 * @param {string} value Valor a ser validado
 * @returns Valor após validação
 */
function cardNumberValidator(value){
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{4})/g, '$1.')
    value = value.replace(/\.$/, '')
    value = value.substring(0, 19)

    return value
}

/**
 * Formata número de mês e ano do vencimento do
 * cartão de crédito no formato 99.99
 * @param {string} value Valor a ser validado
 * @returns Valor após validação
 */
function expirationValidator(value){
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})/g, '$1.')
    value = value.replace(/\.$/, '')
    value = value.substring(0, 5)

    return value
}

/**
 * Formata código de segurança do
 * cartão no formato 999
 * @param {string} value Valor a ser validado
 * @returns Valor após validação
 */
function securityCodeValidator(value){
    value = value.replace(/\D/g,'')
    value = value.substring(0, 3)

    return value
}

/**
 * Retorna uma função de validação conforme
 * o tipo de campo passado
 *
 * @param {string} type Identificação do campo a ser validado
 * @returns {function} Função de validação
 */
export function getValidator(type){
    const validators = {
        number: (value) => cardNumberValidator(value),
        expiration: (value) => expirationValidator(value),
        securityCode: (value) => securityCodeValidator(value),
        default: (value) => value
    }

    return validators[type] || validators['default']
}