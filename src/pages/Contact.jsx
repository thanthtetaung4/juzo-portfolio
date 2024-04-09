import { motion, stagger } from "framer-motion";

const Contact = () => {
  return (
    <section className="h-screen bg-blue-700 pt-16">
      <motion.div
        className="mt-16 px-44"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Contact
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          praesentium atque repellat! Obcaecati tempora possimus similique alias
          nam sint minus quibusdam praesentium reprehenderit sunt voluptates
          culpa, minima nulla ullam unde?
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;
