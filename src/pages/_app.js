import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar.js";
import "@/styles/globals.css";
import 'react-typewriting-effect/dist/index.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col justify-betwen">
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}
