import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function InteractiveTerminal({ commands, onCommand, taskCompleted, currentTask }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "output", content: "Welcome to Sneaky::Lab Terminal" },
    { type: "output", content: "Type 'help' for available commands" },
    { type: "output", content: "" }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const command = input.trim();
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);

    // Add command to history
    setHistory(prev => [...prev, { type: "input", content: `$ ${command}` }]);

    // Process command
    const result = processCommand(command);
    if (result) {
      setHistory(prev => [...prev, ...result]);
    }

    setInput("");
  };

  const processCommand = (command) => {
    const cmd = command.toLowerCase().split(" ")[0];
    const args = command.split(" ").slice(1);

    switch (cmd) {
      case "help":
        return [
          { type: "output", content: "Available commands:" },
          { type: "output", content: "  ls          - List directory contents" },
          { type: "output", content: "  cd          - Change directory" },
          { type: "output", content: "  pwd         - Print working directory" },
          { type: "output", content: "  cat         - Display file contents" },
          { type: "output", content: "  chmod       - Change file permissions" },
          { type: "output", content: "  ps          - Display process status" },
          { type: "output", content: "  clear       - Clear terminal" },
          { type: "output", content: "  help        - Show this help" }
        ];

      case "ls":
        if (commands.ls) {
          return commands.ls(args);
        }
        return [{ type: "output", content: "ls: command not found in this context" }];

      case "cd":
        if (commands.cd) {
          return commands.cd(args);
        }
        return [{ type: "output", content: "cd: command not found in this context" }];

      case "pwd":
        if (commands.pwd) {
          return commands.pwd();
        }
        return [{ type: "output", content: "pwd: command not found in this context" }];

      case "cat":
        if (commands.cat) {
          return commands.cat(args);
        }
        return [{ type: "output", content: "cat: command not found in this context" }];

      case "chmod":
        if (commands.chmod) {
          return commands.chmod(args);
        }
        return [{ type: "output", content: "chmod: command not found in this context" }];

      case "ps":
        if (commands.ps) {
          return commands.ps();
        }
        return [{ type: "output", content: "ps: command not found in this context" }];

      case "clear":
        setHistory([]);
        return null;

      default:
        return [{ type: "output", content: `${cmd}: command not found` }];
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
      <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-400 ml-4 font-mono">Terminal</span>
        </div>
      </div>

      <div className="h-80 overflow-y-auto p-4 font-mono text-sm">
        {history.map((line, index) => (
          <div key={index} className={`mb-1 ${line.type === 'input' ? 'text-cyan-400' : 'text-gray-300'}`}>
            {line.content}
          </div>
        ))}

        {currentTask && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 bg-cyan-900/20 border border-cyan-400/30 rounded"
          >
            <div className="text-cyan-400 font-semibold mb-1">Task:</div>
            <div className="text-gray-300">{currentTask}</div>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="mt-2 flex items-center">
          <span className="text-cyan-400 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-gray-300 font-mono"
            placeholder="Type a command..."
            autoComplete="off"
          />
        </form>
      </div>

      {taskCompleted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-900/20 border-t border-green-400/30 p-3"
        >
          <div className="text-green-400 font-semibold text-center">
            ✓ Task Completed!
          </div>
        </motion.div>
      )}
    </div>
  );
}