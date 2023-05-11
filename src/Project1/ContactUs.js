import React from 'react'
import "./ContactUs.css"

function ContactUs() {
  return (
   <>
   <div className='contact'>
    <div className='left'>
        <form>
            <h1>Registration Form</h1>
            <label>FullName</label>
            <input autoFocus placeholder='fname'></input>
            <input autoFocus placeholder='lname'></input><br/>
            <label>E-Mail</label>
            <input autoFocus placeholder='Enter your email'></input><br/>
            <label>Age</label>
            <input type='number' autoFocus placeholder=''min={1} max={31}></input>
            <input  type='number'  autoFocus min={1} max={12}></input>
            <input  type='number'  autoFocus min={1950}max={2010}></input>
            <br/>
            <button type='submit'>Submit</button>

        </form>
    </div>
    <div className='right'>
        
    </div>
   </div>
   </>
  )
}

export default ContactUs