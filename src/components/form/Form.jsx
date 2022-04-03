// Libraries
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from 'styled-components';

// Components
import Button from "../button/Button";

// CSS
import './Form.css';

const Title = styled.h2`
    font-size: 28px;
    font-weight: 700;
    margin: 0 0 40px 0;
`

const Form = ({title, handleSubmitForm, fields, defaultValues}) => {

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });

    /**
     * 
     * @description Construye los campos del formulario
     * @returns JSX.Element
     */
     const buildFields = (field) => {
         return {
            'email': function isEmail() {
                return <label key={field.name}
                        className="form__label animate__animated animate__fadeIn"
                        htmlFor={field.name}>
                    { field.label && <span className="form__name-input">{field.label}</span>}
                    <input id={field.name}
                            className="form__input" 
                            type="email"
                            pattern={field.pattern}
                            onChange={field.handleChange}
                            {...register(field.name, {
                                required : field.required, 
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: field.required
                                }
                            })}
                    />
                    <small className="form__error">{errors[field.name]?.message}</small>
                </label>
            },
            'span': function isSpan() {
                return <div className="form__link" key={field.name}>
                    <Link className="form__span" to={field.name}>
                        {field.label}
                    </Link>
                </div>
            }, 
            'submit': function isSubmit(){
                return <Button 
                                danger
                                className="form__button" 
                                id={field.name}
                                key={field.name}
                                type="submit"
                                value={field.label}
                                >
                                    {field.label}
                      </Button>
            }, 
         }[field.type]();
    }

    return (
        <>
            <Title className="animate__animated animate__bounceInLeft">Para terminar completá el siguiente formulario.</Title>
            <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
                <h2 className="form__title">{title}</h2>
                {
                    fields.map(field => buildFields(field))
                }
            </form>
        </>
    );
}

export default Form;
