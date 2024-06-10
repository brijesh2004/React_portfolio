import React, { useState } from 'react';
import './ski.css';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submit, setSubmit] = useState("Submit");
  
    const storeTheMessage = async (e) => {
      e.preventDefault();
      setSubmit("Submiting...");
      const res = await fetch('https://portfoliobackend-59j6.onrender.com/addmessage', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, message
        })
      })
      setSubmit("Submit");
      // const data = await res.json();
      if (res.status === 401 || res.status === 500) {
        window.alert("Message Not Added");
      }
      else {
        window.alert(" Message Added Successfully");
        console.log("Message Added Successfully");
        setEmail('');
        setMessage('');
        setName('');
      }
    }
  
    const handleInputs = (event) => {
      const { name, value } = event.target;
      if (name === 'email') {
        setEmail(value);
      } else if (name === 'message') {
        setMessage(value);
      }
      else if (name === 'name') {
        setName(value);
      }
    }
  return (
    <div className='contact_main_page'>
     <form className='contact_form'>
          <label htmlFor="name">Name:</label><br />
          <input type="text" placeholder='Name' className='inp' name='name' onChange={handleInputs} value={name} autoComplete='off' required /> <br />
           <label htmlFor="email">Email:</label><br />
          <input type="email" placeholder='Email' className='inp' name='email' onChange={handleInputs} value={email} autoComplete='off' required /> <br />
          <label htmlFor="message">Message:</label><br />
          <textarea name="message" id="" cols="30" rows="10" placeholder='message' onChange={handleInputs} value={message} autoComplete='off' required></textarea> <br />
          <input type="button" value={submit} className='submit_btn' onClick={storeTheMessage} />
        </form>
        <br /><br /><br /><br /><br />
      
    </div>
  )
}

export default ContactForm
