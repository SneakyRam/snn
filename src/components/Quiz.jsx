import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function Quiz({ questions, onComplete, moduleTitle }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswerSelect = (answerIndex) => {
    if (showResult) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const isCorrect = answerIndex === question.correct;

    if (isCorrect) {
      setScore(prev => prev + 1);

      // Celebration effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    // Auto advance after delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setCompleted(true);
        if (score + (isCorrect ? 1 : 0) === questions.length) {
          // All correct - big celebration
          confetti({
            particleCount: 200,
            spread: 160,
            origin: { y: 0.6 }
          });
        }
        onComplete(score + (isCorrect ? 1 : 0), questions.length);
      }
    }, 2000);
  };

  if (completed) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 70;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
            passed ? 'bg-green-500' : 'bg-yellow-500'
          }`}
        >
          {passed ? (
            <span className="text-4xl">🎉</span>
          ) : (
            <span className="text-4xl">📚</span>
          )}
        </motion.div>

        <h3 className="text-2xl font-bold mb-4">
          {passed ? "Module Completed!" : "Keep Learning!"}
        </h3>

        <div className="text-6xl font-bold mb-4 gradient-text">
          {percentage}%
        </div>

        <p className="text-gray-400 mb-6">
          {passed
            ? "Great job! You've mastered this module."
            : "Review the material and try again to improve your score."
          }
        </p>

        {passed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-cyan-900/20 border border-cyan-400/30 rounded-lg p-4"
          >
            <div className="text-cyan-400 font-semibold mb-2">What you learned:</div>
            <div className="text-gray-300 text-sm">
              {moduleTitle} concepts and practical applications
            </div>
          </motion.div>
        )}
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-400">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm text-gray-400">
            Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
          </span>
        </div>

        <div className="w-full bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-6">{question.question}</h3>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`w-full p-4 rounded-lg border text-left transition-all duration-200 ${
                  showResult
                    ? index === question.correct
                      ? 'bg-green-900/50 border-green-400 text-green-300'
                      : index === selectedAnswer
                      ? 'bg-red-900/50 border-red-400 text-red-300'
                      : 'bg-gray-800 border-gray-600 text-gray-400'
                    : 'bg-gray-800 border-gray-600 hover:bg-gray-700 hover:border-gray-500'
                }`}
                whileHover={!showResult ? { scale: 1.02 } : {}}
                whileTap={!showResult ? { scale: 0.98 } : {}}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && index === question.correct && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-green-400"
                    >
                      ✓
                    </motion.span>
                  )}
                  {showResult && index === selectedAnswer && index !== question.correct && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-red-400"
                    >
                      ✗
                    </motion.span>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {showResult && selectedAnswer !== question.correct && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-blue-900/20 border border-blue-400/30 rounded-lg"
            >
              <div className="text-blue-400 font-semibold mb-2">Hint:</div>
              <div className="text-gray-300 text-sm">
                {question.hint || "Review the module content and try again."}
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}