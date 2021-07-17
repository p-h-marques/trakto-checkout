import React from 'react'
import { InputStyles } from './styles'

const Input = ({label, placeholder, placeholderImg, value, onChange}) => {
    return (
        <InputStyles
            placeholderImg={placeholderImg}
        >
            <label htmlFor="cardName">{label}</label>
            <input
                type="text"
                name="cardName"
                id="cardName"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </InputStyles>
    )
}

export default Input