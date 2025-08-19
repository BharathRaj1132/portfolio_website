import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Preloader from "./components/Preloader";

const CustomCursor = () => {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const ring = ringRef.current;
    const dot = dotRef.current;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    const followSpeed = 0.18; // lower = more lag

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // dot sticks to the pointer
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;

      // highlight when hovering interactive things
      const interactive = e.target.closest(
        "a, button, .btn, [role='button'], input, textarea, select, .project-card"
      );
      if (interactive) {
        ring.classList.add("cursor-hover");
        dot.classList.add("cursor-hover");
      } else {
        ring.classList.remove("cursor-hover");
        dot.classList.remove("cursor-hover");
      }
    };

    const raf = () => {
      // ring trails behind the pointer
      ringX += (mouseX - ringX) * followSpeed;
      ringY += (mouseY - ringY) * followSpeed;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(raf);
    };

    const hide = () => {
      ring.classList.add("cursor-hidden");
      dot.classList.add("cursor-hidden");
    };
    const show = () => {
      ring.classList.remove("cursor-hidden");
      dot.classList.remove("cursor-hidden");
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);
    window.addEventListener("blur", hide);
    window.addEventListener("focus", show);

    requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
      window.removeEventListener("blur", hide);
      window.removeEventListener("focus", show);
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" ref={ringRef} />
      <div className="cursor-dot" ref={dotRef} />
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
