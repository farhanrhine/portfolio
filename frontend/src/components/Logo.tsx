import React from 'react';

interface LogoProps {
  size?: number;
  variant?: 'default' | 'light' | 'dark';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 40, 
  variant = 'default', 
  animated = true 
}) => {
  const colors = {
    default: {
      primary: '#D4B896',
      secondary: '#8B6914',
      accent: '#2C5F5E'
    },
    light: {
      primary: '#FFFFFF',
      secondary: '#F0F0F0',
      accent: '#E0E0E0'
    },
    dark: {
      primary: '#2C5F5E',
      secondary: '#1A3A3A',
      accent: '#8B6914'
    }
  };

  const theme = colors[variant];

  return (
    <div className={`inline-flex items-center gap-2 ${animated ? 'hover:scale-110 transition-transform duration-300' : ''}`}>
      {/* Custom SVG Logo */}
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        className={animated ? 'hover:rotate-12 transition-transform duration-500' : ''}
      >
        {/* Background Circle with Gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme.primary} />
            <stop offset="50%" stopColor={theme.secondary} />
            <stop offset="100%" stopColor={theme.accent} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Outer Ring */}
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="none" 
          stroke="url(#logoGradient)" 
          strokeWidth="3"
          className={animated ? 'animate-pulse' : ''}
        />
        
        {/* Inner Background */}
        <circle 
          cx="50" 
          cy="50" 
          r="38" 
          fill={theme.accent} 
          opacity="0.1"
        />
        
        {/* FR Letters */}
        <text 
          x="50" 
          y="60" 
          textAnchor="middle" 
          fill="url(#logoGradient)" 
          fontSize="28" 
          fontWeight="bold" 
          fontFamily="Arial, sans-serif"
          filter="url(#glow)"
        >
          FR
        </text>
        
        {/* AI/ML Accent - Neural Network Dots */}
        <circle cx="25" cy="25" r="2" fill={theme.secondary} opacity="0.7">
          {animated && <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />}
        </circle>
        <circle cx="35" cy="30" r="1.5" fill={theme.secondary} opacity="0.6">
          {animated && <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />}
        </circle>
        <circle cx="75" cy="25" r="2" fill={theme.secondary} opacity="0.7">
          {animated && <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite" />}
        </circle>
        <circle cx="65" cy="30" r="1.5" fill={theme.secondary} opacity="0.6">
          {animated && <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />}
        </circle>
        
        {/* Connecting Lines (Neural Network Style) */}
        <line x1="25" y1="25" x2="35" y2="30" stroke={theme.secondary} strokeWidth="1" opacity="0.4">
          {animated && <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />}
        </line>
        <line x1="75" y1="25" x2="65" y2="30" stroke={theme.secondary} strokeWidth="1" opacity="0.4">
          {animated && <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.8s" repeatCount="indefinite" />}
        </line>
      </svg>
      
      {/* Text Logo */}
      <div className="flex flex-col">
        <span 
          className={`font-bold text-lg leading-none ${animated ? 'hover:text-yellow-300 transition-colors duration-300' : ''}`}
          style={{ color: theme.primary }}
        >
          farhanrhine
        </span>
        <span 
          className="text-xs opacity-75 leading-none"
          style={{ color: theme.secondary }}
        >
          AI/ML Engineer
        </span>
      </div>
    </div>
  );
};

export default Logo;
