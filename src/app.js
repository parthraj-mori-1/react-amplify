import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Amplify } from 'aws-amplify'; // 👈 import Amplify
import { awsConfig } from './aws-config'; // 👈 import your config
import HomePage from './components/homepage';
import HomeHealthcare from './pages/HomeReferralPage';
import InvoiceProcessing from './pages/invoiceprocessing';
import ChatWithPDF from './pages/Chatpdf';
import ImmigrationInfo from './pages/immigrationinfo';
import ProtectedRoute from './components/ProtectedRoute';

Amplify.configure(awsConfig); // 👈 configure it once at the top

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/home-healthcare"
          element={
            <ProtectedRoute>
              <HomeHealthcare />
            </ProtectedRoute>
          }
        />
        <Route
          path="/invoice-processing"
          element={
            <ProtectedRoute>
              <InvoiceProcessing />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat-pdf/*"
          element={
            <ProtectedRoute>
              <ChatWithPDF />
            </ProtectedRoute>
          }
        />
        <Route
          path="/immigration-info"
          element={
            <ProtectedRoute>
              <ImmigrationInfo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
