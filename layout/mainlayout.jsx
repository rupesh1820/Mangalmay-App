import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import BottomNav from "../Components/BottomNav";

export default function MainLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar for Desktop */}
      {!isMobile && <Navbar position="left" />}

      <div style={{ flex: 1, marginTop: !isMobile ? "60px" : "0", padding: "20px" }}>
        {!isMobile && <Navbar position="top" />}
        <Outlet />
      </div>

      {/* Bottom Navigation for Mobile */}
      {isMobile && <BottomNav />}
    </div>
  );
}
