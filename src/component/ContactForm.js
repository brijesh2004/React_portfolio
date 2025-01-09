import React, { useState } from 'react';
import './ski.css';
import {Button , TextField} from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';


const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submit, setSubmit] = useState("Submit");
  
    const storeTheMessage = async (e) => {
      e.preventDefault();
      if(!name||!email||!message){
        alert("all fields are required");
        return;
      }
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
          <TextField style={{backgroundColor:'gray' , width:'300px'}} name='name' onChange={handleInputs} value={name} id="outlined-basic" label="Name" variant="outlined" color='secondary'/> <br /><br />
          <TextField style={{backgroundColor:'gray' , width:'300px'}} name='email' onChange={handleInputs} value={email} id="outlined-basic" label="Email" variant="outlined" color='secondary'/>
          <br /><br />
          <TextareaAutosize style={{backgroundColor:'gray' , width:'300px'}} name='message' aria-label="minimum height" minRows={3} placeholder="message" onChange={handleInputs} value={message}/>
          <br />
          <Button variant="contained" onClick={storeTheMessage} >{submit}</Button>
        </form>
        <br /><br /><br /><br /><br />
      
    </div>
  )
}

export default ContactForm
