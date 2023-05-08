import Footer from "../components/Footer";
import Navbar from "../components/Navbar.js";
import "@/styles/globals.css";
import 'react-typewriting-effect/dist/index.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="flex w-full h-full sm:h-screen flex-col justify-between">
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}
