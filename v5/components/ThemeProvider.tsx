"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "minimal" | "brutal" | "cyberpunk";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "minimal";
    }

    const savedTheme = localStorage.getItem("portfolio-theme");
    if (
      savedTheme === "minimal" ||
      savedTheme === "brutal" ||
      savedTheme === "cyberpunk"
    ) {
      return savedTheme;
    }

    return "minimal";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.className = `theme-${theme} scroll-smooth`;

    if (theme === "cyberpunk") {
      document.body.classList.add("crt");
    } else {
      document.body.classList.remove("crt");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
