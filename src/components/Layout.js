import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75 },
  },
  exit: {
    opacity: 0,
    x: "-100%",
    transition: { duration: 0.75 },
  },
};

const Layout = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      transition={{
        duration: 1.0,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
