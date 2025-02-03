import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import HomePage from '../pages/HomePage';
import NewToolPage from '../pages/NewToolPage';
import AdminPage from '../pages/AdminPage';
import AdminLoginPage from '../pages/AdminLoginPage';
import TrainingPage from '../pages/TrainingPage';
import { ProtectedRoute } from './auth/ProtectedRoute';

export default function AppContent() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="max-w-[90rem] mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route 
            path="/new" 
            element={
              <ProtectedRoute>
                <NewToolPage />
              </ProtectedRoute>
            } 
          />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
    </div>
  );
}