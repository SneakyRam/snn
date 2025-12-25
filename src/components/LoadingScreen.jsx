import { motion } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl font-space font-bold gradient-text mb-4">
            Sneaky::Lab
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gray-400 text-lg mb-8"
        >
          Initializing Lab Environment...
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
          className="h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"
          onAnimationComplete={onComplete}
        />
      </div>
    </motion.div>
  );
}