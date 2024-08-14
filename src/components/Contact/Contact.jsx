import React, {useEffect} from 'react'
import '../Contact/Contact.css'

const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
    //   setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1deb084a-8964-4bfc-ac17-2b4ab3acb7ff");
  
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

    useEffect(() => {
        if (result) {
          alert(result);
        }
      }, [result]);



  return (

   <div id='contact' className="contact-us">
        <h1 className='contect-head'>Contact Me</h1>
        <div className="contact-conatainer">
            <div className="info">
                <h1>Feel Free to talk</h1>
                <p>I'm avaliable for any typr of Web Project. You can contact me using the given details below.</p>
                <div className="gmail"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg> hamidjaved@gmail.com</div>
                <div className="num"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg> +923156107225</div>
                <div className="loction"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path></svg> Pakistan</div>
            </div>
            <form onSubmit={onSubmit} className="input">
                <div className="user-name">
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" id="" placeholder='Enter Your Name'/>
                </div>
                <div className="user-mail">
                    <label htmlFor="">Your Email</label>
                    <input type="email" name='email' placeholder='Enter Email' />
                </div>
                <div className="message">
                    <label htmlFor="">Your Message</label>
                    <textarea name="message" id=""></textarea>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact