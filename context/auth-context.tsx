"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";

export const ADMIN_EMAIL = "chowdaryu24@gmail.com";

export interface UserSession {
  email: string;
  name: string;
  role: "admin" | "owner" | "farmer";
  avatar?: string;
}

interface AuthContextType {
  user: UserSession | null;
  isAdmin: boolean;
  isLoading: boolean;
  login: (email: string, password?: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  setUserSession: (user: UserSession | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = "kisanrent_auth_user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Sync session on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.email) {
          const role = parsed.email.toLowerCase() === ADMIN_EMAIL.toLowerCase() ? "admin" : (parsed.role || "farmer");
          setUser({ ...parsed, role });
        }
      }
    } catch {
      // ignore JSON parse error
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(async (email: string, password?: string) => {
    const trimmedEmail = email.trim().toLowerCase();
    const isAdminUser = trimmedEmail === ADMIN_EMAIL.toLowerCase();

    try {
      const supabase = createClient();
      // Only attempt Supabase if not placeholder URL
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
      if (supabaseUrl && !supabaseUrl.includes("your-project.supabase.co") && password) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: trimmedEmail,
          password,
        });
        if (!error && data.user) {
          const newSession: UserSession = {
            email: data.user.email || trimmedEmail,
            name: (data.user.user_metadata?.name as string) || (isAdminUser ? "Admin Chowdary" : trimmedEmail.split("@")[0]),
            role: isAdminUser ? "admin" : "farmer",
          };
          setUser(newSession);
          localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newSession));
          return { success: true };
        }
      }
    } catch {
      // Fallback to local session
    }

    // Local / demo authentication
    const newSession: UserSession = {
      email: trimmedEmail,
      name: isAdminUser ? "Admin Chowdary" : trimmedEmail.split("@")[0],
      role: isAdminUser ? "admin" : "farmer",
      avatar: isAdminUser ? "👑" : "👨‍🌾",
    };

    setUser(newSession);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newSession));
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    try {
      const supabase = createClient();
      supabase.auth.signOut().catch(() => {});
    } catch {
      // ignore
    }
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }, []);

  const setUserSession = useCallback((session: UserSession | null) => {
    setUser(session);
    if (session) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, []);

  const isAdmin = user?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin,
        isLoading,
        login,
        logout,
        setUserSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
