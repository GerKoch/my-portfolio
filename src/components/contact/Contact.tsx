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
    <div className="bg-[#2b2b2b] flex flex-col items-start justify-center px-30 pt-[100px] text-zinc-200 w-screen h-screen">
      <div className="flex flex-row gap-[190px] p-0">

        <div className="flex flex-col gap-9 border-l-8 px-10 border-amber-900 w-[600px] h-[450px]">
          <h1 className="flex items-start justify-center text-zinc-700 text-4xl w-[100px] pl-20"><span className="text-amber-600 ml-2.5 mr-2.5">Contactame</span></h1>
          <h2 className="flex items-start justify-center text-zinc-500 text-2xl">
            Me encantaría escuchar tu propuesta! <br /> Llena el formulario y me counicaré contigo a la brevedad
          </h2>
          <h2 className="flex items-start justify-center text-amber-500 text-2xl">
            ¡Gracias por pasar!
          </h2>
          <div className="flex my-[135px]">
            <ContactLinks />
          </div>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col w-[500px] h-[500px] items-start gap-10 border-b-8 border-amber-900">

          <div className="flex flex-col justify-center items-end gap-5 text-amber-700">
            <label className="text-3xl">Nombre</label>
            <input
              type="text"
              placeholder="____________________________________________________________________________"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-[500px]"
            />
          </div>

          <div className="flex flex-col justify-center items-end gap-5 text-amber-700">
            <label className="text-3xl">Email</label>
            <input
              type="email"
              placeholder="____________________________________________________________________________"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-[500px]"
            />
          </div>

          <div className="flex flex-col justify-center items-end gap-5 text-amber-700">
            <label className="text-3xl">Mensaje</label>
            <input
              name="message"
              placeholder="____________________________________________________________________________"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-[500px] "
            />
          </div>

          <div className="flex flex-row justify-center pt-14 text-amber-600">
            <button type="submit" className="text-3xl hover:text-amber-400 cursor-pointer">Enviar Mensaje</button>
          </div>


        </form>

        {status}
      </div>
    </div>
  );
};

export default Contact;
