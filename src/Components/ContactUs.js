// ContactUs.js
import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Error sending message.');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className=' text-center flex flex-col items-center'>
                <div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea name="message" className="form-control" onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;
