import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

// Components
import Card from '../../components/card/Card';
import Stepper from '../../components/stepper/Stepper';

// Services
import { OptionsServices as _optionsServices } from "../../services/OptionsService";
import { DataService as _dataService } from "../../services/DataService";

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

    const [option, setOption] = useState(null);

    const [email, setEmail] = useState(null);

    let navigate = useNavigate();

    let timer;

    const handledSelectedOption = opt => setOption(opt);

    const handledEmail = async ({email}) => {
        setEmail(email);
        try {
            const response = await _dataService.post(email, option);
            console.log(response);

            // Respuesta Ok
            if(response && response.data && !response.data.error) {
                // Navegamos a login
                timer = setTimeout(() => {
                    // setTitle('Gracias por completar nuestro formulario.');
                    navigate('/result');
                },1000);
                return () => clearTimeout(timer);
            }
            // else console.log(response.data.,)
        }catch(err) {
            console.error(err);
        }
    }

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
                <Stepper
                        handledStep1={handledSelectedOption} 
                        handledStep2={handledEmail}
                        options={options}
                        />
                <Card/>
            </ContactUsContainer>
        </>
        )
}

export default ContactUs;