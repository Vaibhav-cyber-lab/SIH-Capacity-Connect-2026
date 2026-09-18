/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AuthScreen } from './components/auth/AuthScreen';
import { LandingPage } from './components/layout/LandingPage';
import { Layout } from './components/layout/Layout';
import { AdminDashboard } from './components/dashboards/AdminDashboard';
import { TrainerDashboard } from './components/dashboards/TrainerDashboard';
import { TraineeDashboard } from './components/dashboards/TraineeDashboard';
import { HomeDashboard } from './components/dashboards/HomeDashboard';

function AppContent() {
  const { user } = useAuth();
  const [showAuth, setShowAuth] = useState(false);

  if (!user) {
    if (showAuth) return <AuthScreen onBack={() => setShowAuth(false)} />;
    return <LandingPage onGetStarted={() => setShowAuth(true)} />;
  }

  return (
    <div className="h-screen w-full bg-gray-50">
      <HomeDashboard />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

