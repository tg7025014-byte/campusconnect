import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AuthProvider } from '@/context/AuthContext';
import { isSupabaseConfigured } from '@/lib/supabase';
import './index.css';

function MissingConfiguration() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-center">
      <div className="max-w-lg rounded-2xl border border-rose-200 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-bold text-slate-900">The app could not connect to its database</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          The published build is missing its Supabase connection settings. Republish the project so Bolt
          can provide the project settings during the build.
        </p>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isSupabaseConfigured ? (
      <AuthProvider>
        <App />
      </AuthProvider>
    ) : (
      <MissingConfiguration />
    )}
  </StrictMode>,
);
