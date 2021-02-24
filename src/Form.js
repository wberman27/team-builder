import React from 'react';
import './App.css';

export default function Form(props){

    const { values, update, submit } = props;


    const onChange = e => {
        const {name, value} = e.target

        update(name, value);
    }

    const onSubmit = e => {
        e.preventDefault();
        submit()
    }


    return (
        <div className = 'originForm'>
        <form className = 'formContainer' onSubmit={onSubmit}>
            <label>Name
                <input 
                name = 'name'
                type = 'text'
                onChange = {onChange}
                value = {values.name}
                placeholder = 'Your Name'
                maxLength = '30'
                   
                />

            </label>

            <label>Email
                <input 
                type = 'email' 
                name = 'email' 
                value = {values.email}
                onChange = {onChange}
                placeholder = 'Username@email.com'
                />

            </label>

            <label>Role

                <select value = {values.role} name = 'role' onChange = {onChange}>
                    <option value = ''>---Select Role---</option>
                    <option value = 'WEB_DEV'>Web Developer</option>
                    <option value = 'DATA_SCIENTIST'>Data Scientist</option>
                    <option value = 'ENGINEER'>Engineer</option>
                    <option value = 'LINGUIST'>Linguist</option>
                    <option value = 'SPEECH_THERAPIST'>Speech Therapist</option>
                    <option value = 'SURGEON'>Surgeon</option>
                    <option value = 'ROCKSTAR'>Rockstar</option>
                    <option value = 'BARISTA'>Barista</option>

                </select>

            </label>

            <div className = 'submit'>
                <button className = 'submitButton'>Submit</button>
            </div>

        </form>
        </div>
//disabled={!values.name || !values.email || !values.role}>
    )




}