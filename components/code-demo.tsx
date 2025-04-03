"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

export default function CodeDemo() {
  const [activeTab, setActiveTab] = useState("javascript")
  const [copied, setCopied] = useState(false)

  const codeExamples = {
    javascript: `// Function to generate Fibonacci sequence
function fibonacci(n) {
  const sequence = [0, 1];
  
  if (n <= 1) return sequence.slice(0, n + 1);
  
  for (let i = 2; i <= n; i++) {
    const nextValue = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextValue);
  }
  
  return sequence;
}

// Generate first 10 Fibonacci numbers
const fibSequence = fibonacci(9);
console.log(fibSequence); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`,

    python: `# Function to generate Fibonacci sequence
def fibonacci(n):
    sequence = [0, 1]
    
    if n <= 1:
        return sequence[:n+1]
    
    for i in range(2, n+1):
        next_value = sequence[i-1] + sequence[i-2]
        sequence.append(next_value)
    
    return sequence

# Generate first 10 Fibonacci numbers
fib_sequence = fibonacci(9)
print(fib_sequence)  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`,

    react: `import React, { useState, useEffect } from 'react';

function FibonacciGenerator() {
  const [count, setCount] = useState(10);
  const [sequence, setSequence] = useState([]);
  
  useEffect(() => {
    // Generate Fibonacci sequence
    const generateFibonacci = (n) => {
      const result = [0, 1];
      
      if (n <= 1) return result.slice(0, n + 1);
      
      for (let i = 2; i <= n; i++) {
        result.push(result[i - 1] + result[i - 2]);
      }
      
      return result;
    };
    
    setSequence(generateFibonacci(count));
  }, [count]);
  
  return (
    <div>
      <h2>Fibonacci Sequence Generator</h2>
      <div>
        <label>
          Number of terms:
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(Math.max(0, parseInt(e.target.value)))}
            min="0"
          />
        </label>
      </div>
      <div>
        <h3>Sequence:</h3>
        <p>{sequence.join(', ')}</p>
      </div>
    </div>
  );
}

export default FibonacciGenerator;`,
  }

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-3xl mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-xl transform transition-all duration-700 hover:shadow-2xl">
      {/* Code tabs */}
      <div className="flex border-b border-gray-700">
        {Object.keys(codeExamples).map((lang) => (
          <button
            key={lang}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === lang
                ? "bg-gray-800 text-white border-b-2 border-blue-500"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab(lang)}
          >
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </button>
        ))}

        <button className="ml-auto px-3 py-2 text-gray-400 hover:text-white" onClick={copyCode}>
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>

      {/* Code content */}
      <pre className="p-4 text-white overflow-x-auto">
        <code>{codeExamples[activeTab]}</code>
      </pre>
    </div>
  )
}

