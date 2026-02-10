export default function Register() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9fafb",
      }}
    >
      <div className="card" style={{ width: "420px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "6px" }}>
          Create Account
        </h2>

        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            marginBottom: "24px",
          }}
        >
          Join thousands of professionals
        </p>

        {/* Role Selector */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
          <button
            className="btn-primary"
            style={{ flex: 1, padding: "10px" }}
          >
            Job Seeker
          </button>

          <button
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "12px",
              border: "1px solid #d1d5db",
              background: "white",
              cursor: "pointer",
            }}
          >
            Employer
          </button>
        </div>

        {/* Inputs */}
        <input className="input" placeholder="Full Name" />
        <input
          className="input"
          placeholder="Email Address"
          style={{ marginTop: "12px" }}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          style={{ marginTop: "12px" }}
        />

        {/* Submit */}
        <button
          className="btn-primary"
          style={{ width: "100%", marginTop: "24px" }}
        >
          Create Account
        </button>

        {/* Footer */}
        <p
          style={{
            fontSize: "13px",
            color: "#6b7280",
            marginTop: "16px",
            textAlign: "center",
          }}
        >
          Already have an account?{" "}
          <a href="/login" style={{ color: "#6366f1", fontWeight: "500" }}>
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
