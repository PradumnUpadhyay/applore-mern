import React from 'react'
import FormMethods from '../formMethods'
import validateData from '../validation'
import { Link } from 'react-router-dom'
import './Form.css'

const FormSignup = ({submitForm}) => {

    const {handleChange, values, handleSignup, errors}=FormMethods(submitForm,validateData)

    return (
        <>
         <div className="form-container">
        <div className="form-content-left">
            <img className="form-img" src='img/img-1.svg'/>
        </div>
      <div className="form-content-right">
          <form className="form" onSubmit={handleSignup} noValidate>
              <h1>Register</h1>


              <div className="form-inputs">
                  <label htmlFor="email" className="form-label">
                 Email
                  </label>
                      <input 
                      id="email"
                      type="text"
                       name="email" 
                       value={values.email}
                       onChange={handleChange}
                       className="form-input"
                       placeholder="Enter your email"
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
                       value={values.password}
                       onChange={handleChange}
                       className="form-input"
                       placeholder="Enter password"
                       />
                {errors.password && <p>{errors.password}</p>}
              </div>
              <div className="form-inputs">
                  <label htmlFor="confirm-password" className="form-label">
                  Confirm Password
                  </label>
                      <input 
                      id="confirm-password"
                      type="password"
                       name="confirmPassword" 
                       value={values.confirmPassword}
                       onChange={handleChange}
                       className="form-input"
                       placeholder="Confirm password"
                       />
                       {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
              </div>
              <button 
              className="form-input-btn" 
              type="submit">
                Sign up
              </button>

              <span className="form-input-login">
                  Already have an account? 
                  <Link to="/login">Login</Link>
              </span>
          </form>
      </div>
      </div>
      </>
    )
}

export default FormSignup
