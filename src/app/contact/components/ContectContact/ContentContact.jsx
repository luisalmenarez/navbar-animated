"use client";
import { slide } from "@/app/assets/anim";
import Rounded from "@/common/RoundedButton";
import Container from "@/components/Shared/Container";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import ContactDetails from "../ContactDetails/ContactDetails";
import { useForm } from "react-hook-form";

const ContentContact = () => {
  const { register, handleSubmit } = useForm();

  const anim = (variants) => {
    return {
      initial: "initial",

      animate: "enter",

      exit: "exit",

      variants,
    };
  };

  return (
    <Container className="grid md:grid-cols-3 lg:pl-72">
      <motion.div
        {...anim(slide)}
        className="container grid order-2 md:order-1 md:col-span-2 md:gap-8 lg:grid-cols-3 lg:gap-12 xl:gap-24">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className="space-y-8 lg:col-span-3">
          <div className="py-10 pt-48 space-y-6 ">
            <label
              htmlFor="name"
              className="block pt-20 text-4xl italic font-bold text-gray-300 border-t-2 border-gray-50/10">
              ¿Cuál es tu nombre?
            </label>
            <input
              id="name"
              className="w-full px-4 py-8 text-2xl text-gray-200 bg-transparent border-b-2 rounded-md border-gray-50/10 focus:outline-none"
              placeholder="John Doe *"
              {...register("name")}
            />
          </div>
          <div className="py-10 space-y-6">
            <label
              htmlFor="email"
              className="block text-4xl italic font-bold text-gray-300">
              ¿Cuál es tu email?
            </label>
            <input
              id="email"
              className="w-full px-4 py-8 text-2xl bg-transparent border-b-2 rounded-md border-gray-50/10 text-gray-50 focus:outline-none"
              placeholder="john@doe.com *"
              type="email"
              {...register("email")}
            />
          </div>
          <div className="py-10 space-y-6">
            <label
              htmlFor="message"
              className="block text-4xl italic font-bold text-gray-50">
              Mensaje
            </label>
            <textarea
              className="w-full px-4 py-4 text-2xl bg-transparent rounded-md text-gray-50 focus:outline-none"
              id="message"
              placeholder="Hola Luis, me gustaría tenerte en nuestro equipo... *"
              style={{ resize: "none" }}
              {...register("message")}
            />
          </div>
          <div className="grid w-full">
            <motion.div className={styles.stripForm}>
              <article className={styles.buttonContainer}>
                <button type="submit">
                  <Rounded
                    backgroundColor={"#334BD3"}
                    className={styles.button}>
                    <p>Enviar</p>
                  </Rounded>
                </button>
              </article>
            </motion.div>
          </div>
        </form>
      </motion.div>
      <ContactDetails />
    </Container>
  );
};

export default ContentContact;
