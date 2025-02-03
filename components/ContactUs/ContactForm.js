"use client"
import React, { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    organisation: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      organisation: "",
    })
    setIsSubmitted(true)
    console.log("Form data submitted:", formData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full lg:w-[950px] mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <p className="text-gray-700 mb-4">
        {isSubmitted
          ? "Submitted! Thank you for contacting us."
          : "Please note: all fields are required."}
      </p>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="w-full p-2 shadow border-none rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="w-full p-2 shadow border-none rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="w-full p-2 shadow border-none rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email ID:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 shadow border-none rounded-md"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Organisation:</label>
        <input
          type="text"
          name="organisation"
          value={formData.organisation}
          onChange={handleChange}
          required
          className="w-full p-2 shadow border-none rounded-md"
        />
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
  )
}

export default ContactForm
