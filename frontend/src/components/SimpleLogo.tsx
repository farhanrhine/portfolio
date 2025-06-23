import React from 'react';

const SimpleLogo: React.FC = () => {
  return (
    <div className="flex items-center gap-3 hover:scale-105 transition-all duration-300 cursor-default">
      {/* Logo Icon */}
      <div className="relative">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #D4B896 0%, #8B6914 50%, #2C5F5E 100%)',
            border: '2px solid rgba(212, 184, 150, 0.3)'
          }}
        >
          <span className="text-white font-bold text-lg">F</span>
        </div>
        
        {/* AI/ML Accent Dots */}
        <div className="absolute -top-1 -right-1">
          <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>
        </div>
        <div className="absolute -bottom-1 -left-1">
          <div className="w-2 h-2 rounded-full bg-orange-400 animate-ping"></div>
        </div>
      </div>
      
      {/* Text */}
      <div className="flex flex-col">        <span 
          className="text-xl font-bold hover:text-yellow-300 transition-colors duration-300"
          style={{ color: '#D4B896' }}
        >
          farhan
        </span>
        <span 
          className="text-xs opacity-80"
          style={{ color: '#B8A082' }}
        >
          AI/ML Portfolio
        </span>
      </div>
    </div>
  );
};

export default SimpleLogo;
