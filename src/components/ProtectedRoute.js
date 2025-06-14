import React, { useEffect, useState } from 'react';
import { getCurrentUser, signInWithRedirect } from 'aws-amplify/auth';

const ProtectedRoute = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    getCurrentUser()
      .then(() => setAuthenticated(true))
      .catch(() => {
        signInWithRedirect(); // Cognito Hosted UI
      });
  }, []);

  if (authenticated === null) return <div>Loading...</div>;
  return authenticated ? children : null;
};

export default ProtectedRoute;
