import styled from 'styled-components'
import colors from '../../styles/colors'

export const RadioPaymentStyles = styled.label`
    width: 100%;
    padding-bottom: 24px;
    border-bottom: 1px solid ${colors.neutral.light};
    margin-bottom: 16px;
    display: flex;
    gap: 8px;
    align-items: center;

    position: relative;
    cursor: pointer;
    font-size: 16px;
    color: ${colors.neutral.darkest};
    user-select: none;
    padding-left: 30px;

    /* Hide the browser's default radio button */
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    /* Create a custom radio button */
    span {
        position: absolute;
        top: 4;
        left: 0;
        height: 22px;
        width: 22px;
        background-color: ${colors.neutral.white};
        border: 1px solid ${colors.neutral.clear};
        border-radius: 50%;
    }

    /* On mouse-over, add a grey background color */
    &:hover input ~ span {
        background-color: ${colors.neutral.light};
    }

    /* When the radio button is checked, add a blue background */
    & input:checked ~ span {
        background-color: ${colors.brand.trakto};
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */
    span:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the indicator (dot/circle) when checked */
    & input:checked ~ span:after {
        display: block;
    }

    /* Style the indicator (dot/circle) */
    & span:after {
        top: 5px;
        left: 5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: white;
    }
`