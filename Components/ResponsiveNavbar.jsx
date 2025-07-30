import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

export default function ResponsiveNavbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // <768px = mobile view
    };

    handleResize(); // run on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <BottomNav />
      ) : (
        <>
          <Navbar position="top" />
          <Navbar position="left" />
        </>
      )}
    </>
  );
}
