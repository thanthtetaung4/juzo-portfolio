import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <ul>
          <li>Dummy Link</li>
          <li>Dummy Link</li>
          <li>Dummy Link</li>
        </ul>
      </motion.nav>
      <Outlet />
    </>
  );
};

export default Navbar;
