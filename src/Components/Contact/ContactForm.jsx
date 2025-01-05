import React, { useRef, useState } from "react";
import { Form, Input, Button, Textarea } from "@nextui-org/react";
import emailjs from "@emailjs/browser";

export default function ContactForm({ className }) {
  const formRef = useRef();
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const handleSubmit = async (e) => {
    setIsSubmitLoading(true);
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "Suraj@123",
        "template1",
        formRef.current,
        "WHntRLZpQ1T_XLUse"
      );
      console.log("EmailJS result:", result);
      alert(
        "Thank you for reaching out! I’ve received your message and will get back to you shortly. Have a great day!"
      );
    } catch (error) {
      console.error("Error sending email:", error);
      alert("some error occurred. Please try again later.");
    }
    formRef.current.reset();
    setIsSubmitLoading(false);
  };

  return (
    <Form
      className={`w-full flex flex-col gap-4 ${className} border-1 border-gray-900 rounded-lg shadow-sm shadow-gray-800`}
      validationBehavior="native"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <Input
        isRequired
        fullWidth
        errorMessage="Please enter your full name"
        label="Name"
        name="name"
        placeholder="Enter your full name"
        type="text"
      />

      <Input
        isRequired
        fullWidth
        errorMessage="Please enter a valid email"
        label="Email"
        name="email"
        placeholder="Enter your email"
        type="email"
      />
      <Input
        isRequired
        fullWidth
        errorMessage="Please enter subject"
        label="Subject"
        name="subject"
        placeholder="Enter subject"
        type="text"
      />
      <Textarea
        fullWidth
        label="Message"
        name="message"
        placeholder="Enter your message here"
      />
      <div className="w-full">
        <Button
          fullWidth
          isLoading={isSubmitLoading}
          type="submit"
          className="bg-blue-600"
        >
          Submit
        </Button>
      </div>
    </Form>
  );
}
