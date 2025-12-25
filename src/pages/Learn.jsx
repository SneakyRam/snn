import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const paths = [
  {
    id: "foundations",
    name: "Foundations",
    icon: "🏗️",
    description: "Core concepts and terminology",
    color: "from-blue-400 to-cyan-400",
    modules: [
      {
        id: 1,
        title: "What is Cybersecurity?",
        completed: false,
        content: {
          introduction: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information, extorting money from users, or interrupting normal business processes.",
          sections: [
            {
              title: "Why Cybersecurity Matters",
              content: "In today's digital world, cybersecurity is crucial because:",
              points: [
                "Data breaches can cost companies millions of dollars",
                "Personal information is constantly at risk",
                "Critical infrastructure depends on secure systems",
                "Cyber attacks can disrupt entire economies"
              ]
            },
            {
              title: "Types of Cyber Threats",
              content: "Common cyber threats include:",
              points: [
                "Malware: Viruses, worms, ransomware",
                "Phishing: Deceptive attempts to obtain sensitive information",
                "DDoS attacks: Overwhelming systems with traffic",
                "Man-in-the-middle attacks: Intercepting communications",
                "SQL injection: Exploiting database vulnerabilities"
              ]
            }
          ],
          quiz: [
            {
              question: "What is the primary goal of cybersecurity?",
              options: ["To create viruses", "To protect systems from digital attacks", "To hack into systems", "To slow down computers"],
              correct: 1
            },
            {
              question: "Which of these is NOT a common cyber threat?",
              options: ["Phishing", "DDoS attacks", "Firewalls", "Malware"],
              correct: 2
            }
          ]
        }
      },
      {
        id: 2,
        title: "Threat Landscape",
        completed: false,
        content: {
          introduction: "The threat landscape refers to the full range of potential cyber threats and vulnerabilities that exist in the digital environment. Understanding this landscape is essential for effective cybersecurity.",
          sections: [
            {
              title: "Threat Actors",
              content: "Different types of threat actors include:",
              points: [
                "Hackers: Individuals with technical skills",
                "Script Kiddies: Use pre-made tools without deep understanding",
                "Insider Threats: Authorized users who misuse access",
                "Nation-State Actors: Government-sponsored groups",
                "Criminal Organizations: Profit-motivated groups"
              ]
            },
            {
              title: "Attack Vectors",
              content: "Common ways attackers gain access:",
              points: [
                "Email phishing and spear-phishing",
                "Malicious websites and drive-by downloads",
                "USB devices and physical access",
                "Weak passwords and credential stuffing",
                "Unpatched software vulnerabilities"
              ]
            }
          ],
          quiz: [
            {
              question: "What is a threat actor?",
              options: ["A cybersecurity tool", "An entity that poses a security risk", "A type of firewall", "An antivirus program"],
              correct: 1
            }
          ]
        }
      },
      {
        id: 3,
        title: "Security Principles",
        completed: false,
        content: {
          introduction: "Security principles form the foundation of all cybersecurity practices. These principles guide how we design, implement, and maintain secure systems.",
          sections: [
            {
              title: "CIA Triad",
              content: "The three fundamental security principles:",
              points: [
                "Confidentiality: Ensuring information is only accessible to authorized users",
                "Integrity: Protecting information from unauthorized modification",
                "Availability: Ensuring systems remain accessible when needed"
              ]
            },
            {
              title: "Additional Principles",
              content: "Other important security principles:",
              points: [
                "Least Privilege: Users should only have minimum necessary access",
                "Defense in Depth: Multiple layers of security controls",
                "Fail-Safe Defaults: Systems should fail securely",
                "Separation of Duties: No single person should control all aspects"
              ]
            }
          ],
          quiz: [
            {
              question: "What does CIA stand for in cybersecurity?",
              options: ["Central Intelligence Agency", "Confidentiality, Integrity, Availability", "Computer Internet Access", "Cybersecurity Intelligence Agency"],
              correct: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: "linux",
    name: "Linux",
    icon: "🐧",
    description: "Command line and system administration",
    color: "from-orange-400 to-red-400",
    modules: [
      {
        id: 1,
        title: "Basic Commands",
        completed: false,
        content: {
          introduction: "Linux commands are the building blocks of system administration. Learning these commands will give you control over your Linux system and help you understand how computers work at a fundamental level.",
          sections: [
            {
              title: "Navigation Commands",
              content: "Commands for moving around the filesystem:",
              commands: [
                { cmd: "pwd", desc: "Print working directory - shows current location" },
                { cmd: "ls", desc: "List directory contents" },
                { cmd: "ls -la", desc: "List all files including hidden ones with details" },
                { cmd: "cd", desc: "Change directory" },
                { cmd: "cd ..", desc: "Go up one directory level" }
              ]
            },
            {
              title: "File Operations",
              content: "Commands for working with files:",
              commands: [
                { cmd: "touch file.txt", desc: "Create an empty file" },
                { cmd: "cp source destination", desc: "Copy files or directories" },
                { cmd: "mv source destination", desc: "Move or rename files" },
                { cmd: "rm file", desc: "Remove files (be careful!)" },
                { cmd: "rm -rf directory", desc: "Remove directories recursively" }
              ]
            }
          ],
          practice: "Try these commands in your terminal: pwd, ls, cd /home, ls -la"
        }
      },
      {
        id: 2,
        title: "File System",
        completed: false,
        content: {
          introduction: "Understanding the Linux filesystem hierarchy is crucial for system administration. Linux organizes files in a tree structure starting from the root directory.",
          sections: [
            {
              title: "Important Directories",
              content: "Key directories in the Linux filesystem:",
              directories: [
                { path: "/", desc: "Root directory - top of the filesystem" },
                { path: "/home", desc: "User home directories" },
                { path: "/etc", desc: "System configuration files" },
                { path: "/var", desc: "Variable data (logs, databases)" },
                { path: "/usr", desc: "User programs and data" },
                { path: "/bin", desc: "Essential user binaries" },
                { path: "/sbin", desc: "System administration binaries" }
              ]
            },
            {
              title: "File Permissions",
              content: "Linux file permissions control access. Permissions are shown as rwx for read, write, execute. Each file has permissions for owner, group, and others."
            }
          ],
          practice: "Explore the filesystem: ls -la /etc, ls -la /var/log"
        }
      },
      {
        id: 3,
        title: "Permissions",
        completed: false,
        content: {
          introduction: "File permissions in Linux determine who can read, write, or execute files. Understanding permissions is essential for security and system administration.",
          sections: [
            {
              title: "Permission Types",
              content: "Three types of permissions:",
              permissions: [
                { type: "Read (r)", desc: "View file contents or list directory" },
                { type: "Write (w)", desc: "Modify file or create/delete in directory" },
                { type: "Execute (x)", desc: "Run file as program or access directory" }
              ]
            },
            {
              title: "Changing Permissions",
              content: "Commands to modify permissions:",
              commands: [
                { cmd: "chmod 755 file", desc: "Set permissions to rwxr-xr-x" },
                { cmd: "chmod u+x file", desc: "Add execute permission for owner" },
                { cmd: "chown user file", desc: "Change file owner" },
                { cmd: "chgrp group file", desc: "Change file group" }
              ]
            }
          ],
          practice: "Check permissions: ls -la, then try chmod 644 file.txt"
        }
      }
    ]
  },
  {
    id: "networking",
    name: "Networking",
    icon: "🌐",
    description: "TCP/IP, protocols, and network security",
    color: "from-green-400 to-blue-400",
    modules: [
      {
        id: 1,
        title: "Network Basics",
        completed: false,
        content: {
          introduction: "Computer networks allow devices to communicate and share resources. Understanding networking fundamentals is essential for cybersecurity professionals.",
          sections: [
            {
              title: "Network Components",
              content: "Basic network elements:",
              components: [
                "Devices: Computers, servers, smartphones",
                "Network Interface Cards (NICs): Hardware for network connection",
                "Switches: Connect devices within a network",
                "Routers: Connect different networks",
                "Cables/Fiber: Physical connections",
                "Wireless Access Points: Enable Wi-Fi connections"
              ]
            },
            {
              title: "Network Types",
              content: "Different types of networks:",
              networks: [
                { type: "LAN", desc: "Local Area Network - small geographic area" },
                { type: "WAN", desc: "Wide Area Network - large geographic area" },
                { type: "MAN", desc: "Metropolitan Area Network - city-wide" },
                { type: "PAN", desc: "Personal Area Network - very small area" }
              ]
            }
          ]
        }
      },
      {
        id: 2,
        title: "TCP/IP Stack",
        completed: false,
        content: {
          introduction: "The TCP/IP protocol suite is the foundation of internet communication. Understanding these protocols helps in analyzing network traffic and identifying security issues.",
          sections: [
            {
              title: "TCP/IP Layers",
              content: "The four layers of the TCP/IP model:",
              layers: [
                {
                  name: "Application Layer",
                  protocols: "HTTP, HTTPS, FTP, DNS, SMTP",
                  purpose: "User interface and application protocols"
                },
                {
                  name: "Transport Layer",
                  protocols: "TCP, UDP",
                  purpose: "Reliable or fast data delivery"
                },
                {
                  name: "Internet Layer",
                  protocols: "IP, ICMP",
                  purpose: "Routing and addressing"
                },
                {
                  name: "Network Access Layer",
                  protocols: "Ethernet, Wi-Fi",
                  purpose: "Physical network connections"
                }
              ]
            }
          ]
        }
      },
      {
        id: 3,
        title: "Network Tools",
        completed: false,
        content: {
          introduction: "Network diagnostic and analysis tools are essential for troubleshooting and security assessment. These tools help you understand network behavior and identify issues.",
          sections: [
            {
              title: "Essential Tools",
              content: "Common networking tools:",
              tools: [
                {
                  name: "ping",
                  purpose: "Test connectivity and measure latency",
                  example: "ping google.com"
                },
                {
                  name: "traceroute",
                  purpose: "Show path packets take to destination",
                  example: "traceroute google.com"
                },
                {
                  name: "netstat",
                  purpose: "Display network connections and statistics",
                  example: "netstat -tuln"
                },
                {
                  name: "ifconfig/ip",
                  purpose: "Configure and display network interfaces",
                  example: "ip addr show"
                }
              ]
            }
          ],
          practice: "Try these commands: ping 8.8.8.8, traceroute google.com"
        }
      }
    ]
  },
  {
    id: "web-security",
    name: "Web Security",
    icon: "🔒",
    description: "OWASP Top 10 and web vulnerabilities",
    color: "from-purple-400 to-pink-400",
    modules: [
      {
        id: 1,
        title: "Web Fundamentals",
        completed: false,
        content: {
          introduction: "Web applications are one of the most common targets for cyber attacks. Understanding how web applications work is the first step in securing them.",
          sections: [
            {
              title: "HTTP Protocol",
              content: "HTTP is the foundation of web communication:",
              concepts: [
                "Request-Response cycle",
                "HTTP methods: GET, POST, PUT, DELETE",
                "Status codes: 200 OK, 404 Not Found, 500 Server Error",
                "Headers: contain metadata about requests/responses",
                "Cookies: store client-side data"
              ]
            },
            {
              title: "Web Architecture",
              content: "Modern web applications typically use:",
              architecture: [
                "Frontend: HTML, CSS, JavaScript",
                "Backend: Server-side languages (PHP, Python, Node.js)",
                "Database: Store and retrieve data",
                "APIs: Allow different systems to communicate"
              ]
            }
          ]
        }
      },
      {
        id: 2,
        title: "Common Vulnerabilities",
        completed: false,
        content: {
          introduction: "The OWASP Top 10 represents the most critical web application security risks. Understanding these vulnerabilities is crucial for web security.",
          sections: [
            {
              title: "OWASP Top 10",
              content: "Most critical web security risks:",
              vulnerabilities: [
                {
                  name: "Injection",
                  description: "SQL, NoSQL, OS command injection",
                  impact: "Data theft, modification, or destruction"
                },
                {
                  name: "Broken Authentication",
                  description: "Weak session management, credential stuffing",
                  impact: "Account takeover, unauthorized access"
                },
                {
                  name: "Sensitive Data Exposure",
                  description: "Weak encryption, exposed secrets",
                  impact: "Data breaches, privacy violations"
                },
                {
                  name: "XML External Entities (XXE)",
                  description: "Processing malicious XML input",
                  impact: "Data disclosure, denial of service"
                },
                {
                  name: "Broken Access Control",
                  description: "Inadequate authorization checks",
                  impact: "Unauthorized data access"
                }
              ]
            }
          ]
        }
      },
      {
        id: 3,
        title: "Secure Coding",
        completed: false,
        content: {
          introduction: "Secure coding practices help prevent vulnerabilities from being introduced during development. These practices should be followed throughout the software development lifecycle.",
          sections: [
            {
              title: "Input Validation",
              content: "Always validate and sanitize user input:",
              practices: [
                "Validate input format and length",
                "Use whitelist validation (allow only expected input)",
                "Escape special characters",
                "Use parameterized queries for database access"
              ]
            },
            {
              title: "Authentication & Authorization",
              content: "Implement proper access controls:",
              practices: [
                "Use strong password policies",
                "Implement multi-factor authentication",
                "Use secure session management",
                "Apply principle of least privilege",
                "Regularly review and revoke access"
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: "blue-team",
    name: "Blue Team",
    icon: "🛡️",
    description: "Defense, monitoring, and incident response",
    color: "from-indigo-400 to-blue-500",
    modules: [
      {
        id: 1,
        title: "Defense Strategies",
        completed: false,
        content: {
          introduction: "Blue teaming focuses on defensive cybersecurity. The goal is to protect systems, detect threats, and respond to incidents effectively.",
          sections: [
            {
              title: "Defense in Depth",
              content: "Multiple layers of security controls:",
              layers: [
                "Physical security: Secure facilities and hardware",
                "Network security: Firewalls, IDS/IPS, segmentation",
                "Host security: Antivirus, HIPS, hardening",
                "Application security: Secure coding, WAF",
                "Data security: Encryption, access controls"
              ]
            },
            {
              title: "Security Controls",
              content: "Types of security controls:",
              controls: [
                { type: "Preventive", examples: "Firewalls, access controls, encryption" },
                { type: "Detective", examples: "IDS, logging, monitoring" },
                { type: "Corrective", examples: "Patching, backups, incident response" },
                { type: "Deterrent", examples: "Warnings, policies, visible security" }
              ]
            }
          ]
        }
      },
      {
        id: 2,
        title: "Monitoring Tools",
        completed: false,
        content: {
          introduction: "Effective monitoring is crucial for detecting and responding to security incidents. Various tools help security teams maintain visibility into their environment.",
          sections: [
            {
              title: "Log Analysis",
              content: "Tools for analyzing system logs:",
              tools: [
                { name: "SIEM Systems", desc: "Centralized log collection and analysis" },
                { name: "ELK Stack", desc: "Elasticsearch, Logstash, Kibana" },
                { name: "Splunk", desc: "Enterprise log analysis platform" }
              ]
            },
            {
              title: "Network Monitoring",
              content: "Tools for monitoring network traffic:",
              tools: [
                { name: "Wireshark", desc: "Packet analyzer" },
                { name: "Snort", desc: "Network intrusion detection" },
                { name: "Zeek", desc: "Network security monitoring" }
              ]
            }
          ]
        }
      },
      {
        id: 3,
        title: "Incident Response",
        completed: false,
        content: {
          introduction: "Incident response is the process of identifying, containing, and remediating security incidents. Having a well-defined incident response plan is crucial for minimizing damage.",
          sections: [
            {
              title: "IR Process",
              content: "NIST incident response phases:",
              phases: [
                { phase: "Preparation", desc: "Develop IR plan, assemble team, train personnel" },
                { phase: "Identification", desc: "Detect and assess potential incidents" },
                { phase: "Containment", desc: "Stop the incident from spreading" },
                { phase: "Eradication", desc: "Remove root cause and attacker presence" },
                { phase: "Recovery", desc: "Restore systems and monitor for recurrence" },
                { phase: "Lessons Learned", desc: "Review incident and improve processes" }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: "bug-bounty",
    name: "Bug Bounty",
    icon: "🎯",
    description: "Finding and reporting vulnerabilities",
    color: "from-red-400 to-orange-500",
    modules: [
      {
        id: 1,
        title: "Bug Bounty Basics",
        completed: false,
        content: {
          introduction: "Bug bounty programs allow ethical hackers to find and report security vulnerabilities in exchange for rewards. This creates a collaborative approach to improving security.",
          sections: [
            {
              title: "How Bug Bounties Work",
              content: "The bug bounty process:",
              steps: [
                "Companies create bug bounty programs",
                "Ethical hackers (researchers) look for vulnerabilities",
                "Vulnerabilities are reported through secure channels",
                "Companies verify and fix issues",
                "Researchers receive rewards based on severity"
              ]
            },
            {
              title: "Popular Programs",
              content: "Major bug bounty platforms:",
              platforms: [
                { name: "HackerOne", desc: "Largest bug bounty platform" },
                { name: "Bugcrowd", desc: "Crowdsourced security testing" },
                { name: "Intigriti", desc: "European bug bounty platform" },
                { name: "YesWeHack", desc: "French bug bounty platform" }
              ]
            }
          ]
        }
      },
      {
        id: 2,
        title: "Finding Vulnerabilities",
        completed: false,
        content: {
          introduction: "Finding vulnerabilities requires systematic testing and creative thinking. Different types of vulnerabilities require different approaches and tools.",
          sections: [
            {
              title: "Reconnaissance",
              content: "Gather information about the target:",
              techniques: [
                "DNS enumeration",
                "Subdomain discovery",
                "Technology stack identification",
                "Public source intelligence (OSINT)"
              ]
            },
            {
              title: "Common Vulnerabilities",
              content: "Frequently found issues:",
              vulns: [
                { type: "SQL Injection", desc: "Database query manipulation" },
                { type: "XSS", desc: "Cross-site scripting" },
                { type: "CSRF", desc: "Cross-site request forgery" },
                { type: "IDOR", desc: "Insecure direct object references" },
                { type: "SSRF", desc: "Server-side request forgery" }
              ]
            }
          ]
        }
      },
      {
        id: 3,
        title: "Reporting Process",
        completed: false,
        content: {
          introduction: "Proper vulnerability reporting is crucial for responsible disclosure. Clear, detailed reports help companies understand and fix issues quickly.",
          sections: [
            {
              title: "Report Structure",
              content: "A good vulnerability report should include:",
              elements: [
                "Clear title describing the vulnerability",
                "Severity assessment (CVSS score if applicable)",
                "Detailed description of the issue",
                "Step-by-step reproduction instructions",
                "Proof of concept or exploit code",
                "Potential impact and affected systems",
                "Suggested remediation steps"
              ]
            },
            {
              title: "Responsible Disclosure",
              content: "Ethical reporting guidelines:",
              guidelines: [
                "Don't exploit vulnerabilities beyond proof of concept",
                "Give companies reasonable time to fix issues",
                "Don't disclose publicly until fixed",
                "Follow program-specific disclosure policies",
                "Maintain confidentiality of sensitive information"
              ]
            }
          ]
        }
      }
    ]
  }
];

export default function Learn() {
  const [selectedPath, setSelectedPath] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('learningProgress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      // Update paths with saved progress
      paths.forEach(path => {
        path.modules.forEach(module => {
          const savedModule = progress[`${path.id}-${module.id}`];
          if (savedModule) {
            module.completed = savedModule.completed;
          }
        });
      });
    }
  }, []);

  const saveProgress = () => {
    const progress = {};
    paths.forEach(path => {
      path.modules.forEach(module => {
        progress[`${path.id}-${module.id}`] = {
          completed: module.completed
        };
      });
    });
    localStorage.setItem('learningProgress', JSON.stringify(progress));
  };

  const handlePathSelect = (path) => {
    setSelectedPath(path);
    setSelectedModule(null);
    setShowQuiz(false);
    setQuizCompleted(false);
    setQuizAnswers({});
  };

  const handleModuleSelect = (module) => {
    setSelectedModule(module);
    setShowQuiz(false);
    setQuizCompleted(false);
    setQuizAnswers({});
  };

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const submitQuiz = () => {
    if (!selectedModule?.content?.quiz) return;

    const totalQuestions = selectedModule.content.quiz.length;
    const correctAnswers = selectedModule.content.quiz.filter(
      (q, index) => quizAnswers[index] === q.correct
    ).length;

    const passed = correctAnswers >= Math.ceil(totalQuestions * 0.7); // 70% passing grade

    if (passed) {
      selectedModule.completed = true;
      saveProgress();
      setQuizCompleted(true);
      setShowQuiz(false);
    } else {
      alert(`You got ${correctAnswers}/${totalQuestions} correct. Try again!`);
    }
  };

  const calculateProgress = (path) => {
    const completed = path.modules.filter(m => m.completed).length;
    return Math.round((completed / path.modules.length) * 100);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-space font-bold mb-6">Learning Paths</h2>
            <div className="space-y-4">
              {paths.map((path) => (
                <motion.div
                  key={path.id}
                  whileHover={{ scale: 1.02 }}
                  className={`card cursor-pointer ${
                    selectedPath?.id === path.id ? 'border-cyan-400' : ''
                  }`}
                  onClick={() => handlePathSelect(path)}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{path.icon}</span>
                    <h3 className="font-semibold">{path.name}</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{path.description}</p>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${calculateProgress(path)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{calculateProgress(path)}% complete</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {selectedPath ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <h1 className="text-4xl font-space font-bold mb-2">{selectedPath.name}</h1>
                  <p className="text-xl text-gray-300">{selectedPath.description}</p>
                  <div className="mt-4 w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-purple-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${calculateProgress(selectedPath)}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">Overall Progress: {calculateProgress(selectedPath)}%</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedPath.modules.map((module) => (
                    <motion.div
                      key={module.id}
                      whileHover={{ scale: 1.02 }}
                      className={`card cursor-pointer ${
                        selectedModule?.id === module.id ? 'border-cyan-400' : ''
                      } ${module.completed ? 'bg-green-900/20 border-green-500' : ''}`}
                      onClick={() => handleModuleSelect(module)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{module.title}</h3>
                        {module.completed && <span className="text-green-400">✓</span>}
                      </div>
                      <p className="text-gray-400 text-sm">Module {module.id} of {selectedPath.modules.length}</p>
                    </motion.div>
                  ))}
                </div>

                {selectedModule && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 card"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-space font-bold">{selectedModule.title}</h2>
                      {selectedModule.completed && (
                        <span className="text-green-400 font-semibold flex items-center">
                          ✓ Completed
                        </span>
                      )}
                    </div>

                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 mb-6 text-lg">
                        {selectedModule.content.introduction}
                      </p>

                      {selectedModule.content.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-8">
                          <h3 className="text-xl font-semibold mb-4 text-cyan-400">{section.title}</h3>

                          {section.content && (
                            <p className="text-gray-300 mb-4">{section.content}</p>
                          )}

                          {section.points && (
                            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                              {section.points.map((point, pointIndex) => (
                                <li key={pointIndex}>{point}</li>
                              ))}
                            </ul>
                          )}

                          {section.commands && (
                            <div className="bg-gray-800 p-4 rounded-lg mb-4">
                              <h4 className="font-semibold mb-3 text-purple-400">Commands:</h4>
                              {section.commands.map((cmd, cmdIndex) => (
                                <div key={cmdIndex} className="mb-2">
                                  <code className="bg-gray-700 px-2 py-1 rounded text-cyan-400 font-mono text-sm">
                                    {cmd.cmd}
                                  </code>
                                  <span className="text-gray-400 ml-3 text-sm">{cmd.desc}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {section.directories && (
                            <div className="bg-gray-800 p-4 rounded-lg mb-4">
                              <h4 className="font-semibold mb-3 text-purple-400">Important Directories:</h4>
                              {section.directories.map((dir, dirIndex) => (
                                <div key={dirIndex} className="mb-2">
                                  <code className="bg-gray-700 px-2 py-1 rounded text-green-400 font-mono text-sm">
                                    {dir.path}
                                  </code>
                                  <span className="text-gray-400 ml-3 text-sm">{dir.desc}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {section.permissions && (
                            <ul className="space-y-2 text-gray-300 mb-4">
                              {section.permissions.map((perm, permIndex) => (
                                <li key={permIndex}>
                                  <strong className="text-cyan-400">{perm.type}:</strong> {perm.desc}
                                </li>
                              ))}
                            </ul>
                          )}

                          {section.components && (
                            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                              {section.components.map((component, compIndex) => (
                                <li key={compIndex}>{component}</li>
                              ))}
                            </ul>
                          )}

                          {section.networks && (
                            <ul className="space-y-2 text-gray-300 mb-4">
                              {section.networks.map((network, netIndex) => (
                                <li key={netIndex}>
                                  <strong className="text-cyan-400">{network.type}:</strong> {network.desc}
                                </li>
                              ))}
                            </ul>
                          )}

                          {section.layers && (
                            <div className="space-y-4 mb-4">
                              {section.layers.map((layer, layerIndex) => (
                                <div key={layerIndex} className="bg-gray-800 p-4 rounded-lg">
                                  <h4 className="font-semibold text-purple-400 mb-2">{layer.name} Layer</h4>
                                  <p className="text-gray-300 mb-2"><strong>Protocols:</strong> {layer.protocols}</p>
                                  <p className="text-gray-300"><strong>Purpose:</strong> {layer.purpose}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {section.tools && (
                            <div className="space-y-4 mb-4">
                              {section.tools.map((tool, toolIndex) => (
                                <div key={toolIndex} className="bg-gray-800 p-4 rounded-lg">
                                  <h4 className="font-semibold text-purple-400 mb-2">{tool.name}</h4>
                                  <p className="text-gray-300 mb-2"><strong>Purpose:</strong> {tool.purpose}</p>
                                  <p className="text-gray-300"><strong>Example:</strong> <code className="bg-gray-700 px-2 py-1 rounded text-cyan-400 font-mono text-sm">{tool.example}</code></p>
                                </div>
                              ))}
                            </div>
                          )}

                          {section.concepts && (
                            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                              {section.concepts.map((concept, concIndex) => (
                                <li key={concIndex}>{concept}</li>
                              ))}
                            </ul>
                          )}

                          {section.architecture && (
                            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                              {section.architecture.map((item, archIndex) => (
                                <li key={archIndex}>{item}</li>
                              ))}
                            </ul>
                          )}

                          {section.vulnerabilities && (
                            <div className="space-y-4 mb-4">
                              {section.vulnerabilities.map((vuln, vulnIndex) => (
                                <div key={vulnIndex} className="bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
                                  <h4 className="font-semibold text-red-400 mb-2">{vuln.name}</h4>
                                  <p className="text-gray-300 mb-2"><strong>Description:</strong> {vuln.description}</p>
                                  <p className="text-gray-300"><strong>Impact:</strong> {vuln.impact}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {section.practices && (
                            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                              {section.practices.map((practice, pracIndex) => (
                                <li key={pracIndex}>{practice}</li>
                              ))}
                            </ul>
                          )}

                          {section.layers && section.layers[0]?.name === "Application Layer" && (
                            <div className="space-y-4 mb-4">
                              {section.layers.map((layer, layerIndex) => (
                                <div key={layerIndex} className="bg-gray-800 p-4 rounded-lg">
                                  <h4 className="font-semibold text-purple-400 mb-2">{layer.name} Layer</h4>
                                  <p className="text-gray-300 mb-2"><strong>Protocols:</strong> {layer.protocols}</p>
                                  <p className="text-gray-300"><strong>Purpose:</strong> {layer.purpose}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {section.controls && (
                            <div className="space-y-4 mb-4">
                              {section.controls.map((control, ctrlIndex) => (
                                <div key={ctrlIndex} className="bg-gray-800 p-4 rounded-lg">
                                  <h4 className="font-semibold text-cyan-400 mb-2">{control.type} Controls</h4>
                                  <p className="text-gray-300"><strong>Examples:</strong> {control.examples}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {section.phases && (
                            <div className="space-y-4 mb-4">
                              {section.phases.map((phase, phaseIndex) => (
                                <div key={phaseIndex} className="bg-gray-800 p-4 rounded-lg">
                                  <h4 className="font-semibold text-purple-400 mb-2">{phase.phase}</h4>
                                  <p className="text-gray-300">{phase.desc}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {section.steps && (
                            <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-4">
                              {section.steps.map((step, stepIndex) => (
                                <li key={stepIndex}>{step}</li>
                              ))}
                            </ol>
                          )}

                          {section.platforms && (
                            <div className="space-y-4 mb-4">
                              {section.platforms.map((platform, platIndex) => (
                                <div key={platIndex} className="bg-gray-800 p-4 rounded-lg">
                                  <h4 className="font-semibold text-cyan-400 mb-2">{platform.name}</h4>
                                  <p className="text-gray-300">{platform.desc}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {section.techniques && (
                            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                              {section.techniques.map((technique, techIndex) => (
                                <li key={techIndex}>{technique}</li>
                              ))}
                            </ul>
                          )}

                          {section.vulns && (
                            <div className="space-y-4 mb-4">
                              {section.vulns.map((vuln, vulnIndex) => (
                                <div key={vulnIndex} className="bg-gray-800 p-4 rounded-lg">
                                  <h4 className="font-semibold text-red-400 mb-2">{vuln.type}</h4>
                                  <p className="text-gray-300">{vuln.desc}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {section.elements && (
                            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                              {section.elements.map((element, elemIndex) => (
                                <li key={elemIndex}>{element}</li>
                              ))}
                            </ul>
                          )}

                          {section.guidelines && (
                            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                              {section.guidelines.map((guideline, guideIndex) => (
                                <li key={guideIndex}>{guideline}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}

                      {selectedModule.content.practice && (
                        <div className="bg-blue-900/20 border border-blue-500 rounded-lg p-4 mb-6">
                          <h3 className="font-semibold mb-2 text-blue-400">💻 Practice Exercise</h3>
                          <p className="text-gray-300">{selectedModule.content.practice}</p>
                        </div>
                      )}

                      {!selectedModule.completed && !showQuiz && (
                        <div className="flex space-x-4">
                          <button
                            onClick={() => setShowQuiz(true)}
                            className="btn-primary"
                          >
                            Take Quiz
                          </button>
                          <Link to={`/tools`} className="btn-secondary">
                            Try Related Tools
                          </Link>
                        </div>
                      )}

                      {showQuiz && selectedModule.content.quiz && (
                        <div className="bg-gray-800 p-6 rounded-lg">
                          <h3 className="text-xl font-semibold mb-4 text-cyan-400">Knowledge Check</h3>
                          {selectedModule.content.quiz.map((question, qIndex) => (
                            <div key={qIndex} className="mb-6">
                              <p className="font-semibold mb-3">{question.question}</p>
                              <div className="space-y-2">
                                {question.options.map((option, oIndex) => (
                                  <label key={oIndex} className="flex items-center space-x-3 cursor-pointer">
                                    <input
                                      type="radio"
                                      name={`question-${qIndex}`}
                                      value={oIndex}
                                      checked={quizAnswers[qIndex] === oIndex}
                                      onChange={() => handleQuizAnswer(qIndex, oIndex)}
                                      className="text-cyan-400"
                                    />
                                    <span className="text-gray-300">{option}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          ))}
                          <button
                            onClick={submitQuiz}
                            className="btn-primary"
                            disabled={Object.keys(quizAnswers).length !== selectedModule.content.quiz.length}
                          >
                            Submit Quiz
                          </button>
                        </div>
                      )}

                      {quizCompleted && (
                        <div className="bg-green-900/20 border border-green-500 rounded-lg p-4">
                          <h3 className="font-semibold mb-2 text-green-400">🎉 Module Completed!</h3>
                          <p className="text-gray-300">Great job! You've successfully completed this module.</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <h1 className="text-4xl font-space font-bold mb-4">Choose a Learning Path</h1>
                <p className="text-xl text-gray-300 mb-8">
                  Select a path from the sidebar to start your cybersecurity journey.
                </p>
                <Link to="/" className="btn-secondary">
                  Back to Home
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}