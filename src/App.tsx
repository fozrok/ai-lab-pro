import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { TitleProvider } from './contexts/TitleContext';
import { BrandThemeProvider } from './contexts/BrandThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import AppContent from './components/AppContent';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <TitleProvider>
            <BrandThemeProvider>
              <AppContent />
            </BrandThemeProvider>
          </TitleProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}