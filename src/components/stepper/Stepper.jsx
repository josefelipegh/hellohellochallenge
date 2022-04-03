import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Radio from '../radio/Radio';
import Form from '../form/Form';
import React from 'react';


const Section = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 100px;
    width: 100%;
    height: 100%;
    padding: 0 1rem;

    & .stepper__link {
        display: flex;
        width: 100%;
        text-decoration: none;
    }
`

const Title = styled.h2`
    font-size: 28px;
    font-weight: 700;
`

const Stepper = ({options}) => {

    const defaultValues = {
        email: ''
    };

    const defaultValuesError = {...defaultValues};

    const handleChange = () => console.log('change');

    const handleSubmit = (e) => console.log(e);

    const fields = [
        {
            type: 'email',
            name: 'email',
            label: 'Correo electrónico',
            maxLength: 45,
            minLength: 0,
            handleChange,
            required: 'Por favor, ingresá un correo electrónico válido.'
        },
        {
            type: 'submit',
            name: 'submit',
            label: 'Enviar',
        }
    ];

    return (
        <Section>
            <Title>Para comenzar seleccioná una de las siguientes opciones.</Title>
            <Routes>
                <Route path="/" element={<Radio options={options}/>} />
                <Route path="/step2" element={<Form 
                                                    handleSubmitForm={handleSubmit}
                                                    defaultValues={defaultValues} 
                                                    defaultValuesError={defaultValuesError} 
                                                    fields={fields} 
                                                    options={options}
                                                    />} />
            </Routes>
        </Section>
    )
}

export default Stepper;