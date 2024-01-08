import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:fabianfarid@live.de?subject=${formData.subject}&body=Hi,%0D%0Amy name is ${formData.name}.%0D%0A%0D%0A${formData.message}%0D%0A%0D%0AI hope you have a great day,%0D%0A%0D%0A${formData.name}%0D%0A(${formData.email})%0D%0A%0D%0A`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Get in touch.{" "}
          <span className="underline decoration-[#89cff0]/50">Let's Talk!</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#89cff0] h-7 w-7 animate-pulse" />
            <p className="text-2xl">fabianfarid@live.de</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#89cff0] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Germany</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-[#89cff0] dark:bg-[#6fcbf5] text-white dark:text-gray-900 py-5 px-10 rounded-md font-bold text-lg dark:hover:bg-[rgb(34,34,34)] dark:hover:text-[#6fcbf5] hover:bg-white hover:text-[#89cff0] transition-all duration-200 ease-in-out border border-[#89cff0]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
