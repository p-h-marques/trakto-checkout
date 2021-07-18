import React from 'react'
import { InputStyles } from '../input/styles'

const Select = ({label, code, value, onChange}) => {
    const states = [
        'AC','AL','AP','AM','BA','CE','DF','ES',
        'GO','MA','MT','MS','MG','PA','PB','PR',
        'PE','PI','RJ','RN','RS','RO','RR','SC',
        'SP','SE','TO'
    ]

    return (
        <InputStyles>
            <label htmlFor={code}>{label}</label>
            <select
                name={code}
                id={code}
                defaultValue="UF"
                value={value}
                onChange={onChange}
            >
                <option value="UF">UF</option>

                {
                    states.map(state => (
                        <option key={state} value={state}>{state}</option>)
                    )
                }
            </select>
        </InputStyles>
    )
}

export default Select