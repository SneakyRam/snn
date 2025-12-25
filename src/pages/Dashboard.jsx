import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const recentTools = [
  { name: "Password Strength Checker", used: "2 hours ago", icon: "🔐" },
  { name: "Hash Generator", used: "1 day ago", icon: "🔢" },
  { name: "URL Analyzer", used: "3 days ago", icon: "🔍" },
];

const achievements = [
  { name: "First Steps", description: "Completed your first module", icon: "🎯", unlocked: true },
  { name: "Tool Explorer", description: "Used 3 different tools", icon: "🛠️", unlocked: true },
  { name: "Path Starter", description: "Started a learning path", icon: "🚀", unlocked: false },
  { name: "Knowledge Seeker", description: "Read 5 blog articles", icon: "📚", unlocked: false },
];

export default function Dashboard() {
  const { user } = useAuth();

  // Mock progress data - in real app, fetch from Supabase
  const overallProgress = 15;
  const pathProgress = [
    { name: "Foundations", progress: 30, modules: 3 },
    { name: "Linux", progress: 0, modules: 0 },
    { name: "Networking", progress: 10, modules: 1 },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-space font-bold mb-2">
            Welcome back, <span className="gradient-text">{user?.email?.split('@')[0] || 'Learner'}</span>
          </h1>
          <p className="text-xl text-gray-300">
            Continue your cybersecurity learning journey. You're making great progress!
          </p>
        </motion.div>

        {/* Overall Progress */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg">Overall Completion</span>
              <span className="text-lg font-bold gradient-text">{overallProgress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-cyan-400 to-purple-500 h-4 rounded-full transition-all duration-1000"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
          </div>
          <p className="text-gray-400">
            You've completed {Math.round(overallProgress / 100 * 18)} out of 18 modules across all learning paths.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Continue Learning */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="card">
              <h2 className="text-2xl font-semibold mb-6">Continue Learning</h2>
              <div className="space-y-4">
                {pathProgress.map((path, index) => (
                  <div key={path.name} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{path.name}</h3>
                      <p className="text-sm text-gray-400 mb-2">
                        {path.modules} module{path.modules !== 1 ? 's' : ''} completed
                      </p>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                          style={{ width: `${path.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <Link
                      to={`/learn/${path.name.toLowerCase()}`}
                      className="btn-primary ml-4"
                    >
                      {path.progress > 0 ? 'Continue' : 'Start'}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link to="/learn" className="btn-secondary">
                  View All Paths
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Recent Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card">
              <h2 className="text-2xl font-semibold mb-6">Recent Tools</h2>
              <div className="space-y-4">
                {recentTools.map((tool, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-2xl">{tool.icon}</span>
                    <div className="flex-1">
                      <p className="font-medium">{tool.name}</p>
                      <p className="text-sm text-gray-400">{tool.used}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link to="/tools" className="btn-secondary">
                  Explore All Tools
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-space font-bold mb-6">Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card text-center ${achievement.unlocked ? 'border-cyan-400' : 'opacity-50'}`}
              >
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <h3 className="font-semibold mb-1">{achievement.name}</h3>
                <p className="text-sm text-gray-400">{achievement.description}</p>
                {achievement.unlocked && (
                  <div className="mt-2 text-cyan-400 font-bold">✓ Unlocked</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card"
        >
          <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/tools" className="btn-secondary text-center">
              Open Tools
            </Link>
            <Link to="/blog" className="btn-secondary text-center">
              Read Articles
            </Link>
            <Link to="/community" className="btn-secondary text-center">
              Join Community
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}