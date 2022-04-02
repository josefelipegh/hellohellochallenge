import styled from 'styled-components';
import Card from '../../components/card/Card';

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
                <section>stepper</section>
                <Card/>
            </ContactUsContainer>
        </>
        )
}

export default ContactUs;