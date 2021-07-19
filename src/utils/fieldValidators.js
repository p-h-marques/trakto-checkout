/**
 * Formata número de cartão de crédito para
 * formato 9999.9999.9999.9999.
 * @param {string} value Valor a ser validado
 * @returns Valor após validação
 */
function cardNumberValidator(value, type = 'format'){
    value = value.replace(/\D/g,'')

    if(type === 'validate') return value.length === 16

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
function expirationValidator(value, type = 'format'){
    if(type === 'validate'){
        if(value.length !== 5) return false

        const split = value.split('/')

        if(split[0] > 12) return false

        return true
    }

    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})/g, '$1/')
    value = value.replace(/\/$/, '')
    value = value.substring(0, 5)

    return value
}

/**
 * Formata código de segurança do
 * cartão no formato 999
 * @param {string} value Valor a ser validado
 * @returns Valor após validação
 */
function securityCodeValidator(value, type = 'format'){
    value = value.replace(/\D/g,'')

    if(type === 'validate') return value.length ===3

    value = value.substring(0, 3)

    return value
}

/**
 * Formata documento CPF/CNPJ de acordo
 * com o número de caracteres
 *
 * @param {string} value Documento a ser formatado
 * @returns Valor após validação
 */
function documentValidator(value, type = 'format'){
    value = value.replace(/\D/g,'')

    if(type === 'validate') return value.length === 11 || value.length === 14

    value.length <= 11
        ? value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,'$1.$2.$3-$4')
        : value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,'$1.$2.$3/$4-$5')

    value = value.substring(0, 18)

    return value
}

/**
 * Formata número de telefone de acordo
 * com o número de caracteres
 * @param {string} value Telefone a ser formatado
 * @returns Valor após validação
 */
function phoneValidator(value, type = 'format'){
    value = value.replace(/\D/g,'')

    if(type === 'validate') return value.length === 11 || value.length === 10

    value = value.substring(0, 11)

    value.length === 11
        ? value = value.replace(/(\d{2})(\d{5})(\d{4})/g,'($1) $2-$3')
        : value = value.replace(/(\d{2})(\d{4})(\d{4})/g,'($1) $2-$3')

    return value
}

/**
 * Formata CEP no formato 99999-999
 *
 * @param {string} value CEP a ser formatado
 * @returns Valor após validação
 */
function postalCodeValidator(value, type = 'format'){
    value = value.replace(/\D/g,'')

    if(type === 'validate') return value.length === 8

    value = value.replace(/(\d{5})/g, '$1-')
    value = value.replace(/-$/, '')
    value = value.substring(0, 9)

    return value
}

/**
 * Filtra apenas números
 *
 * @param {string} value Valor a ser filtrado
 * @returns Apenas números
 */
function numberValidator(value, type = 'format'){
    value = value.replace(/\D/g,'')

    if(type === 'validate') return value.length > 0

    return value
}

/**
 * Retorna uma função de validação conforme
 * o tipo de campo passado
 *
 * @param {string} type Identificação do campo a ser validado
 * @returns {function} Função de validação
 */
export function getValidator(type = 'all'){
    const validators = {
        number:         (value, type = 'format') => cardNumberValidator(value, type),
        expiration:     (value, type = 'format') => expirationValidator(value, type),
        securityCode:   (value, type = 'format') => securityCodeValidator(value, type),
        document:       (value, type = 'format') => documentValidator(value, type),
        phone:          (value, type = 'format') => phoneValidator(value, type),
        postalCode:     (value, type = 'format') => postalCodeValidator(value, type),
        streetNumber:   (value, type = 'format') => numberValidator(value, type),
        default:        value => value
    }

    if(type === 'all') return validators

    return validators[type] || validators['default']
}