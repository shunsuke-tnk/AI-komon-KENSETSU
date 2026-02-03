import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wider transition-all duration-300 focus:outline-none uppercase";
  
  const variants = {
    primary: "bg-gradient-to-r from-orange-600 via-amber-500 to-amber-600 text-white border-2 border-orange-400 hover:from-orange-700 hover:via-amber-600 hover:to-amber-700 shadow-lg shadow-orange-500/30 [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]",
    secondary: "bg-zinc-900 text-white border border-zinc-800 hover:border-orange-500 hover:text-orange-500",
    outline: "bg-transparent border border-white/30 text-white hover:border-white hover:bg-white/5"
  };

  const sizes = {
    sm: "px-6 py-3 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base",
    xl: "px-12 py-6 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-4 w-5 h-5" />}
    </button>
  );
};