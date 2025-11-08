import React, { useState } from 'react';

interface CodeEntryProps {
  onAuthenticated: () => void;
}

export const CodeEntry: React.FC<CodeEntryProps> = ({ onAuthenticated }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const correctCode = 'CSTR4504';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim().toUpperCase() === correctCode) {
      setError('');
      onAuthenticated();
    } else {
      setError('Invalid code. Please try again.');
      setCode('');
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-6 animate-fade-in">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Enter Access Code</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Please enter the code to proceed.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="access-code" className="sr-only">
              Access Code
            </label>
            <input
              id="access-code"
              name="access-code"
              type="text"
              autoComplete="off"
              required
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                if (error) setError('');
              }}
              className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg tracking-widest text-center font-mono transition-shadow duration-300 focus:shadow-lg"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center animate-shake">{error}</p>}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </main>
  );
};
