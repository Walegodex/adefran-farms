"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';

type AuthView = 'signin' | 'signup';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView: AuthView;
}

export default function AuthModal({ isOpen, onClose, initialView }: AuthModalProps) {
  const [view, setView] = useState<AuthView>(initialView);
  const { login } = useAuth();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Update internal view if parent changes initialView
  useEffect(() => {
    if (isOpen) {
      setView(initialView);
      setName('');
      setEmail('');
      setPassword('');
    }
  }, [isOpen, initialView]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Perform mock login
    login(view === 'signup' ? name : '', email);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
            className="relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 z-10 text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight mb-2">
                {view === 'signin' ? 'Welcome Back' : 'Join Adefran Farms'}
              </h2>
              <p className="text-foreground/60 mb-8 text-sm">
                {view === 'signin' 
                  ? 'Sign in to access your account, track orders, and request quotes.' 
                  : 'Create an account to track your orders and get special wholesale pricing.'}
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {view === 'signup' && (
                  <div>
                    <label className="block text-sm font-semibold text-foreground/80 mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      required={view === 'signup'}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-black/5 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-farm-primary/50 focus:border-farm-primary transition-all text-foreground placeholder:text-foreground/30"
                    />
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-black/5 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-farm-primary/50 focus:border-farm-primary transition-all text-foreground placeholder:text-foreground/30"
                  />
                </div>

                <div>
                  <label className="flex items-center justify-between text-sm font-semibold text-foreground/80 mb-1.5">
                    Password
                    {view === 'signin' && (
                      <span className="text-farm-primary hover:text-farm-hover cursor-pointer font-normal text-xs transition-colors">Forgot?</span>
                    )}
                  </label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-black/5 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-farm-primary/50 focus:border-farm-primary transition-all text-foreground placeholder:text-foreground/30"
                  />
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full py-3.5 bg-farm-primary hover:bg-farm-hover text-white rounded-xl font-bold transition-colors shadow-lg shadow-farm-primary/25">
                    {view === 'signin' ? 'Sign In' : 'Create Account'}
                  </button>
                </div>
              </form>

              <div className="mt-8 text-center text-sm text-foreground/60">
                {view === 'signin' ? "Don't have an account? " : "Already have an account? "}
                <button 
                  onClick={() => setView(view === 'signin' ? 'signup' : 'signin')}
                  className="font-bold text-farm-primary hover:underline focus:outline-none"
                >
                  {view === 'signin' ? 'Sign up' : 'Sign in'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
