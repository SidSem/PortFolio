import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { socialLinks } from "../constants";
import {
  getEmailJsConfig,
  isEmailJsConfigured,
} from "../config/emailjs";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    if (isEmailJsConfigured()) {
      emailjs.init(getEmailJsConfig().publicKey);
    }
  }, []);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all fields before sending your message.",
      });
      return;
    }

    if (!isEmailJsConfigured()) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured yet. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.",
      });
      return;
    }

    setLoading(true);

    try {
      const { serviceId, templateId, publicKey } = getEmailJsConfig();

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          message: form.message.trim(),
        },
        publicKey
      );

      setStatus({
        type: "success",
        message: "Message sent successfully.",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <p className='mt-4 text-secondary text-[15px] leading-[26px]'>
          I'm open to internships, collaborations, and project opportunities.
          Feel free to reach out — I'd love to connect.
        </p>

        <div className='mt-6 flex flex-col gap-3'>
          <a
            href={`mailto:${socialLinks.email}`}
            className='text-white-100 text-[15px] hover:text-[#915EFF] transition-colors'
          >
            {socialLinks.email}
          </a>
          <a
            href={socialLinks.github}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white-100 text-[15px] hover:text-[#915EFF] transition-colors'
          >
            GitHub — @SidSem
          </a>
          <a
            href={socialLinks.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white-100 text-[15px] hover:text-[#915EFF] transition-colors'
          >
            LinkedIn — Siddharth Semwal
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What would you like to discuss?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {status.message && (
            <p
              className={`text-[14px] font-medium ${
                status.type === "success" ? "text-green-400" : "text-red-400"
              }`}
              role='alert'
            >
              {status.message}
            </p>
          )}

          <button
            type='submit'
            disabled={loading}
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary disabled:opacity-60'
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
