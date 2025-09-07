import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const CategorySection = ({ category, options, onAddToCart, cartItems, showToast }) => {
  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-3xl">{category.emoji}</span>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
          {category.note && (
            <p className="text-sm text-primary font-medium mt-1">{category.note}</p>
          )}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.items.map((item, index) => {
          const cartKey = `${category.name}-${item.name}`;
          const cartQuantity = cartItems[cartKey]?.quantity || 0;
          
          return (
            <motion.div
              key={`${item.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard
                item={item}
                options={options}
                onAddToCart={onAddToCart}
                cartQuantity={cartQuantity}
                showToast={showToast}
                categoryName={category.name} // Pass category name to ProductCard
              />
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default CategorySection;