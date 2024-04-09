import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

let tabs = [
  { id: "casa", label: "Casa" },
  { id: "about", label: "About" },
  { id: "arts", label: "Arts" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setActiveTab(pathname === "/" ? "casa" : pathname.replace("/", ""));
  }, [location, pathname, activeTab]);

  return (
    <>
      <motion.nav
        className="flex justify-center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
      >
        <div className="fixed mt-5 flex space-x-1 rounded-full bg-black px-3 py-3">
          {tabs.map((tab) => (
            <Link
              to={tab.id === "casa" ? "/" : tab.id}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "" : "hover:text-white/60"
              } relative rounded-full px-5 py-3 text-xl font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </Link>
          ))}
        </div>
      </motion.nav>
      <Outlet />
    </>
  );
};

export default Navbar;
