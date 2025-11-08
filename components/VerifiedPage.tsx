import React from 'react';
import { VerifiedBadge } from './VerifiedBadge';

export const VerifiedPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 text-center transition-colors duration-500">
      <div className="w-full max-w-2xl animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Verification Status
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
          Your account has been successfully verified.
        </p>
        <VerifiedBadge />
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.7s ease-out forwards;
        }
      `}</style>
    </main>
  );
};
