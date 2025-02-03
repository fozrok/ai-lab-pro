import React, { createContext, useContext, useEffect } from 'react';
import { useTitle } from './TitleContext';

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: {
    light: string;
    dark: string;
  };
  card: {
    light: string;
    dark: string;
  };
  text: {
    light: string;
    dark: string;
  };
}

const brandThemes: Record<string, ThemeColors> = {
  "HypnoLab.AI PRO": {
    primary: "from-purple-600 to-blue-500",
    secondary: "from-neon-purple to-neon-blue",
    accent: "purple",
    background: {
      light: "bg-gray-50",
      dark: "dark:bg-gray-900"
    },
    card: {
      light: "bg-white",
      dark: "dark:bg-gray-800"
    },
    text: {
      light: "text-gray-900",
      dark: "dark:text-white"
    }
  },
  "DEFIANT": {
    primary: "from-zinc-900 to-zinc-600",
    secondary: "from-zinc-100 to-zinc-400",
    accent: "zinc",
    background: {
      light: "bg-zinc-100",
      dark: "dark:bg-zinc-900"
    },
    card: {
      light: "bg-white",
      dark: "dark:bg-zinc-800"
    },
    text: {
      light: "text-zinc-900",
      dark: "dark:text-zinc-100"
    }
  },
  "TheFreedomEra": {
    primary: "from-amber-500 to-amber-700",
    secondary: "from-amber-400 to-amber-600",
    accent: "amber",
    background: {
      light: "bg-amber-50",
      dark: "dark:bg-amber-950"
    },
    card: {
      light: "bg-white",
      dark: "dark:bg-amber-900"
    },
    text: {
      light: "text-amber-900",
      dark: "dark:text-amber-100"
    }
  },
  "RankBreakers": {
    primary: "from-blue-500 to-indigo-600",
    secondary: "from-blue-400 to-indigo-500",
    accent: "blue",
    background: {
      light: "bg-blue-50",
      dark: "dark:bg-slate-900"
    },
    card: {
      light: "bg-white",
      dark: "dark:bg-slate-800"
    },
    text: {
      light: "text-blue-900",
      dark: "dark:text-blue-100"
    }
  }
};

interface BrandThemeContextType {
  currentTheme: ThemeColors;
}

const BrandThemeContext = createContext<BrandThemeContextType | undefined>(undefined);

export function BrandThemeProvider({ children }: { children: React.ReactNode }) {
  const { currentTitle } = useTitle();
  const currentTheme = brandThemes[currentTitle.name];

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(brandThemes).forEach(([brand, theme]) => {
      if (brand === currentTitle.name) {
        root.classList.add(...theme.background.light.split(' '), ...theme.background.dark.split(' '));
      } else {
        root.classList.remove(...theme.background.light.split(' '), ...theme.background.dark.split(' '));
      }
    });
  }, [currentTitle]);

  return (
    <BrandThemeContext.Provider value={{ currentTheme }}>
      {children}
    </BrandThemeContext.Provider>
  );
}

export function useBrandTheme() {
  const context = useContext(BrandThemeContext);
  if (context === undefined) {
    throw new Error('useBrandTheme must be used within a BrandThemeProvider');
  }
  return context;
}