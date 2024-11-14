'use client'
import React, { ChangeEvent, FormEvent, useState } from "react";
import { FilledButton } from "./Button";

const Contact = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Email sent successfully!');
      } else {
        setStatus('Error sending email');
      }
    } catch (error) {
      setStatus('Error sending email');
    }
  };




  return (
    <div className="w-full py-16 px-[70px] bg-black">
      <div className="w-[400px] p-3 bg-textGrey rounded-full fixed top-10 right-10 z-[9999] shadow-lg">
        <p className="text-black font-normal text-base">{ status && status}</p>
      </div>
      <div className="w-full max-w-[1300px] mx-auto flex items-start gap-[60px]">
        <div className="w-fit flex flex-col items-start gap-4">
          <p className="text-white text-[80px] font-medium lh100">Have a</p>
          <p className="text-white text-[80px] font-black underline whitespace-nowrap lh100">
            project idea?
          </p>
        </div>

        <div className="w-full">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8" action="">
            <div className="">
              <label
                htmlFor=""
                className="text-base text-white font-medium lh160"
              >
                Full name
              </label>
              <input
              name="name"
                onChange={handleChange}
                value={formData.name}
                className="input lh160 "
                type="text"
                placeholder="What should we call you?"
              />
            </div>
            <div className="">
              <label
                htmlFor=""
                className="text-base text-white font-medium lh160"
              >
                Email
              </label>
              <input
              name="email"
                value={formData.email}
                onChange={handleChange}
                className="input lh160 "
                type="text"
                placeholder="What is your email address?"
              />
            </div>
            <div className="">
              <label
                htmlFor=""
                className="text-base text-white font-medium lh160"
              >
                Phone Number
              </label>
              <input
              name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input lh160 "
                type="text"
                placeholder="What is your phone number?"
              />
            </div>
            <div className="">
              <label
                htmlFor=""
                className="text-base text-white font-medium lh160"
              >
                Tell us about your project
              </label>
              <input
              name="message"
              value={formData.message}
                onChange={handleChange}
                className="input lh160 "
                type="text"
                placeholder="Tell us in details what you would like us to do for you"
              />
            </div>
            <FilledButton
              text="Submit Form"
              image={require("@/assets/icons/arrow-white.svg")}
              btnClass="!w-fit bg-primary !text-center !items-center !rounded-full flex-row-reverse gap-3 px-8 py-4"
              pClass="!font-medium text-white text-xl"
              cta={() => {}}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
