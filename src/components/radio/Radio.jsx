import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// Components
import Button from '../button/Button';

const CardWrapper = styled.div`
    width: 100%;
    margin: 40px 0 1rem 0;
    display: flex;
    flex-direction: column;
    & .stepper__link {
        display: flex;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: ${({theme})=> theme.sixthColor};
        padding: 1rem 3rem;
    }
`

const Card = styled.div`
    background-color: ${({theme})=> theme.sixtyColor};
    box-shadow: 0px 8px 16px rgba(86, 80, 76, 0.04), 
                0px 2px 16px rgba(86, 80, 76, 0.04), 
                0px 1px 4px rgba(86, 80, 76, 0.04);
    width: 100%;
    border-radius: .2rem;
    margin-bottom: 1rem;

    ${({active}) => active && css`
        outline: 2px solid ${({ theme }) => theme.seventhColor};
    `}
`

const Input = styled.input`
    display: none;
`

const Label = styled.label`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1.5rem;
    width: 100%;
    cursor: pointer;
`

const Option = styled.span`
`

const Img = styled.img`
    width: 50px;
    height: 35px;
    border-radius: .4rem;
`

const Paragraph = styled.p`
    flex-grow: 1;
    margin-left: 1rem;
    font-weight: 600;
    padding: 0 1rem;
`

const ButtonStepper = styled(Button)`
        position: relative;
        text-align: center;
        width: max-content;
        padding: 0;
        margin: 60px 0 0 auto;
        z-index: ${({disabled})=> disabled ?  '-1' : '0' };
`

const Radio = ({options, handleChange}) => {

    const [isActive, setActive] = useState(null);

    const handledChange = (e) => {
        setActive(e.target.value);
        // Event emitter
        handleChange(e.target.value);
    }

    const buildRadioButton = () => {
        return options.map(opt => {
            return (
            <Card key={opt.value} active={ isActive && isActive === opt.value }>
                <Input type="radio" name='option' id={opt.value} value={opt.value} onChange={handledChange} />
                <Label htmlFor={opt.value}>
                    <Option>
                        <Img src={opt.image} alt={opt.value} />
                    </Option>
                    <Paragraph>{opt.label}</Paragraph>
                    <i>
                        <img src="/assets/svg/icon-chevron-right.svg" alt="chevronRight" />
                    </i>
                </Label>
            </Card>);
        })
    }

    return (
        <CardWrapper>
            {buildRadioButton()}
                <ButtonStepper disabled={!isActive} danger>
                    <Link className='stepper__link' to={'/step2'}>
                        siguiente
                    </Link>
                </ButtonStepper>
        </CardWrapper>
    )
}

export default Radio;