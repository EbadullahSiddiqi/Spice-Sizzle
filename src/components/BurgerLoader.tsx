import React from 'react';

const BurgerLoader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="w-24 h-24 relative">
        {/* Top Bun */}
        <div className="absolute w-20 h-8 bg-[#F4A460] rounded-t-full left-2 animate-bounce" style={{ animationDelay: '0.1s' }}>
          <div className="absolute top-1 left-2 w-16 h-1 bg-[#DEB887] rounded-full opacity-50"></div>
          <div className="absolute w-full h-full bg-[#F4A460] rounded-t-full">
            <div className="absolute top-1 left-2 w-4 h-1 bg-[#DEB887] rounded-full opacity-50"></div>
            <div className="absolute top-2 left-4 w-4 h-1 bg-[#DEB887] rounded-full opacity-50"></div>
          </div>
        </div>

        {/* Lettuce */}
        <div className="absolute w-22 h-2 bg-[#90EE90] top-7 left-1 animate-bounce" style={{ animationDelay: '0.2s' }}>
          <div className="absolute w-full h-full bg-[#90EE90] rounded-md"></div>
        </div>

        {/* Cheese */}
        <div className="absolute w-22 h-1 bg-[#FFD700] top-9 left-1 animate-bounce" style={{ animationDelay: '0.3s' }}>
          <div className="absolute w-full h-full bg-[#FFD700] rounded-sm"></div>
        </div>

        {/* Patty */}
        <div className="absolute w-22 h-3 bg-[#8B4513] top-10 left-1 animate-bounce" style={{ animationDelay: '0.4s' }}>
          <div className="absolute w-full h-full bg-[#8B4513] rounded-md">
            <div className="absolute top-0.5 left-2 w-3 h-0.5 bg-[#654321] rounded-full opacity-50"></div>
            <div className="absolute top-1.5 left-4 w-3 h-0.5 bg-[#654321] rounded-full opacity-50"></div>
          </div>
        </div>

        {/* Bottom Bun */}
        <div className="absolute w-20 h-6 bg-[#F4A460] rounded-b-lg top-12 left-2 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <div className="absolute bottom-1 left-2 w-16 h-1 bg-[#DEB887] rounded-full opacity-50"></div>
        </div>

        {/* Loading Text */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <p className="text-red-800 font-medium animate-pulse">Preparing your meal...</p>
        </div>
      </div>
    </div>
  );
};

export default BurgerLoader;