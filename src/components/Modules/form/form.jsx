import React, { Fragment } from "react";
import './form.scss'
import '../button/button.scss'
import {Popup} from './popup'

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

    // function showPopup() {
    //     if( setTouchedFields({ all: true })  ){
            
    //     } 
        
    // }
    return [bindField, setAllFieldsTouched, ]
  }
  
  const ContactForm = () => {
    const [bindField, setAllFieldsTouched] = useTouchedFields()

    const [visiblePopup, setVisiblePopup] = React.useState(false);
    
    return (
        <Fragment>
      <form className="container"
        onSubmit = {(event) => {
          event.preventDefault()
          const formData = new FormData(event.target)
          const data = Object.fromEntries(formData.entries())
          console.log(data) 
          setVisiblePopup( !visiblePopup)
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
        {visiblePopup && (
        <div>
          <div
            onClick={() => setVisiblePopup(false) & window.location.reload(false)}
            className="popup-overlay"

          ></div>
          <div className="popup">
        
            <button
              onClick={() => setVisiblePopup(false) & window.location.reload(false)}
              className="close-popup"
            ></button>
            <div className="popup__content"> <Popup/></div>
          </div>
        </div>
          )}
        
      </form>
      </Fragment>
    )
   
    }
        export default ContactForm
