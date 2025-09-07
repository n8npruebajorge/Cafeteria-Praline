import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const Header = ({ cartCount, brand, tagline, onToggleCart }) => {
  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHaDwgtHBx1UaF_89wUTHBbWDxqVKv78O1Ng&s" 
              alt={`Logo ${brand}`} 
              className="h-10 w-10 rounded-full object-cover shadow-md"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary">
                {brand}
              </h1>
              <p className="text-xs text-gray-500">{tagline}</p>
            </div>
          </motion.div>

          <div className="flex items-center gap-3">
            <motion.button
              onClick={onToggleCart}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                cartCount > 0
                  ? 'bg-primary text-white shadow-lg hover:shadow-xl hover:scale-105'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              whileHover={cartCount > 0 ? { scale: 1.05 } : {}}
              whileTap={cartCount > 0 ? { scale: 0.95 } : {}}
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:block">Ver carrito</span>
              {cartCount > 0 && (
                <motion.span
                  className="bg-white text-primary text-xs font-bold px-2 py-1 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={cartCount}
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;