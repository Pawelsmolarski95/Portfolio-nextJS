import Footer from "../components/Footer";
import Navbar from "../components/Navbar.js";
import "@/styles/globals.css";
import "react-typewriting-effect/dist/index.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className="flex w-full h-full sm:h-screen flex-col justify-between">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div 
        key={router.route}
        initial="initailState"
        animate="animateState"
        exit="exitState"
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
        >
          <Component {...pageProps} />
        </motion.div>
        
      </AnimatePresence>

      <Footer />
    </div>
  );
}
