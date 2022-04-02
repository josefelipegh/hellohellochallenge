// Libraries
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// CSS
import './Form.css';

const Form = ({title, handleSubmitForm, fields, defaultValues}) => {

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });

    const [isPass, setPass] = useState(true);

    /**
     * 
     * @description Construye los campos del formulario
     * @returns JSX.Element
     */
     const buildFields = (field) => {
         return {
            'text' : function isText() {
                return <label key={field.name} 
                              className="form__label"
                              htmlFor={field.name}>
                            <span className="form__name-input">{field.label}</span>
                            <input id={field.name}
                                    className="form__input" 
                                    type="text" 
                                    maxLength={field.maxLength}
                                    minLength={field.minLength}
                                    onChange={(e)=> {console.log(e)}}
                                    {...register(field.name, {required : field.required})}
                            />
                            <small className="form__error">{errors[field.name]?.message}</small>
                        </label>;
            },
            'textarea' : function isTextarea() {
                return <label key={field.name} 
                              className="form__label"
                              htmlFor={field.name}>
                            <span className="form__name-input">{field.label}</span>
                            <textarea id={field.name}
                                    className="form__input" 
                                    maxLength={field.maxLength}
                                    minLength={field.minLength}
                                    cols={field.cols}
                                    rows={field.rows}
                                    onChange={(e)=> {console.log(e)}}
                                    {...register(field.name, {required : field.required})}>
                            </textarea>
                            <small className="form__error">{errors[field.name]?.message}</small>
                        </label>;
            },
            'number': function isNumber() {
                return <label key={field.name} 
                             className="form__label"
                             htmlFor={field.name}>
                            <span className="form__name-input">{field.label}</span>
                            <input 
                                    id={field.name}
                                    className="form__input" 
                                    type="number" 
                                    min={field.min}
                                    max={field.max}
                                    onChange={field.handleChange}
                                    {...register(field.name, {required : field.required})}
                            />
                            <small className="form__error">{errors[field.name]?.message}</small>
                        </label>
            },
            'date': function isDate() {
                return <label key={field.name} 
                        className="form__label"
                        htmlFor={field.name}>
                    <span className="form__name-input">{field.label}</span>
                    <input  id={field.name}
                            className="form__input" 
                            type="date" 
                            min={field.min}
                            max={field.max}
                            onChange={field.handleChange}
                            {...register(field.name, {required : field.required})}
                    />
                    <small className="form__error">{errors[field.name]?.message}</small>
                </label>
            },
            'email': function isEmail() {
                return <label key={field.name}
                        className="form__label"
                        htmlFor={field.name}>
                    <span className="form__name-input">{field.label}</span>
                    <input id={field.name}
                            className="form__input" 
                            type="email"
                            pattern={field.pattern}
                            onChange={field.handleChange}
                            {...register(field.name, {required : field.required})}
                    />
                    <small className="form__error">{errors[field.name]?.message}</small>
                </label>
            },
            'select': function isSelect() {
                return <div key={field.name} className="form__label">
                    <span className="form__name-input">{field.label}</span>
                    <select id={field.name}
                        className="form__input form__select" 
                        onChange={field.handleChange}
                        {...register(field.name, {required : field.required})}
                        >
                            {field.options.map(opt => <option key={opt.name} className="form__opt" value={opt.value}>{opt.label}</option>)}
                    </select>
                    <small className="form__error">{errors[field.name]?.message}</small>
                    </div>
            },
            'password': function isPassword() {
                return <label key={field.name} 
                        className="form__label"
                        htmlFor={field.name}>
                    <span className="form__name-input">{field.label}</span>
                    <span className="form_view-password">
                        <input id={field.name}
                                className="form__input" 
                                type={isPass ? 'password' : 'text'}
                                onChange={field.handleChange}
                                {...register(field.name, {
                                    required : {
                                        name: field.required,
                                        message: 'Este password es requerido'
                                    },
                                    pattern : {
                                        name: field.pattern,
                                        message: 'Minimum eight characters, at least one letter, one number and one special character'
                                    }
                                })}
                                maxLength={field.maxLength}
                                minLength={field.minLength}
                        />
                        <img 
                            alt={field.label} 
                            className="form__view-icon" 
                            onClick={() => setPass(!isPass)}
                            src={isPass ? field.view : field.hidden} 
                            />
                    </span>
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
                return <input key={field.name}
                       id={field.name}
                       className="form__button" 
                       type="submit"
                       value={field.label}/>
            }, 
         }[field.type]();
    }

    return (
        <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
            <h2 className="form__title">{title}</h2>
            {
                fields.map(field => buildFields(field))
            }
        </form>
    );
}

export default Form;
