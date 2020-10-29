import React from 'react'
// import useForm from './useForm'
import useForm from './useFormCopy'
import validate from "./validation";
import './Form.css'

const FormSignup = () => {
    const [values, handleChange, handleSubmit, errors] = useForm(validate)

    function Input(props){      
        return (
            
                <input
                    id={props.name}
                    type={props.type ? props.type : 'text' } 
                    name={props.name} 
                    className="form-input"
                    placeholder={props.placeholder}
                    autoComplete="off"
                    // value={props.value}
                    // onChange={handleChange}
                    />
                // {props.error && <p>{props.error}</p>}
            
        )
    }
    // <div className="form-inputs">
    //             <label htmlFor={props.name} className="form-label">{props.label}</label>
    // </div>

    return (
        <div className="form-container">
            <form action="#" className="form" onSubmit={handleSubmit}>
                <h1>Sign up Form</h1>
                <p>Current state values</p>
                {values.firstname} - {values.lastname} - {values.email} - {values.password}
                <hr/><br/>
                <Input name='firstname' label="First name" placeholder="Enter your firstname" value={values.firstname} error={errors.firstname} onChange={handleChange}/>
                <Input name='lastname' label="Last name" placeholder="Enter your lastname" value={values.lastname} error={errors.lastname}/>
                <Input name='email' label="Email" placeholder="Enter your email" value={values.email} error={errors.email}/>
                <Input name='password' label="Password" placeholder="Enter your password" type="password" value={values.password} error={errors.password}/>
                <Input name='cpassword' label="Confirm Password" placeholder="Enter your password" type="password" value={values.cpassword} error={errors.cpassword}/>
                <button type="submit" className="form-input-btn">Sign up</button>
                <span className="form-input-login">Already have an account? Login <a href="/">here</a></span>
            </form>
        </div>
    )
}

export default FormSignup