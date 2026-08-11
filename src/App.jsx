import "./App.css";
import ContactUs from "./components/contact/ContactUs";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { useEffect,useState } from "react";

/**
 * Main Application Component
 * Renders the complete page layout with all sections
 */
function App() {
  const [showBtnTop, setShowBtnTop] = useState(false);

  const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "dark";
});



  useEffect(() => {
    const handleScroll = () => {
      setShowBtnTop(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`parentProject ${theme}`}>
      <div className={`container `} id="top">
      <Header theme={theme} setTheme={setTheme}/>
      {/* <div className="divider" /> */}

      <Hero />
      <div className="divider" />

      <Main />
      <div className="divider" />

      <ContactUs />
      <div className="divider" />

      <Footer />
      
        <a href="#top" style={{opacity:showBtnTop?1:0}} className="link-scroll2Top">
          <button className="scroll2Top">
            <i className="icon-keyboard_arrow_up" />
          </button>
        </a>
      
    </div>
    </div>
    
  );
}

export default App;
