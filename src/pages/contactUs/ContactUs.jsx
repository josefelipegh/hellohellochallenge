import React, { useState, useEffect } from "react";
import styled from 'styled-components';

// Components
import Card from '../../components/card/Card';
import Stepper from '../../components/stepper/Stepper';

// Services
import { OptionsServices as _optionsServices } from "../../services/OptionsService";

const ContactUsContainer = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 100px;
    max-width: 860px;
`

const ContactUs = () => {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await _optionsServices.get();
                if(response && response.data && !response.err){
                    setOptions(response.data);
                } 
            } catch(err) {
                // const {response} = err;
                // if(response.data && response.data.err && response.data.data)
                //     showToast.current('error', 'Error Message', response.data.data, 3000);
            }
        }
        fetchData();
    }, [options]);

    return (
        <>
            <ContactUsContainer className='container'>
                <Stepper options={options}/>
                <Card/>
            </ContactUsContainer>
        </>
        )
}

export default ContactUs;