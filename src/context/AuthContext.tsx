"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type User = {
  name: string;
  email: string;
  avatar: string;
};

interface AuthContextType {
  user: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
  isAuthModalOpen: boolean;
  authView: 'signin' | 'signup';
  openAuthModal: (view?: 'signin' | 'signup') => void;
  closeAuthModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [authView, setAuthView] = useState<'signin' | 'signup'>('signin');

  const openAuthModal = (view: 'signin' | 'signup' = 'signin') => {
    setAuthView(view);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => setAuthModalOpen(false);

  const login = (name: string, email: string) => {
    let finalName = name;

    // Simulate database lookup using localStorage
    if (typeof window !== 'undefined') {
      try {
        const storedUsersStr = localStorage.getItem('mock_users_db');
        const storedUsers = storedUsersStr ? JSON.parse(storedUsersStr) : {};

        if (name) {
          // It's a Sign Up: save to mock DB
          storedUsers[email.toLowerCase()] = name;
          localStorage.setItem('mock_users_db', JSON.stringify(storedUsers));
        } else {
          // It's a Sign In: lookup from mock DB
          if (storedUsers[email.toLowerCase()]) {
            finalName = storedUsers[email.toLowerCase()];
          }
        }
      } catch (e) {
        console.error("Mock DB Error", e);
      }
    }

    // Fallback if not found in DB or Sign Up
    if (!finalName) {
      finalName = email.split('@')[0];
    }

    // Generate a fresh, premium-looking profile avatar using DiceBear based on the user's name
    const avatarUrl = `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(finalName)}&backgroundColor=2D5A27`;
    
    setUser({
      name: finalName,
      email,
      avatar: avatarUrl
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, login, logout, 
      isAuthModalOpen, authView, openAuthModal, closeAuthModal 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
