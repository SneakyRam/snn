import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CyberVisuals from "../components/CyberVisuals";

const learningPaths = [
  { name: "Foundations", icon: "🏗️", description: "Core concepts and terminology", progress: 0 },
  { name: "Linux", icon: "🐧", description: "Command line and system administration", progress: 0 },
  { name: "Networking", icon: "🌐", description: "TCP/IP, protocols, and network security", progress: 0 },
  { name: "Web Security", icon: "🔒", description: "OWASP Top 10 and web vulnerabilities", progress: 0 },
  { name: "Blue Team", icon: "🛡️", description: "Defense, monitoring, and incident response", progress: 0 },
  { name: "Bug Bounty", icon: "🎯", description: "Finding and reporting vulnerabilities", progress: 0 },
];

const tools = [
  { name: "Password Strength Checker", description: "Test password security in real-time" },
  { name: "Hash Generator", description: "Generate MD5, SHA-1, SHA-256 hashes" },
  { name: "URL Analyzer", description: "Inspect HTTP headers and security" },
  { name: "Port Scan Simulator", description: "Learn port scanning safely" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-space font-bold mb-6">
              <span className="gradient-text">Learn Cybersecurity</span>
              <br />
              <span className="text-white">By Doing, Not Watching</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Hands-on labs, real tools, structured learning paths — built for students who want real skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/learn" className="btn-primary text-center">
                Start Learning
              </Link>
              <Link to="/tools" className="btn-secondary text-center">
                Explore Tools
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-cyan-400/30 overflow-hidden">
              <CyberVisuals />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-space font-bold mb-4">Learning Paths</h2>
            <p className="text-xl text-gray-300">Structured journeys from beginner to expert</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group"
              >
                <div className="text-4xl mb-4">{path.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{path.name}</h3>
                <p className="text-gray-400 mb-4">{path.description}</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full" style={{ width: `${path.progress}%` }}></div>
                </div>
                <Link to={`/learn/${path.name.toLowerCase()}`} className="btn-secondary w-full text-center">
                  {path.progress > 0 ? 'Continue' : 'Start'} Learning
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-space font-bold mb-4">Hands-On Tools</h2>
            <p className="text-xl text-gray-300">Practice with real cybersecurity tools</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group"
              >
                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <p className="text-gray-400 mb-4">{tool.description}</p>
                <Link to={`/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`} className="btn-primary">
                  Open Tool
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-space font-bold mb-4">How It Works</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Choose a Path</h3>
              <p className="text-gray-400">Select from structured learning paths designed by experts</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-6xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-2">Practice with Tools</h3>
              <p className="text-gray-400">Use interactive tools to apply what you learn</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
              <p className="text-gray-400">Monitor your learning journey and achievements</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-400/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-space font-bold mb-4">Build Skills That Actually Matter</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of learners mastering cybersecurity through hands-on experience.
            </p>
            <Link to="/learn" className="btn-primary">
              Enter the Lab
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}