import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// Components
import Button from '../button/Button';

const CardWrapper = styled.div`
    width: 100%;
    margin: 40px 0 1rem 0;
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
`

const ButtonStepper = styled(Button)`
        text-align: center;
        width: max-content;
        padding-left: 3rem;
        padding-right: 3rem;
        margin: 60px 0 0 auto;
`

const Radio = ({options}) => {

    const [isActive, setActive] = useState(null);

    const handledChange = (e) => {
        setActive(e.target.value);
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
            <Link className='stepper__link' to={'/step2'}>
                <ButtonStepper danger>siguiente</ButtonStepper>
            </Link>
        </CardWrapper>
    )
}

export default Radio;