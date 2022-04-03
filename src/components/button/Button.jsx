import styled, { css } from 'styled-components';

const Button = styled.button`
    border: none;
    color: ${(theme) => theme.sixthColor};
    margin-bottom: 1rem;
    outline: none;
    padding: 1rem .9rem;
    background-color: ${({ theme }) => theme.primary};
    transition: color, background-color .5s;
    border-radius: .3rem;
    cursor: pointer;
    width: 100%;
    font-weight: 600;

    &:active {
        transform: scale(.9);
    }

    ${({danger, ghost}) => danger && ghost && css`
        background-color: transparent;
        color: ${({ theme }) => theme.primaryColor};
        border: 1px solid ${({ theme }) => theme.primaryColor};
    `}

    ${({danger, ghost}) => danger && !ghost && css`
        background-color: ${({ theme }) => theme.primaryColor};
    `}

    ${({danger, ghost}) => !danger && ghost && css`
        background-color: transparent;
        color: ${({ theme }) => theme.primaryColor};
        border: 1px solid ${({ theme }) => theme.primaryColor};
    `}

    ${({primary, ghost}) => primary && ghost && css`
        background-color: transparent;
        color: ${({ theme }) => theme.secundaryColor};
        border: 1px solid ${({ theme }) => theme.secundaryColor};
    `}

    ${({primary, ghost}) => primary && !ghost && css`
        background-color: ${({ theme }) => theme.secundaryColor};
    `}

    ${({primary, ghost}) => !primary && ghost && css`
        background-color: transparent;
        color: ${({ theme }) => theme.secundaryColor};
        border: 1px solid ${({ theme }) => theme.secundaryColor};
    `}
`

export default Button;