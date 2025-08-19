import React, { useEffect, useState } from "react";
import "../styles/preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800); // 2.2s duration
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (<div>
    <div className="preloader"><h3>Entering portfolio</h3>&nbsp;&nbsp;
      <div className="loader">
        
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div></div>
  );
};

export default Preloader;
