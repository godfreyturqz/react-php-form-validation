import React from 'react'
import useForm from './useForm'
import validate from "./validation";
import './Form.css'

const FormSignup = () => {
    const [values, errors, handleChange, handleSubmit] = useForm(validate)

    return (
        <div className="form-content-right">
            <form action="#" className="form" onSubmit={handleSubmit}>
                <h1>Get started with us today! Create your account by filling out the information below.</h1>
                <div className="form-inputs">
                    <label htmlFor="firstname" className="form-label">
                        First name
                    </label>
                    <input
                        id="firstname"
                        type="text" 
                        name="firstname" 
                        className="form-input"
                        placeholder="Enter your firstname"
                        value={values.firstname}
                        onChange={handleChange}
                        />
                    {errors.firstname && <p>{errors.firstname}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="lastname" className="form-label">
                        Last name
                    </label>
                    <input
                        id="lastname"
                        type="text" 
                        name="lastname" 
                        className="form-input"
                        placeholder="Enter your lastname"
                        value={values.lastname}
                        onChange={handleChange}
                        />
                    {errors.lastname && <p>{errors.lastname}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input 
                        id="email"
                        type="text" 
                        name="email" 
                        className="form-input"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input 
                        id="password"
                        type="password" 
                        name="password" 
                        className="form-input"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="cpassword" className="form-label">
                        Confirm Password
                    </label>
                    <input 
                        id="cpassword"
                        type="password" 
                        name="cpassword" 
                        className="form-input"
                        placeholder="Enter your password"
                        value={values.cpassword}
                        onChange={handleChange}
                        />
                    {errors.cpassword && <p>{errors.cpassword}</p>}
                </div>
                <button 
                type="submit"
                className="form-input-btn">Sign up</button>
                <span className="form-input-login">
                    Already have an account? Login <a href="/">here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup
