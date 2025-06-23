import React from 'react';

interface ResponsiveLogoProps {
  variant?: 'header' | 'footer' | 'mobile';
}

const ResponsiveLogo: React.FC<ResponsiveLogoProps> = ({ variant = 'header' }) => {
  const isHeader = variant === 'header';
  const isMobile = variant === 'mobile';
  const isFooter = variant === 'footer';

  const logoSize = isMobile ? 8 : isFooter ? 10 : 12;
  const textSize = isMobile ? 'text-lg' : isFooter ? 'text-lg' : 'text-xl';
  const subtextSize = isMobile ? 'text-xs' : 'text-xs';

  return (
    <div className={`flex items-center gap-3 hover:scale-105 transition-all duration-300 cursor-default group ${isMobile ? 'justify-center' : ''}`}>
      {/* Adaptive Logo Icon */}
      <div className="relative">
        {/* Main Logo */}
        <div 
          className={`w-${logoSize} h-${logoSize} rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:rotate-6`}
          style={{
            background: 'linear-gradient(135deg, #D4B896 0%, #8B6914 50%, #2C5F5E 100%)',
            border: '2px solid rgba(212, 184, 150, 0.4)'
          }}
        >
          <span className={`text-white font-bold ${isMobile ? 'text-sm' : 'text-lg'}`}>F</span>
        </div>
        
        {/* Conditional Tech Elements for non-mobile */}
        {!isMobile && (
          <>
            {/* Orbiting Data Nodes */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '10s'}}>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              </div>
              <div className="absolute top-1/2 -right-1 transform -translate-y-1/2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <div className="absolute top-1/2 -left-1 transform -translate-y-1/2">
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
            
            {/* Central AI Indicator */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-1 h-1 rounded-full bg-white animate-ping"></div>
            </div>
          </>
        )}
        
        {/* Simple accent for mobile */}
        {isMobile && (
          <div className="absolute -top-1 -right-1">
            <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>
          </div>
        )}
      </div>
      
      {/* Brand Text */}
      <div className="flex flex-col">        <span 
          className={`${textSize} font-bold hover:text-yellow-300 transition-colors duration-300 group-hover:text-yellow-200`}
          style={{ color: '#D4B896' }}
        >
          farhan
        </span>
        <div className="flex items-center gap-1">
          <span 
            className={`${subtextSize} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
            style={{ color: '#B8A082' }}
          >
            {isMobile ? 'AI/ML' : 'AI/ML Engineer'}
          </span>
          {!isMobile && (
            <div className="flex gap-1 ml-1">
              <div className="w-1 h-1 rounded-full bg-blue-400 animate-ping"></div>
              <div className="w-1 h-1 rounded-full bg-green-400 animate-ping" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1 h-1 rounded-full bg-purple-400 animate-ping" style={{animationDelay: '0.4s'}}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLogo;
