"use client"

import React, { useState } from "react"
import InputField from "./InputField" // Importing reusable input field component
import TextAreaField from "./TextAreaField" // Importing reusable textarea field component
import axios from "axios"

export default function ContactForm({ fields, form, type, btn, bg }) {
  const [formData, setFormData] = useState(
    fields.reduce(
      (acc, field) => {
        acc[field.id] = ""
        return acc
      },
      { formType: type }
    ) // Include form type in initial state
  )

  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!re.test(String(email).toLowerCase())) {
      return false
    }
    const domain = email.split("@")[1].toLowerCase()
    const typos = {
      "gamil.com": "gmail.com",
      "gmil.com": "gmail.com",
      "gmial.com": "gmail.com",
      "yaho.com": "yahoo.com",
      "yahooo.com": "yahoo.com",
      "yhoo.com": "yahoo.com",
      "hotnail.com": "hotmail.com",
      "hotmails.com": "hotmail.com",
      "outlok.com": "outlook.com",
    }
    if (typos[domain]) {
      return `Did you mean ${typos[domain]}?`
    }
    return true
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}

    // Check for empty fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key} is required`
      }
    })

    // Email validation
    const emailValidationResult = validateEmail(formData.email)
    if (formData.email && emailValidationResult !== true) {
      newErrors.email =
        typeof emailValidationResult === "string"
          ? emailValidationResult
          : "Invalid email address"
    }

    // If there are errors, set the errors state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    setSuccessMessage("")

    try {
      const formDataToSend = new FormData()
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key])
      })

      const response = await axios.post(
        "https://docs.cms.org.in/wp-json/contact-form-7/v1/contact-forms/10383/feedback",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )

      console.log("Form data sent:", formDataToSend)
      setSuccessMessage("Thank you for contacting us.")
      setFormData(
        fields.reduce(
          (acc, field) => {
            acc[field.id] = ""
            return acc
          },
          { formType: type }
        )
      )
      setErrors({})
      console.log("Form submitted successfully", response.data)
    } catch (error) {
      console.error("Error submitting form", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }))
  }

  const renderError = (field) => {
    return errors[field] ? (
      <span className="text-red-500 text-sm">{errors[field]}</span>
    ) : null
  }

  return (
    <form
      className="w-full max-w-screen-lg mx-auto"
      onSubmit={handleFormSubmit}
    >
      {successMessage && (
        <div
          class="mb-4 text-lg text-white rounded-lg  dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span class="font-medium">Submitted!</span> {successMessage}
        </div>
      )}
      <div className={`grid-cols-${form} grid gap-4`}>
        {fields.map((field) => (
          <div
            key={field.id}
            className={`${
              field.type === "textarea"
                ? `col-span-2 text-black`
                : "flex flex-col w-full"
            }`}
          >
            <label htmlFor={field.id} className="text-white">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <TextAreaField
                id={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                className="text-black"
              />
            ) : (
              <InputField
                type={field.type}
                id={field.id}
                value={formData[field.id]}
                onChange={handleChange}
              />
            )}
            {renderError(field.id)}
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          type="submit"
          className={`${
            form === "2"
              ? `px-4 py-2 ${bg} rounded ${btn} text-lg sm:text-xl`
              : `px-4 py-2 ${bg} rounded ${btn} text-lg sm:text-xl`
          }`}
        >
          Submit
        </button>
      </div>
    </form>
  )
}
