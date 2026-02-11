import { Outlet, Link } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div style={{ height: "100vh", display: "flex" }}>
      
      {/* LEFT SIDE / OPTIONS */}
      <div style={{ width: "40%", padding: "40px" }}>
        <h2>JobPortal</h2>

        <button>Job Seeker</button>
        <button>Employer</button>

        <p>
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register">Register</Link>
        </p>
      </div>

      {/* RIGHT SIDE / FORM */}
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet /> {/* Login or Register appears here */}
      </div>
    </div>
  );
}