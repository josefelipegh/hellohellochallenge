import styled from 'styled-components';
import Button from '../button/Button';

// Components
import Radio from '../radio/Radio';


const Section = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 100px;
    width: 100%;
    height: 100%;
`

const ButtonStepper = styled(Button)`
        text-align: center;
        margin-top: 60px;
        width: max-content;
        padding-left: 3rem;
        padding-right: 3rem;
        float: left;
        margin-left: auto;
`

const Title = styled.h2`
    font-size: 28px;
    font-weight: 700;
    padding: 0 1rem;
    margin-bottom: 1.5rem;
`

const Stepper = ({options}) => {
    return (
        <Section>
            <Title>Para comenzar seleccioná una de las siguientes opciones.</Title>
            {/* TODO: Form con opciones como checkbox */}
            <Radio options={options}/>
            <ButtonStepper danger>siguiente</ButtonStepper>
        </Section>
    )
}

export default Stepper;