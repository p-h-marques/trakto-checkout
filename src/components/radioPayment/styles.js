import styled from 'styled-components'
import colors from '../../styles/colors'

export const RadioPaymentStyles = styled.label`
    width: 100%;
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
    span.fake {
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
    &:hover input ~ span.fake {
        background-color: ${colors.neutral.light};
    }

    /* When the radio button is checked, add a blue background */
    & input:checked ~ span.fake {
        background-color: ${colors.brand.trakto};
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */
    span.fake:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the indicator (dot/circle) when checked */
    & input:checked ~ span.fake:after {
        display: block;
    }

    /* Style the indicator (dot/circle) */
    & span.fake:after {
        top: 5px;
        left: 5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: white;
    }

    span.tag{
        border-radius: 500px;
        background-color: rgba(0, 149, 255, 0.16);
        padding: 5px 13px;
        color: ${colors.neutral.darkest};
        font-size: 12px;
        line-height: 14px;
        margin-left: 15px;
        text-align: center;
    }
`