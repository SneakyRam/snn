import { useState } from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Understanding SQL Injection: A Beginner's Guide",
    excerpt: "Learn how SQL injection attacks work and how to prevent them in your web applications.",
    author: "Sneaky::Lab Team",
    date: "2025-01-15",
    category: "Web Security",
    readTime: "8 min read",
    tags: ["SQL", "Injection", "Web Security", "OWASP"],
    featured: true
  },
  {
    id: 2,
    title: "Network Segmentation: Why It Matters",
    excerpt: "Discover the importance of network segmentation in modern cybersecurity strategies.",
    author: "Alex Chen",
    date: "2025-01-12",
    category: "Networking",
    readTime: "6 min read",
    tags: ["Networking", "Segmentation", "Security"],
    featured: false
  },
  {
    id: 3,
    title: "Password Security in 2025: Best Practices",
    excerpt: "Updated guidelines for creating and managing secure passwords in the modern era.",
    author: "Sarah Johnson",
    date: "2025-01-10",
    category: "Authentication",
    readTime: "5 min read",
    tags: ["Passwords", "Authentication", "Best Practices"],
    featured: false
  },
  {
    id: 4,
    title: "Introduction to Ethical Hacking",
    excerpt: "A comprehensive guide to getting started with ethical hacking and penetration testing.",
    author: "Mike Rodriguez",
    date: "2025-01-08",
    category: "Foundations",
    readTime: "12 min read",
    tags: ["Ethical Hacking", "Penetration Testing", "Career"],
    featured: true
  },
  {
    id: 5,
    title: "Zero Trust Architecture Explained",
    excerpt: "Understanding the principles of zero trust and its implementation in modern networks.",
    author: "Dr. Emily Watson",
    date: "2025-01-05",
    category: "Blue Team",
    readTime: "10 min read",
    tags: ["Zero Trust", "Architecture", "Network Security"],
    featured: false
  },
  {
    id: 6,
    title: "Bug Bounty Programs: A Complete Guide",
    excerpt: "Everything you need to know about participating in bug bounty programs as a beginner.",
    author: "David Kim",
    date: "2025-01-03",
    category: "Bug Bounty",
    readTime: "15 min read",
    tags: ["Bug Bounty", "Vulnerability", "Hacking"],
    featured: true
  }
];

const categories = ["All", "Web Security", "Networking", "Authentication", "Foundations", "Blue Team", "Bug Bounty"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12"
        >
          <h1 className="text-5xl font-space font-bold mb-6">
            <span className="gradient-text">Knowledge</span> Hub
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Deep dives, tutorials, and insights into cybersecurity concepts, tools, and best practices.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-cyan-400 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-space font-bold mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-purple-500 text-black px-2 py-1 rounded text-xs font-bold">
                      FEATURED
                    </span>
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-gray-700 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Posts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-space font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-400">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-gray-700 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 py-12 bg-linear-to-r from-cyan-400/10 to-purple-500/10 rounded-2xl text-center"
        >
          <h2 className="text-3xl font-space font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest cybersecurity insights, tutorials, and platform updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}