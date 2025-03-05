"use client"

import React, { useState } from "react";
import ContactLinks from "../contactLinks/ContactLinks";


interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_MAIL_KEY || "");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      const data = await res.json();

      if (data.success) {
        setStatus("¡Mensaje enviado con éxito!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Hubo un error, por favor intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus("Hubo un error, por favor intenta nuevamente.");
    }
  };

  return (
    <div className="bg-[#2b2b2b] flex flex-col pt-[550px] pb-[460px] items-center justify-center px-4 sm:px-30 sm:py-6 sm:pt-40 w-full h-screen">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-40">

        <div className="flex flex-col gap-6 sm:gap-9 px-4 sm:px-10 border-l-8 sm:w-[500px] sm:h-[450px] border-amber-900">
          <h1 className="text-zinc-700 text-3xl sm:text-4xl text-center sm:text-left">
            <span className="text-amber-600">Contactame</span>
          </h1>
          <h2 className="text-zinc-500 text-lg sm:text-2xl text-center sm:text-left">
            Me encantaría escuchar tu propuesta! <br /> Llena el formulario y me comunicaré contigo a la brevedad
          </h2>
          <h2 className="text-amber-500 text-lg sm:text-2xl text-center sm:text-left">
            ¡Gracias por pasar!
          </h2>
          <div className="flex justify-center sm:justify-start pt-32">
            <ContactLinks />
          </div>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col sm:gap-3 sm:w-[500px] border-b-8 border-amber-900 py-6 sm:pt-0">

          <div className="flex flex-col gap-4 sm:gap-3 text-amber-700">
            <label className="text-xl sm:text-3xl">Nombre</label>
            <input
              type="text"
              placeholder="Ingresa tu nombre aquí"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 w-full border-2 border-amber-500 rounded-md bg-zinc-800 text-zinc-200 placeholder-zinc-500"
            />
          </div>

          <div className="flex flex-col gap-4 sm:gap-3 text-amber-700">
            <label className="text-xl sm:text-3xl pt-3">Email</label>
            <input
              type="email"
              placeholder="Ingresa tu email aquí"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 w-full border-2 border-amber-500 rounded-md bg-zinc-800 text-zinc-200 placeholder-zinc-500"
            />
          </div>

          <div className="flex flex-col gap-4 sm:gap-3 text-amber-700">
            <label className="text-xl sm:text-3xl pt-3">Mensaje</label>
            <textarea
              name="message"
              placeholder="Ingresa tu mensaje aquí"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 w-full border-2 border-amber-500 rounded-md bg-zinc-800 text-zinc-200 placeholder-zinc-500"
              rows={5}
            />
          </div>

          <div className="flex justify-end pt-6 sm:pt-3">
            <button type="submit" className="text-2xl sm:text-3xl text-amber-600 hover:text-amber-400 cursor-pointer">
              Enviar Mensaje
            </button>
          </div>

        </form>
      </div>

      <div className="text-center text-xl text-amber-600 mt-4">{status}</div>
    </div>
  );
};

export default Contact;
