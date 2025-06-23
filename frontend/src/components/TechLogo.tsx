import React from 'react';

const TechLogo: React.FC = () => {
  return (
    <div className="flex items-center gap-3 hover:scale-105 transition-all duration-300 cursor-default group">
      {/* Tech-inspired Logo Icon */}
      <div className="relative">
        {/* Main Logo Circle */}
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:rotate-6"
          style={{
            background: 'linear-gradient(135deg, #D4B896 0%, #8B6914 50%, #2C5F5E 100%)',
            border: '2px solid rgba(212, 184, 150, 0.4)'
          }}
        >          {/* F Initial */}
          <span className="text-white font-bold text-lg">F</span>
        </div>
        
        {/* Orbiting Elements (AI/ML Theme) */}
        <div className="absolute inset-0 animate-spin" style={{animationDuration: '10s'}}>
          {/* Data Node 1 */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
          </div>
          {/* Data Node 2 */}
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
          {/* Data Node 3 */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          {/* Data Node 4 */}
          <div className="absolute top-1/2 -left-1 transform -translate-y-1/2">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
        
        {/* Neural Network Connections */}
        <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
          <svg className="w-full h-full" viewBox="0 0 48 48">
            <line x1="24" y1="8" x2="40" y2="24" stroke="#8B6914" strokeWidth="1" className="animate-pulse" />
            <line x1="40" y1="24" x2="24" y2="40" stroke="#8B6914" strokeWidth="1" className="animate-pulse" style={{animationDelay: '0.5s'}} />
            <line x1="24" y1="40" x2="8" y2="24" stroke="#8B6914" strokeWidth="1" className="animate-pulse" style={{animationDelay: '1s'}} />
            <line x1="8" y1="24" x2="24" y2="8" stroke="#8B6914" strokeWidth="1" className="animate-pulse" style={{animationDelay: '1.5s'}} />
          </svg>
        </div>
        
        {/* Central AI Indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-1 h-1 rounded-full bg-white animate-ping"></div>
        </div>
      </div>
      
      {/* Brand Text */}
      <div className="flex flex-col">        <span 
          className="text-xl font-bold hover:text-yellow-300 transition-colors duration-300 group-hover:text-yellow-200"
          style={{ color: '#D4B896' }}
        >
          farhan
        </span>
        <div className="flex items-center gap-1">
          <span 
            className="text-xs opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: '#B8A082' }}
          >
            AI/ML Engineer
          </span>
          <div className="flex gap-1 ml-1">
            <div className="w-1 h-1 rounded-full bg-blue-400 animate-ping"></div>
            <div className="w-1 h-1 rounded-full bg-green-400 animate-ping" style={{animationDelay: '0.2s'}}></div>
            <div className="w-1 h-1 rounded-full bg-purple-400 animate-ping" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechLogo;
