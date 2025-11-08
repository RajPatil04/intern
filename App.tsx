import React, { useState } from 'react';
import { CodeEntry } from './components/CodeEntry';
import { VerifiedPage } from './components/VerifiedPage';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return <VerifiedPage />;
  }

  return <CodeEntry onAuthenticated={handleAuthentication} />;
};

export default App;
