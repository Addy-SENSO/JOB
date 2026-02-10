export default function Login() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div className="card" style={{ width: "420px" }}>
        <h2>Welcome Back</h2>
        <p style={{ color: "#6b7280", marginBottom: "20px" }}>
          Sign in to continue
        </p>

        <input className="input" placeholder="Email address" />
        <input className="input" type="password" placeholder="Password" style={{ marginTop: "12px" }} />

        <button className="btn-primary" style={{ width: "100%", marginTop: "20px" }}>
          Sign In
        </button>
      </div>
    </div>
  );
}
