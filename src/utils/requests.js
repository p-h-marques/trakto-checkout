const apis = {
    cep: 'https://viacep.com.br/ws/_/json/'
}

/**
 * Pesquisa as informações do endereço
 * com base em um CEP
 *
 * @param {string} cep CEP a ser pesquisado
 * @returns {object}
 */
export async function fetchCep(cep){
    cep = cep.replace(/\D/g,'')
    const url = apis.cep.replace('_', cep)

    const request = await fetch(url)
    if(request.status !== 200) return false

    const response = await request.json()
    return response.erro ? false : response
}