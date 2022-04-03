import styled from 'styled-components';

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

const Title = styled.h2`
    font-size: 28px;
    font-weight: 700;
`

const Stepper = () => {
    return (
        <Section>
            <Title>Para comenzar seleccioná una de las siguientes opciones.</Title>
            {/* TODO: Form con opciones como checkbox */}
            <Radio/>
            

        </Section>
    )
}

export default Stepper;