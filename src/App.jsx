import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import BrowseJobs from "./pages/jobseeker/BrowseJobs";
import MyApplications from "./pages/jobseeker/MyApplications";
import Messages from "./pages/jobseeker/Messages";
import Profile from "./pages/jobseeker/Profile";
import PostJob from "./pages/employer/PostJob";
import Applications from "./pages/employer/Applications";
import Navbar from "./components/layout/Navbar";


export default function App() {
return (
<>
<Navbar />
<Routes>
<Route path="/" element={<Navigate to="/login" />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/jobs" element={<BrowseJobs />} />
<Route path="/applications" element={<MyApplications />} />
<Route path="/messages" element={<Messages />} />
<Route path="/profile" element={<Profile />} />
<Route path="/employer/post-job" element={<PostJob />} />
<Route path="/employer/applications" element={<Applications />} />
</Routes>
</>
);
}