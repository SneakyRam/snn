import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import Learn from "./pages/Learn";
import Tools from "./pages/Tools";
import Blog from "./pages/Blog";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import PageTransition from "./components/PageTransition";

export default function App() {
  return (
    <>
      <Header />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
          <Route path="/u/:username" element={<Profile />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </PageTransition>
      <Footer />
    </>
  );
}