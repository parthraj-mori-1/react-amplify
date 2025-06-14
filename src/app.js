import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage';
import HomeHealthcare from './pages/HomeReferralPage';
import InvoiceProcessing from './pages/invoiceprocessing';
import ChatWithPDF from './pages/Chatpdf';
import ImmigrationInfo from './pages/immigrationinfo';
import ProtectedRoute from './components/ProtectedRoute'; // 👈 new import

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
