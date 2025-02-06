import { useEffect, useState } from "react";
import "./css/App.css";
import Content from "./components/Content";
import DeviceCheck from "./components/DeviceCheck";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
        AOS.init({
          duration: 800,
          once: true,
          offset: 200,
          easing: "ease-in-out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <>
      <DeviceCheck>
        <div className="App">
          <Content />
        </div>
      </DeviceCheck>
    </>
  );
}

export default App;
