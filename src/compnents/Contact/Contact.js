import React,{useState} from 'react';
import "./Contact.css";
import conatcimg from '../../Images/office.jpg';
const emregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const number ='1234567890';
const Contact = () => {
const[name, setName] =useState();
const[email, setEmail] =useState();
const[phone, setPhone] =useState();
const[nameError, setNameError] = useState(false);
const[emailError, setEmailError] = useState(false);
const[phonelError, setPhoneError] = useState(false);


const handleName = (e) =>{
    setName(e.target.value);
  if(name.length < 3){
    setNameError(true);
  }
  else{
    setNameError(false);
  }
}

     const handleEmail = (e) =>{
      setEmail(e.target.value)

      if(!email.match(emregex)){
               setEmailError(true)
      }else{
         setEmailError(false)    
          }
     }
     const handlePhone = (e) => {
      setPhone(e.target.value)
      if(!phone.match( number)){
        setPhoneError(true);
     }else{
      setPhoneError(false)
     }
    }
  return (
    <div id='contact'>
        <div className='container'>
            <div className='wrapper_conatct'>
              <div className='contact_col'>
                <div className='contact_image'>
                  <img src={conatcimg} alt='conatct_img'/>
                </div>
              </div>

              <div className='contact_col'>
                <h2>Contact Us</h2>
                <form>
                  <div className='input_wrapper'>
            
                    <input type='text' name='name' value={name} onChange={handleName} className='form_control' placeholder='Your Name...' autoComplete='off'/>
                  </div>
              
                    {nameError ?<span style={{color:"var(--primary-color)"}}>Name must be greather than 3 char...</span>:""}
                  <div className='input_wrapper'>
                    <input type='email' name='name' value={phone} onChange={handlePhone} className='form_control' placeholder='Your Phone...' autoComplete='off'/>
                  </div>
                  {phonelError ? <span style={{color:"var(--primary-color)"}}>Only Number..</span>: ""}
                  <div className='input_wrapper'>
                    <input type='email' name='email' value={email} onChange={handleEmail} className='form_control' placeholder='Your Email...' autoComplete='off'/>
                  </div>
                  {emailError ? <span style={{color:"var(--primary-color)"}}>Invalid Email</span> : ""}
                  <div className='input_wrapper'>
                    <textarea placeholder='Write a Message...'></textarea>
                  </div>
                  <div className='btn_wrapper'>
                    <button type='submit' className='btn'>Submit</button>
                  </div>
                </form>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Contact
