import React from "react"
import './form.scss'
import '../button/button.scss'


const { useState } = React


function useTouchedFields() {
    const [touchedFields, setTouchedFields] = useState({ all: false })
    
    const setFieldTouched = (event) => {
      setTouchedFields((touchedFields) => ({
        ...touchedFields, 
        [event.target.name]: true
      }))
    }
    
    const setAllFieldsTouched = (event) => {
      setTouchedFields({ all: true })
    }
    
    const bindField = (fieldName) => ({
      "data-touched": touchedFields.all || touchedFields[fieldName],
      onBlur: setFieldTouched,   
    })
    
    return [bindField, setAllFieldsTouched]
  }
  
  const ContactForm = () => {
    const [bindField, setAllFieldsTouched] = useTouchedFields()

    
    return (
      <form className="container"
        onSubmit = {(event) => {
          event.preventDefault()
          const formData = new FormData(event.target)
          const data = Object.fromEntries(formData.entries())
          console.log(data) 
        }}
      >
        <fieldset>
          <label htmlFor="name">Navn</label>
          <input 
            id="name" 
            name="name" 
            type="text"           
      

            {...bindField("name")}
            required
            />
          <div className="form-required-message">Et navn er påkrævet.</div>
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
        

            {...bindField("email")}
            required  
          />
          <div className="form-required-message">Der kræves en gyldig e-mail.</div>
        </fieldset>
        <fieldset>
          <label htmlFor="tel">Mobil</label>
          <input 
            id="tel" 
            name="tel" 
            type="tel" 
                          
            {...bindField("tel")}
            required 
          />
          <div className="form-required-message">Et gyldigt telefonnummer er påkrævet.</div>
        </fieldset>
        <fieldset>
          <label htmlFor="message">Besked</label>
          <textarea 
            id="message" 
            name="message" 
            type="textarea" 
            rows="3" 
           

            {...bindField("message")}
            required 
          />
          <div className="form-required-message">En besked er påkrævet.</div>
        </fieldset>
        <button className="btn" onClick={() => setAllFieldsTouched()} type="submit">
          Send besked
        </button>
      </form>
    )
  }
  
  export default ContactForm
