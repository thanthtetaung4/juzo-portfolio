import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="h-screen bg-blue-700 pt-16">
      <motion.div
        className="mt-16 px-44"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          praesentium atque repellat! Obcaecati tempora possimus similique alias
          nam sint minus quibusdam praesentium reprehenderit sunt voluptates
          culpa, minima nulla ullam unde?
        </p>
      </motion.div>
    </section>
  );
};

export default About;
