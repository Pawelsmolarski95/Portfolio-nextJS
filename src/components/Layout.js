import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const Layout = ({children}) => {
    const router = useRouter();
    return (
        <AnimatePresence mode="wait">
        <motion.div 
        key={router.route}
      
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 1
        }}
        variants={{
        //   initialState: {
        //     opacity: 0,
        //     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        //   },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
        >
          {children}
        </motion.div>
        
      </AnimatePresence>
    )
}

export default Layout;