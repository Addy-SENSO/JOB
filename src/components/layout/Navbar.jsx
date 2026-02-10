export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 style={{ color: "#6366f1", fontWeight: 700 }}>JobPortal</h1>

      <div style={{ display: "flex", gap: "24px" }}>
        <a href="/jobs">Browse Jobs</a>
        <a href="/applications">My Applications</a>
        <a href="/profile">Profile</a>
        <a href="/employer/post-job">Post Job</a>
      </div>
    </nav>
  );
}
