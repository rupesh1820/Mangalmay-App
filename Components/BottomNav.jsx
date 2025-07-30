import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "ℹ️" },
    { path: "/contact", label: "Contact", icon: "📞" },
    { path: "/sandhya", label: "Sandhya", icon: "🕉️" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "60px",
        background: "#fff",
        borderTop: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          style={{
            color: location.pathname === item.path ? "tomato" : "black",
            fontSize: "20px",
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>{item.icon}</span>
          <small>{item.label}</small>
        </Link>
      ))}
    </nav>
  );
}
