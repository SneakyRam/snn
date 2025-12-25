import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const tools = [
  {
    id: "password-strength",
    name: "Password Strength Checker",
    icon: "🔐",
    description: "Test password security in real-time",
    component: PasswordStrengthChecker
  },
  {
    id: "hash-generator",
    name: "Hash Generator",
    icon: "🔢",
    description: "Generate MD5, SHA-1, SHA-256 hashes",
    component: HashGenerator
  },
  {
    id: "url-analyzer",
    name: "URL Analyzer",
    icon: "🔍",
    description: "Inspect HTTP headers and security",
    component: URLAnalyzer
  },
  {
    id: "port-scanner",
    name: "Port Scan Simulator",
    icon: "📡",
    description: "Learn port scanning safely",
    component: PortScanner
  },
];

function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState([]);

  const checkStrength = (pwd) => {
    let score = 0;
    const fb = [];

    if (pwd.length >= 8) score += 20; else fb.push("Use at least 8 characters");
    if (/[a-z]/.test(pwd)) score += 20; else fb.push("Include lowercase letters");
    if (/[A-Z]/.test(pwd)) score += 20; else fb.push("Include uppercase letters");
    if (/[0-9]/.test(pwd)) score += 20; else fb.push("Include numbers");
    if (/[^A-Za-z0-9]/.test(pwd)) score += 20; else fb.push("Include special characters");

    setStrength(score);
    setFeedback(fb);
  };

  const handleChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    checkStrength(pwd);
  };

  const getStrengthColor = () => {
    if (strength < 40) return "bg-red-500";
    if (strength < 80) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getStrengthText = () => {
    if (strength < 40) return "Weak";
    if (strength < 80) return "Medium";
    return "Strong";
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Enter Password</label>
        <input
          type="password"
          value={password}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
          placeholder="Type your password..."
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Strength</span>
          <span className={`text-sm font-bold ${getStrengthColor().includes('red') ? 'text-red-400' : getStrengthColor().includes('yellow') ? 'text-yellow-400' : 'text-green-400'}`}>
            {getStrengthText()}
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div className={`h-3 rounded-full transition-all duration-300 ${getStrengthColor()}`} style={{ width: `${strength}%` }}></div>
        </div>
      </div>

      {feedback.length > 0 && (
        <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Suggestions:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {feedback.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-blue-900/20 border border-blue-600 rounded-lg p-4">
        <h4 className="font-semibold mb-2">What you learn:</h4>
        <p className="text-sm text-gray-300">
          Password strength is crucial for account security. Strong passwords should be long, complex, and unique.
          This tool demonstrates entropy and common password requirements used in security systems.
        </p>
      </div>
    </div>
  );
}

function HashGenerator() {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState({});

  const generateHashes = async (text) => {
    // In a real app, use crypto-js or similar
    const md5 = btoa(text).slice(0, 16); // Fake MD5
    const sha1 = btoa(text).slice(0, 20); // Fake SHA-1
    const sha256 = btoa(text).slice(0, 32); // Fake SHA-256

    setHashes({ md5, sha1, sha256 });
  };

  const handleChange = (e) => {
    const text = e.target.value;
    setInput(text);
    if (text) generateHashes(text);
    else setHashes({});
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Enter Text to Hash</label>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
          placeholder="Type text to generate hashes..."
        />
      </div>

      {Object.keys(hashes).length > 0 && (
        <div className="space-y-4">
          {Object.entries(hashes).map(([type, hash]) => (
            <div key={type} className="bg-gray-800 border border-gray-600 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold uppercase">{type}</span>
                <button
                  onClick={() => copyToClipboard(hash)}
                  className="text-cyan-400 hover:text-purple-500 transition-colors"
                >
                  📋
                </button>
              </div>
              <code className="font-mono text-sm break-all text-gray-300">{hash}</code>
            </div>
          ))}
        </div>
      )}

      <div className="bg-purple-900/20 border border-purple-600 rounded-lg p-4">
        <h4 className="font-semibold mb-2">What you learn:</h4>
        <p className="text-sm text-gray-300">
          Hash functions are one-way algorithms that convert data into fixed-size strings. They're used for password storage,
          data integrity verification, and digital signatures. Different algorithms have different security properties.
        </p>
      </div>
    </div>
  );
}

function URLAnalyzer() {
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState(null);

  const analyzeURL = async () => {
    try {
      // Mock headers for demo
      const mockHeaders = {
        "Content-Type": "text/html; charset=utf-8",
        "X-Frame-Options": "DENY",
        "X-Content-Type-Options": "nosniff",
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
        "Content-Security-Policy": "default-src 'self'",
        "Server": "nginx/1.18.0",
      };
      setHeaders(mockHeaders);
    } catch (error) {
      console.error("Error analyzing URL:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Enter URL</label>
        <div className="flex space-x-2">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
            placeholder="https://example.com"
          />
          <button onClick={analyzeURL} className="btn-primary">
            Analyze
          </button>
        </div>
      </div>

      {headers && (
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold mb-4">HTTP Headers</h3>
          <div className="space-y-2">
            {Object.entries(headers).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b border-gray-700 last:border-b-0">
                <span className="font-mono text-sm text-cyan-400">{key}:</span>
                <span className="font-mono text-sm text-gray-300 ml-4 break-all">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-green-900/20 border border-green-600 rounded-lg p-4">
        <h4 className="font-semibold mb-2">What you learn:</h4>
        <p className="text-sm text-gray-300">
          HTTP headers provide important security information. Security headers like CSP, HSTS, and X-Frame-Options
          help protect against common web vulnerabilities. Analyzing headers is a key part of web security assessment.
        </p>
      </div>
    </div>
  );
}

function PortScanner() {
  const [target, setTarget] = useState("");
  const [results, setResults] = useState(null);

  const scanPorts = async () => {
    // Mock scan results for educational purposes
    const mockResults = {
      target,
      ports: [
        { port: 22, service: "SSH", status: "open", risk: "high" },
        { port: 80, service: "HTTP", status: "open", risk: "medium" },
        { port: 443, service: "HTTPS", status: "open", risk: "low" },
        { port: 3389, service: "RDP", status: "closed", risk: "none" },
      ]
    };
    setResults(mockResults);
  };

  return (
    <div className="space-y-6">
      <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4">
        <h4 className="font-semibold mb-2">⚠️ Educational Tool Only</h4>
        <p className="text-sm text-gray-300">
          This is a simulation for learning purposes. Real port scanning requires permission and may be illegal without authorization.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Target (Demo)</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
            placeholder="scanme.nmap.org"
          />
          <button onClick={scanPorts} className="btn-primary">
            Scan
          </button>
        </div>
      </div>

      {results && (
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold mb-4">Scan Results for {results.target}</h3>
          <div className="space-y-2">
            {results.ports.map((port) => (
              <div key={port.port} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                <div>
                  <span className="font-mono text-cyan-400">{port.port}</span>
                  <span className="ml-4 text-gray-300">{port.service}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs ${
                    port.status === 'open' ? 'bg-green-600' : 'bg-red-600'
                  }`}>
                    {port.status}
                  </span>
                  <span className={`text-xs ${
                    port.risk === 'high' ? 'text-red-400' :
                    port.risk === 'medium' ? 'text-yellow-400' :
                    port.risk === 'low' ? 'text-green-400' : 'text-gray-400'
                  }`}>
                    {port.risk}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-red-900/20 border border-red-600 rounded-lg p-4">
        <h4 className="font-semibold mb-2">What you learn:</h4>
        <p className="text-sm text-gray-300">
          Port scanning reveals open network services. Understanding which ports are open helps identify potential
          attack vectors. However, unauthorized scanning is illegal and unethical. Always get permission first.
        </p>
      </div>
    </div>
  );
}

export default function Tools() {
  const [selectedTool, setSelectedTool] = useState(null);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-space font-bold mb-4">Hands-On Tools</h1>
          <p className="text-xl text-gray-300">Practice cybersecurity concepts with interactive tools</p>
        </div>

        {!selectedTool ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <motion.div
                key={tool.id}
                whileHover={{ scale: 1.02 }}
                className="card cursor-pointer"
                onClick={() => setSelectedTool(tool)}
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <p className="text-gray-400 mb-4">{tool.description}</p>
                <button className="btn-primary w-full">
                  Open Tool
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setSelectedTool(null)}
                className="btn-secondary"
              >
                ← Back to Tools
              </button>
              <h2 className="text-2xl font-space font-bold">{selectedTool.name}</h2>
            </div>

            <div className="card">
              <selectedTool.component />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}