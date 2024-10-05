import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData();
    
    form.append("access_key", "4063057d-c511-48ea-815e-a42d223a2b9e");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject);
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });

      const data = await response.json();

      if (data.success) {
        event.target.reset();
        alert("Form submitted successfully!");
      } else {
        console.log("Error", data);
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to submit the form.");
    }
  };

  return (
    <div className="back3">
      <div className="info">
        <p className="pp">Feel free to contact me</p>
        <p className="xx">Get in touch</p>
      </div>
      <form className="infor" onSubmit={onSubmit}>
        <div className="l">
          <p className="msg">Message Me</p>
          <div className="combo">
            <div className="name">
              <input
                className='pq1'
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Name'
                required
              />
              <input
                className='pq'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                required
              />
              <input
                className='vas'
                type='text'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                placeholder='Subject'
                required
              />
              <div className="mess">
                <textarea
                  className="mess2"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Message'
                  required
                />
              </div>
              <button type="submit" className="btn btn-success" style={{ height: '50px', width: '300px', fontSize: '18px', borderRadius: '30px', marginTop: '14px',marginRight:'300px' }}>
                Send Message
              </button>
            </div>
          </div>
        </div>
        <div className="r">
          <h1>Contact Info</h1>
          <p>Always available for freelancing work if the right project comes along, feel free to contact me!</p>
          <div className="mis2">
            <div className="left2">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person-circle text-success" viewBox="0 0 16 16" style={{ marginTop: '10px' }}>
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-map-fill text-success" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.5.5 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.5.5 0 0 0-.196 0zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-telephone-fill text-success" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-envelope-at-fill text-success" viewBox="0 0 16 16">
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034z" />
              </svg>
            </div>
            <div className="right2">
              <div className="vall">
                <p className='vv'>Name</p>
                <p>Varshita</p>
              </div>
              <div className="vall">
                <p className='vv'>Location</p>
                <p>IIT Dhanbad, Dhanbad, Jharkhand, 826001</p>
              </div>
              <div className="vall">
                <p className='vv'>Contact No.</p>
                <p>9693608718</p>
              </div>
              <div className="vall">
                <p className='vv'>Email</p>
                <p>Varshitagupta123@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
