import styled from 'styled-components';

// Components
import Card from '../../components/card/Card';
import Stepper from '../../components/stepper/Stepper';

const ContactUsContainer = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    max-width: 860px;
`

const ContactUs = () => {
    return (
        <>
            <ContactUsContainer className='container'>
                <Stepper/>
                <Card/>
            </ContactUsContainer>
        </>
        )
}

export default ContactUs;