import React from 'react'
import './Contact.css'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0a9dff21-d586-429e-99fa-84985b3d975b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
      <h1>Get in touch</h1>
      <div className='contact-part'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <div className='contact-para'>
            <p>I'm Corrently available to take new Projects. so fill free to send me a message about anything you want me to work on You can conatct me anytime</p>
          </div>
          <div className='icon'>
          <div className='gmail-icon'>
          <i class="fa-solid fa-envelope"></i>
          <p>lalanlumartanti3@gmail.com</p>
          </div>
          <div className='gmail-icon'>
          <i class="fa-solid fa-phone"></i>
          <p>91+ 7483824106</p>
          </div>
          
            <div className='gmail-icon'>
            <i class="fa-solid fa-location-dot"></i>
          <p> Current Adress: Kudlu Gate,bangluru karnatka</p>

          </div>
      
          </div>
        </div>
        <form className='contact-right' onSubmit={onSubmit}>
          <div  className='input-form'>
          <label htmlFor=''>Name</label>
          <input type='text' name='name' placeholder='Enter your name'/>
          </div>
          <div className='input-form'>
          <label htmlFor=''>Email</label>
          <input type='text' name='email' placeholder='Enter your Gmail'/>
          </div>
          <div className='input-form'>
          <label htmlFor=''>Number</label>
          <input type='number' name='phone' placeholder='Enter Mobile Number'/>
          </div>
          
          <div className='text-area'>
          <label htmlFor=''>Enter Your Message Here</label>
          <input type='textarea' name='message' aria-rowcount ="8"  placeholder='Enter your message here' className='message-area'/>
          </div>
          
          <button className='contact-submit'>Submit</button>
        </form>
        <span>{result}</span>
      
      </div>
    </div>
  )
}

export default Contact
