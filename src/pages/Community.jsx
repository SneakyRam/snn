import { motion } from "framer-motion";

const stats = [
  { label: "Active Learners", value: "2,847", icon: "👥" },
  { label: "Learning Paths", value: "6", icon: "🛤️" },
  { label: "Tools Used", value: "15,632", icon: "🛠️" },
  { label: "Most Popular Path", value: "Web Security", icon: "🔒" },
];

const features = [
  {
    title: "Discussion Forums",
    description: "Coming soon: Share knowledge and ask questions with the community.",
    icon: "💬",
    status: "Coming Soon"
  },
  {
    title: "Study Groups",
    description: "Form groups with learners at similar skill levels.",
    icon: "👥",
    status: "Coming Soon"
  },
  {
    title: "Mentorship Program",
    description: "Connect with experienced cybersecurity professionals.",
    icon: "🎓",
    status: "Coming Soon"
  },
  {
    title: "CTF Challenges",
    description: "Participate in capture the flag competitions.",
    icon: "🏁",
    status: "Coming Soon"
  },
];

export default function Community() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-20"
        >
          <h1 className="text-5xl font-space font-bold mb-6">
            Join the <span className="gradient-text">Sneaky::Lab</span> Community
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Learning cybersecurity is better together. Connect with fellow learners,
            share knowledge, and grow your skills in a supportive community.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Community Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-space font-bold mb-6">Learning Together</h2>
              <p className="text-gray-300 mb-6">
                Cybersecurity is a field that thrives on collaboration and knowledge sharing.
                Our community is built on the principles of mutual support, ethical learning,
                and continuous improvement.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-3">✓</span>
                  Share your learning journey and discoveries
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-3">✓</span>
                  Get help when you're stuck on a concept
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-3">✓</span>
                  Contribute to the platform's growth
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-3">✓</span>
                  Network with cybersecurity professionals
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Community Guidelines</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p><strong className="text-cyan-400">Be Ethical:</strong> Only practice on systems you own or have permission to test.</p>
                <p><strong className="text-cyan-400">Share Knowledge:</strong> Help others learn and grow.</p>
                <p><strong className="text-cyan-400">Stay Legal:</strong> Follow all applicable laws and regulations.</p>
                <p><strong className="text-cyan-400">Be Respectful:</strong> Treat all community members with respect.</p>
                <p><strong className="text-cyan-400">Learn Continuously:</strong> Cybersecurity evolves rapidly - stay current.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-space font-bold text-center mb-12">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card relative"
              >
                <div className="absolute top-4 right-4 bg-purple-500 text-black px-2 py-1 rounded text-xs font-bold">
                  {feature.status}
                </div>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-20"
        >
          <h2 className="text-3xl font-space font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your cybersecurity learning journey today and become part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/learn" className="btn-primary">
              Start Learning
            </a>
            <a href="/tools" className="btn-secondary">
              Explore Tools
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}