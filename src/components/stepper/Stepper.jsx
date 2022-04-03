import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Radio from '../radio/Radio';
import Form from '../form/Form';
import React from 'react';
import Result from '../result/Result';


const Section = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: calc(100px - 1rem);
    width: 100%;
    max-width: 390px;
    height: auto;
    padding: 0 1rem;
    margin-bottom: 1rem;
`

const Stepper = ({options, handledStep1, handledStep2}) => {

    const defaultValues = {
        email: ''
    };

    const defaultValuesError = {...defaultValues};

    const handleChange = (e) => console.log(e);

    const fields = [
        {
            type: 'email',
            name: 'email',
            label: 'Correo electrónico',
            handleChange,
            required: 'Por favor, ingresá un correo electrónico válido.'
        },
        {
            type: 'submit',
            name: 'submit',
            label: 'enviar',
        }
    ];

    return (
        <Section className='stepper animate__animated animate__bounceInLeft'>
            <Routes>
                <Route path="/" element={<Radio 
                                                handleChange={handledStep1}
                                                options={options}/>} />
                <Route path="/step2" element={<Form 
                                                    handleSubmitForm={handledStep2}
                                                    defaultValues={defaultValues} 
                                                    defaultValuesError={defaultValuesError} 
                                                    fields={fields} 
                                                    options={options}
                                                    />} />
                <Route path='/result' element={<Result/>} />
            </Routes>
        </Section>
    )
}

export default Stepper;