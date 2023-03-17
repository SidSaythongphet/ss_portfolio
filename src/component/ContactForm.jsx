import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  function handleSubmit(e) {

  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div class='flex justify-center'>
      <form onSubmit={ handleSubmit }>
        <input type='text' name='fullName' placeholder='Your Name' value={ formData.fullName } onChange={ handleChange } class='w-full'/>
        <input type='email' name='email' placeholder='Email' value={ formData.email } onChange={ handleChange } class='w-full mt-3'/>
        <input type='text' name='message' placeholder='Message' value={ formData.message } onChange={ handleChange } class='w-full mt-3 h-40'/>
      </form>
    </div>
  )
}

export default ContactForm