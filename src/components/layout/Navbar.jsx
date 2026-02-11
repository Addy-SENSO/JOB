import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  return (
    <nav className="navbar">
      <h1 style={{ color: "#3666f1", fontWeight: 700 }}>
        JobPortal
      </h1>

      <div style={{ display: "flex", gap: "24px" }}>
        {/* BEFORE LOGIN */}
        {!isLoggedIn && (
          <>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </>
        )}

        {/* AFTER LOGIN */}
        {isLoggedIn && (
          <>
            <a href="/jobs">Browse Jobs</a>
            <a href="/applications">My Applications</a>
            <a href="/profile">Profile</a>
            <a href="/employer/post-job">Post Job</a>
            <a
              href="/login"
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              Logout
            </a>
          </>
        )}
      </div>
    </nav>
  );
}
