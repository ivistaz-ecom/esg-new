"use client";
import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    organisation: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Remove error message when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
  
    // Validate empty fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required.`;
      }
    });
  
    // Phone number validation (only numbers and max 13 digits)
    const phoneNumberRegex = /^[0-9]+$/;
    if (formData.phoneNumber && !phoneNumberRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must only contain numbers.";
    } else if (formData.phoneNumber && formData.phoneNumber.length > 13) {
      newErrors.phoneNumber = "Phone number cannot be longer than 13 digits.";
    }
  
    // Set errors if any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });
  
      const response = await axios.post(
        "https://docs.cms.org.in/wp-json/contact-form-7/v1/contact-forms/11057/feedback",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      if (response.data.status === "mail_sent") {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          organisation: "",
        });
        setErrors({});
      } else {
        setErrors({ form: "Submission failed. Please try again." });
      }
    } catch (err) {
      setErrors({ form: "An error occurred. Please check your details and try again." });
      console.error("Form submission error:", err);
    }
  };
  

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full lg:w-[950px] mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <p className=" mb-4">
        {isSubmitted
          ? <div className="text-green-500">Submitted! Thank you for contacting us.</div>
          : <div>Please note: all fields are required.<span className="text-red-500">*</span></div>}
      </p>

      {errors.form && <p className="text-red-500 mb-4">{errors.form}</p>}

      <div className="mb-4">
        <label className="block text-gray-700 mb-5">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-3 border border-gray-100 shadow-md rounded-sm "
        />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-5">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-3 border border-gray-100 shadow-md rounded-sm "
        />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-5">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full p-3 border border-gray-100 shadow-md rounded-sm "
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-5">Email ID</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-100 shadow-md rounded-sm "
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-5">Organisation</label>
        <input
          type="text"
          name="organisation"
          value={formData.organisation}
          onChange={handleChange}
          className="w-full p-3 border border-gray-100 shadow-md rounded-sm "
        />
        {errors.organisation && <p className="text-red-500 text-sm">{errors.organisation}</p>}
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-cms-primary text-white px-4 py-2 rounded-md hover:bg-cms-primary-green"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
