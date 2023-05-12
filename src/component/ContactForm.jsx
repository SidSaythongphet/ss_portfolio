import React, { useState } from 'react';
import { send } from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      alert('You made contact!')
      setFormData({
        fullName: '',
        email: '',
        message: ''
      })
    } catch (error) {
      alert("Sorry, message did not send!")
    }

  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div class='flex justify-center mx-5'>
      <form onSubmit={ handleSubmit }>
        <input type='text' name='fullName' placeholder='Your Name' value={ formData.fullName } onChange={ handleChange } class='w-full text-black p-1 rounded-lg'/>
        <input type='email' name='email' placeholder='Email' value={ formData.email } onChange={ handleChange } class='w-full mt-3 text-black p-1 rounded-lg'/>
        <textarea type='text' name='message' placeholder='Message' value={ formData.message } onChange={ handleChange } class='w-full mt-3 h-40 text-black p-1 rounded-lg resize-none'/>
        <div class='flex justify-center'>
          <button onClick={ handleSubmit } class='bg-accent text-text1 font-oxygen rounded-lg px-3 py-2 my-2 w-[50%] md:w-[40%]'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm