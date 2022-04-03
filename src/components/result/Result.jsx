import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Button from "../button/Button";

const Title = styled.h2`
    font-size: 28px;
    font-weight: 700;
`

const Img = styled.img`
    width: 60px;
    margin-bottom: 1rem;
`

const ButtonResult = styled(Button)`
    max-width: 120px;
    
    & .stepper__link{
        text-decoration: none;
        color: ${({theme})=>theme.sixthColor};
    }
`

const Result = () => {
    return (
        <>
            <i>
                <Img src="/assets/svg/icon-success.svg" alt="success" />
            </i>
            <Title>Gracias por completar nuestro formulario.</Title>
            <ButtonResult danger className="form__button">
                <Link 
                        className='stepper__link' 
                        to={'/'}>
                    volver
                </Link>
            </ButtonResult>
        </>
    );
}

export default Result;