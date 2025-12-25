import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/learn', label: 'Learn' },
    { path: '/tools', label: 'Tools' },
    { path: '/blog', label: 'Blog' },
    { path: '/community', label: 'Community' },
    ...(user ? [{ path: '/dashboard', label: 'Dashboard' }] : []),
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-space font-bold gradient-text">
              Sneaky::Lab
            </Link>

            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative transition-colors ${
                    isActive(item.path)
                      ? 'text-cyan-400'
                      : 'hover:text-cyan-400'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              {!user ? (
                <Link to="/login" className="btn-secondary">
                  Login
                </Link>
              ) : (
                <div className="relative">
                  <button className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                    <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold">
                      {user.email?.[0].toUpperCase()}
                    </div>
                    <span className="hidden sm:block">{user.email}</span>
                  </button>
                  {/* Dropdown menu would go here */}
                </div>
              )}
              <Link to="/learn" className="btn-primary hidden sm:block">
                Start Learning
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2"
              >
                <div className="w-6 h-6 flex flex-col justify-center">
                  <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                  }`} />
                  <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`} />
                  <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md shadow-xl"
            >
              <div className="p-6 pt-20">
                <nav className="space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-lg transition-colors ${
                        isActive(item.path)
                          ? 'text-cyan-400'
                          : 'hover:text-cyan-400'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  {!user ? (
                    <Link
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="btn-secondary w-full text-center"
                    >
                      Login
                    </Link>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold">
                          {user.email?.[0].toUpperCase()}
                        </div>
                        <span className="text-sm">{user.email}</span>
                      </div>
                      <button
                        onClick={() => {
                          logout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="btn-secondary w-full"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                  <Link
                    to="/learn"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary w-full text-center mt-4 block"
                  >
                    Start Learning
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/50"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}