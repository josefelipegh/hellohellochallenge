import styled, { css } from 'styled-components';

const Button = styled.button`
    border: none;
    color: #fff;
    margin-bottom: 1rem;
    margin-right: 1rem;
    outline: none;
    padding: .5rem .8rem;
    background-color: ${({ theme }) => theme.primary};
    transition: color, background-color .5s;
    border-radius: .3rem;
    cursor: pointer;
    width: 100%;

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