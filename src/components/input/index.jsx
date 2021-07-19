import React from 'react'
import { InputStyles } from './styles'

const Input = ({
    code, label, placeholder, placeholderImg,
    value, onChange, hasError
}) => {
    return (
        <InputStyles
            placeholderImg={placeholderImg}
            className={hasError ? 'error' : null}
        >
            <label htmlFor={code}>{label}</label>
            <input
                type="text"
                name={code}
                id={code}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </InputStyles>
    )
}

export default Input