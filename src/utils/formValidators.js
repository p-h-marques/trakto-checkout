import { getValidator } from './fieldValidators'

/**
 * Obtém a lista de campos obrigatórios para
 * determinado tipo de pagamento
 *
 * @param {string} paymentType Tipo de pagamento a ser validado
 * @returns {array}
 */
function getRequiredFields(paymentType){
    const requiredFieldsList = {
        creditCard: [
            'name',
            'number',
            'expiration',
            'securityCode'
        ],
        paymentTicket:  [
            'name',
            'document',
            'phone',
            'postalCode',
            'street',
            'streetNumber',
            'neighborhood',
            'city',
            'state',
            'terms',
        ]
    }

    return requiredFieldsList[paymentType]
}

/**
 * Verifica os campos obrigatórios conforme
 * o método de pagamento e retorna um array
 * com os campos incorretos
 *
 * @param {array} fields Campos obrigatórios de determinado método de pagamento
 * @param {object} state Estado global da aplicação no nomento da validação
 * @returns {array}
 */
function getFieldErrors(fields, state){
    const key = state.plan.payment === 'paymentTicket' ? 'user' : 'creditCard'
    const validators = getValidator()

    return fields.filter(field => {
        const value = state[key][field]

        const validateFieldIntegrity =
            Object.prototype.hasOwnProperty.call(validators, field) &&
            !validators[field](value, 'validate')

        return value === '' || !value || validateFieldIntegrity
    })
}

/**
 * Faz as devidas chamadas para as validações dos campos,
 * de acordo com a forma de pagamento vigente, e
 * retorna a action e informações para ser executada
 *
 * @param {object} state Estado global da aplicação
 * @returns {object}
 */
export default function handleFormValidation(state){
    const requiredFields    = getRequiredFields(state.plan.payment)
    const errors            = getFieldErrors(requiredFields, state)

    const type = state.plan.payment === 'paymentTicket'
        ? 'user'
        : 'creditCard'

    if(errors.length > 0){
        return {
            action: 'updateErrors',
            args: {type, errors}
        }
    }

    if(!state.plan.terms){
        return {
            action: 'updatePlanErrors',
            args: {
                hasError: true,
                type: 'planTerms'
            }
        }
    }

    if(state.plan.recurrence === 'monthly' && state.plan.payment === 'paymentTicket'){
        return {
            action: 'updatePlanErrors',
            args: {
                hasError: true,
                type: 'paymentTicket'
            }
        }
    }

    return {
        action: 'updatePaymentStatus',
        args: {
            step: 'success'
        }
    }
}