import React, {useCallback, useContext} from 'react'
import { PaymentTicketStyles } from './styles'

import Input from '../input'
import Select from '../select'

import Context from '../../state/Context'
import * as actions from '../../state/actions'
import * as requests from '../../utils/requests'
import * as validators from '../../utils/fieldValidators'

const PaymentTicket = () => {
    const { state, dispatch } = useContext(Context)

    /**
     * Atualiza as informações de cadastro do usuário,
     * com base nas devidas validações disponíveis
     */
    const handleUpdateUserInfo = useCallback((type, value) => {
        let validatedData = validators.getValidator(type)(value)

        if(validatedData !== state.creditCard[type]){
            dispatch(actions.updateUserInfo(type, validatedData))
        }
    }, [state.user])

    return (
        <PaymentTicketStyles className="border grid">
            <div className="big">
                <Input
                    code="userName"
                    label="Nome Completo"
                    placeholder="Digite seu nome completo"
                    value={state.user.name}
                    hasError={state.user.errors.includes('name')}
                    onChange={e => {
                        if(state.user.errors.includes('name')){
                            dispatch(
                                actions.removeError('user', 'name', state.user.errors)
                            )
                        }

                        handleUpdateUserInfo('name', e.target.value)
                    }}
                />
            </div>

            <div className="mediuml">
                <Input
                    code="userDocument"
                    label="CPF / CNPJ"
                    placeholder="CPF / CNPJ"
                    value={state.user.document}
                    hasError={state.user.errors.includes('document')}
                    onChange={e => {
                        if(state.user.errors.includes('document')){
                            dispatch(
                                actions.removeError('user', 'document', state.user.errors)
                            )
                        }

                        handleUpdateUserInfo('document', e.target.value)
                    }}
                />
            </div>

            <div className="mediumr">
                <Input
                    code="userPhone"
                    label="Telefone"
                    placeholder="(88) 8888-8888"
                    value={state.user.phone}
                    hasError={state.user.errors.includes('phone')}
                    onChange={e => {
                        if(state.user.errors.includes('phone')){
                            dispatch(
                                actions.removeError('user', 'phone', state.user.errors)
                            )
                        }

                        handleUpdateUserInfo('phone', e.target.value)
                    }}
                />
            </div>

            <div className="divider"></div>

            <div className="shortl">
                <Input
                    code="userPostalCode"
                    label="CEP"
                    placeholder="XXXXX-XXX"
                    value={state.user.postalCode}
                    hasError={state.user.errors.includes('postalCode')}
                    onChange={async (e) => {
                        if(state.user.errors.includes('postalCode')){
                            dispatch(
                                actions.removeError('user', 'postalCode', state.user.errors)
                            )
                        }

                        handleUpdateUserInfo('postalCode', e.target.value)

                        if(e.target.value.length === 9){
                            const fetchCep = await requests.fetchCep(e.target.value)
                            if(fetchCep) dispatch(actions.updateCep(fetchCep))
                        }
                    }}
                />
            </div>

            <div className="shortm">
                <a
                    href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                    target="_blank"
                    rel="noreferrer"
                >
                    Não sei meu CEP
                </a>
            </div>

            <div className="largel">
                <Input
                    code="userStreet"
                    label="Rua / Avenida"
                    placeholder="Ex. Av. Anderson Magalhães Teixeira"
                    value={state.user.street}
                    hasError={state.user.errors.includes('street')}
                    onChange={e => {
                        if(state.user.errors.includes('street')){
                            dispatch(
                                actions.removeError('user', 'street', state.user.errors)
                            )
                        }

                        handleUpdateUserInfo('street', e.target.value)
                    }}
                />
            </div>

            <div className="smallr">
                <Input
                    code="userNumber"
                    label="Número"
                    placeholder="N"
                    value={state.user.streetNumber}
                    hasError={state.user.errors.includes('streetNumber')}
                    onChange={e => {
                        if(state.user.errors.includes('streetNumber')){
                            dispatch(
                                actions.removeError('user', 'streetNumber', state.user.errors)
                            )
                        }

                        handleUpdateUserInfo('streetNumber', e.target.value)
                    }}
                />
            </div>

            <div className="mediuml">
                <Input
                    code="userNeighborhood"
                    label="Bairro"
                    placeholder="Bairro"
                    value={state.user.neighborhood}
                    hasError={state.user.errors.includes('neighborhood')}
                    onChange={e => {
                        if(state.user.errors.includes('neighborhood')){
                            dispatch(
                                actions.removeError('user', 'neighborhood', state.user.errors)
                            )
                        }

                        handleUpdateUserInfo('neighborhood', e.target.value)
                    }}
                />
            </div>

            <div className="mediumr">
                <Input
                    code="userComplement"
                    label="Complemento"
                    placeholder="Bloco, Apartamento"
                    value={state.user.complement}
                    onChange={e => {
                        handleUpdateUserInfo('complement', e.target.value)
                    }}
                />
            </div>

            <div className="mediuml">
                <Input
                    code="userCity"
                    label="Cidade"
                    placeholder="Cidade"
                    value={state.user.city}
                    hasError={state.user.errors.includes('city')}
                    onChange={e => {
                        if(state.user.errors.includes('city')){
                            dispatch(
                                actions.removeError('user', 'city', state.user.errors)
                            )
                        }

                        handleUpdateUserInfo('city', e.target.value)
                    }}
                />
            </div>

            <div className="mediumr">
                <Select
                    code="userState"
                    label="Estado"
                    placeholder="UF"
                    value={state.user.state}
                    hasError={state.user.errors.includes('state')}
                    onChange={e => {
                        if(state.user.errors.includes('state')){
                            dispatch(
                                actions.removeError('user', 'state', state.user.errors)
                            )
                        }

                        handleUpdateUserInfo('state', e.target.value)
                    }}
                />
            </div>

            <div className="big">
                <label className="checkbox">
                    <input
                        code="userTerms"
                        type="checkbox"
                        name="terms"
                        id="terms"
                        checked={state.user.terms}
                        onChange={e => {
                            handleUpdateUserInfo('terms', e.target.checked)
                        }}
                    />
                    <span>Concordar com os&nbsp;
                        <a>Termos de Uso</a>.
                    </span>
                </label>
            </div>
        </PaymentTicketStyles>
    )
}

export default PaymentTicket