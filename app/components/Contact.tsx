import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import EarthCanvas from "./3DComponents/Earth";
import Link from "next/link";

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
    <div className="h-screen flex flex-col max-w-full">
      <h3 className="text-2xl uppercase text-gray-500 pb-2 tracking-[20px] ml-5 xs:mt-14 text-center mt-20">
        Contact
      </h3>
      <div className="flex flex-col md:flex-row justify-center items-center mt-4">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 md:h-[700px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>

        <div className="flex-1 flex flex-col justify-start items-start space-y-5 md:space-y-10">
          <h4 className="text-2xl md:text-4xl font-semibold text-center">
            Get in touch.{" "}
            <span className="underline decoration-[#89cff0]/50">
              Let's Talk!
            </span>
          </h4>

          <div className="space-y-10">
            <div className="flex items-start space-x-5 justify-center">
              <EnvelopeIcon className="text-[#89cff0] h-7 w-7 animate-pulse" />
              <Link href="mailto:fabianfarid@live.de">
                <p className="text-xl underline decoration-[#89cff0]/50">
                  fabianfarid@live.de
                </p>
              </Link>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="hidden md:flex flex-col space-y-2 w-fit"
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
    </div>
  );
}

export default Contact;
