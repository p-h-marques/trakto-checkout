/**
 * Transforma 9999.99 em 9.999,99
 *
 * @param {string | number} enter Número a ser formatado
 * @returns {string} Valor monetário
 */
export function formatingValue(enter) {
    let value = parseFloat(enter)

    if (isNaN(value)) {
        value = 0
    }

    let newvalue = value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    return newvalue
}