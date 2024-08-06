import React, { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroller = () => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollTotal = documentHeight - windowHeight; // Corrected the typo
    const scroller = (scrollTop / scrollTotal) * 100;
    setScrollPercentage(scroller);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroller);
    return () => window.removeEventListener("scroll", handleScroller);
  }, []);

  return (
    <div className="w-full bg-slate-50 h-2 fixed top-0 left-0">
      <div
        className="h-full bg-blue-500"
        style={{ width: `${scrollPercentage}%`, transition: "width 0.1s" }}
      />
    </div>
  );
};

export default ScrollIndicator;
