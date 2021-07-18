import React, {useCallback, useContext} from 'react'
import { PaymentTicketStyles } from './styles'

import Input from '../input'

import Context from '../../state/Context'
import * as actions from '../../state/actions'

const PaymentTicket = () => {
    const { state, dispatch } = useContext(Context)

    /**
     * Atualiza as informações de cadastro do usuário
     */
    const handleUpdateUserInfo = useCallback((type, value) => {
        dispatch(actions.updateUserInfo(type, value))
    }, [state.user])

    return (
        <PaymentTicketStyles className="border grid">
            <div className="big">
                <Input
                    label="Nome Completo"
                    placeholder="Digite seu nome completo"
                    value={state.user.name}
                    onChange={e => {
                        handleUpdateUserInfo('name', e.target.value)
                    }}
                />
            </div>

            <div className="mediuml">
                <Input
                    label="CPF / CNPJ"
                    placeholder="CPF / CNPJ"
                    value={state.user.document}
                    onChange={e => {
                        handleUpdateUserInfo('document', e.target.value)
                    }}
                />
            </div>

            <div className="mediumr">
                <Input
                    label="Telefone"
                    placeholder="(88) 8888-8888"
                    value={state.user.phone}
                    onChange={e => {
                        handleUpdateUserInfo('phone', e.target.value)
                    }}
                />
            </div>

            <div className="divider"></div>

            <div className="shortl">
                <Input
                    label="CEP"
                    placeholder="XXXXX-XXX"
                    value={state.user.postalCode}
                    onChange={e => {
                        handleUpdateUserInfo('postalCode', e.target.value)
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
                    label="Rua / Avenida"
                    placeholder="Ex. Av. Anderson Magalhães Teixeira"
                    value={state.user.street}
                    onChange={e => {
                        handleUpdateUserInfo('street', e.target.value)
                    }}
                />
            </div>

            <div className="smallr">
                <Input
                    label="Número"
                    placeholder="N"
                    value={state.user.number}
                    onChange={e => {
                        handleUpdateUserInfo('number', e.target.value)
                    }}
                />
            </div>

            <div className="mediuml">
                <Input
                    label="Bairro"
                    placeholder="Bairro"
                    value={state.user.neighborhood}
                    onChange={e => {
                        handleUpdateUserInfo('neighborhood', e.target.value)
                    }}
                />
            </div>

            <div className="mediumr">
                <Input
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
                    label="Cidade"
                    placeholder="Cidade"
                    value={state.user.city}
                    onChange={e => {
                        handleUpdateUserInfo('city', e.target.value)
                    }}
                />
            </div>

            <div className="mediumr">
                <Input
                    label="Estado"
                    placeholder="UF"
                    value={state.user.state}
                    onChange={e => {
                        handleUpdateUserInfo('state', e.target.value)
                    }}
                />
            </div>

            <div className="big">
                <label className="checkbox">
                    <input
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