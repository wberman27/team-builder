import React from 'react'

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

        <form className = 'formContainer'>
            <label>Name
                <input 
                name = 'name'
                type = 'text'
                onChange = {onChange}
                value = {values.name}
                placeholder = 'Your Name'
                maxlength = '30'
                   
                />

            </label>

            <label>Email
                

            </label>



        </form>


    )




}