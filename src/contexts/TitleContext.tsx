import React, { createContext, useContext, useState } from 'react';
import { Brain, Rocket, Zap, Target } from 'lucide-react';
import { useTheme } from './ThemeContext';

export interface BrandTitle {
  name: string;
  icon: typeof Brain;
  gradient: string;
  logoUrl: {
    light: string;
    dark: string;
  };
}

const brandTitles: BrandTitle[] = [
  {
    name: "HypnoLab.AI PRO",
    icon: Brain,
    gradient: "from-purple-600 to-blue-500 dark:from-neon-purple dark:to-neon-blue",
    logoUrl: {
      light: "https://res.cloudinary.com/dhxriuzu5/image/upload/v1732682545/hypnolab-pro-logo-v2_mpcdoh.png",
      dark: "https://res.cloudinary.com/dhxriuzu5/image/upload/v1732682545/hypnolab-pro-logo-v2_mpcdoh.png"
    }
  },
  {
    name: "DEFIANT",
    icon: Rocket,
    gradient: "from-[#000000] to-[#424242] dark:from-[#FFFFFF] dark:to-[#424242]",
    logoUrl: {
      light: "https://res.cloudinary.com/dhxriuzu5/image/upload/v1732676042/defiant-black_pzqeiu.png",
      dark: "https://res.cloudinary.com/dhxriuzu5/image/upload/v1732676042/defiant-white_o7jh0m.png"
    }
  },
  {
    name: "TheFreedomEra",
    icon: Zap,
    gradient: "from-[#EDB56A] to-[#C89A5A] dark:from-[#EDB56A] dark:to-[#C89A5A]",
    logoUrl: {
      light: "https://res.cloudinary.com/dhxriuzu5/image/upload/v1732682544/TFE-logo_di9we7.png",
      dark: "https://res.cloudinary.com/dhxriuzu5/image/upload/v1732682544/TFE-logo_di9we7.png"
    }
  },
  {
    name: "RankBreakers",
    icon: Target,
    gradient: "from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400",
    logoUrl: {
      light: "https://res.cloudinary.com/dhxriuzu5/image/upload/v1732682545/rank-breakers_l5u5rx.png",
      dark: "https://res.cloudinary.com/dhxriuzu5/image/upload/v1732682544/rank-breakers-light_cx6q0q.png"
    }
  }
];

interface TitleContextType {
  currentTitle: BrandTitle;
  setCurrentTitle: (title: BrandTitle) => void;
  titles: BrandTitle[];
}

const TitleContext = createContext<TitleContextType | undefined>(undefined);

export function TitleProvider({ children }: { children: React.ReactNode }) {
  const [currentTitle, setCurrentTitle] = useState<BrandTitle>(brandTitles[0]);

  return (
    <TitleContext.Provider value={{ currentTitle, setCurrentTitle, titles: brandTitles }}>
      {children}
    </TitleContext.Provider>
  );
}

export function useTitle() {
  const context = useContext(TitleContext);
  if (context === undefined) {
    throw new Error('useTitle must be used within a TitleProvider');
  }
  return context;
}