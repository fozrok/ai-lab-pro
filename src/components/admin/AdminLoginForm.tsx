import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function AdminLoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = await login(password);
    if (success) {
      navigate('/admin');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
          <Lock className="h-6 w-6 text-purple-600 dark:text-neon-purple" />
        </div>
        <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">Admin Access</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Please enter your admin password to continue
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-purple-500 dark:focus:ring-neon-purple focus:border-purple-500 dark:focus:border-neon-purple focus:z-10 sm:text-sm bg-white dark:bg-gray-700"
            placeholder="Admin password"
          />
        </div>

        {error && (
          <div className="text-sm text-red-600 dark:text-red-400">
            {error}
          </div>
        )}

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 dark:bg-neon-purple dark:hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-neon-purple transition-all duration-200"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}