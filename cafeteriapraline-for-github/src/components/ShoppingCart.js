import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingCart as ShoppingCartIcon } from 'lucide-react';

const ShoppingCart = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  customerName, 
  setCustomerName, 
  onSendOrder,
  menuOptions,
  currency,
  categories,
  onClearCart, // New prop for clearing cart
  showToast // New prop for showing toast
}) => {
  const [orderComment, setOrderComment] = useState('');

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: currency
    }).format(price);
  };

  const calculateTotal = () => {
    return Object.values(cartItems).reduce((total, item) => total + (item.finalPrice * item.quantity), 0);
  };

  const getOptionLabel = (optionSetId, choiceId) => {
    const optionSet = menuOptions[optionSetId];
    if (!optionSet) return choiceId;
    const choice = optionSet.choices.find(c => c.id === choiceId);
    return choice ? choice.label.replace(/\s*\(\+\$.*\)\s*/, '') : choiceId;
  };

  const getCategoryName = (itemName) => {
    for (const category of categories) {
      if (category.items.some(item => item.name === itemName)) {
        // Special handling for "Ensaladas" category to ensure accent
        if (category.name === "Ensaladas") {
          return "Ensaladas"; 
        }
        return category.name;
      }
    }
    return 'Desconocida';
  };

  const getPrefixedAndSingularName = (name, category) => {
    const prefixes = {
      "Sándwiches": "Sándwich",
      "Baguettes": "Baguette",
      "Ensaladas": "Ensalada",
      "Frappuchino": "Frappuchino"
    };
    let displayName = name;

    // Apply prefix if applicable
    const prefix = prefixes[category];
    if (prefix && !displayName.startsWith(prefix)) {
      displayName = `${prefix} ${displayName}`;
    }

    // Handle specific singularization for common names that might appear plural in JSON
    const commonNamesToSingularize = {
      "Praliné": "Praliné", 
      "Italiano": "Italiano", 
      "Carnes frías": "Carnes frías", 
      "Pollo": "Pollo", 
      "Pavo": "Pavo", 
      "Mojito": "Mojito", 
      "Coca Cola": "Coca Cola", 
      "Helada (2 ingredientes)": "Crepa Helada (2 ingredientes)",
      "Matcha (sin café)": "Matcha (sin café)", 
      "Taro (sin café)": "Taro (sin café)", 
      "Baileys": "Baileys", 
      "Nutella": "Nutella", 
      "Mocha": "Mocha", 
      "Chocolate": "Chocolate", 
      "Chocolate Blanco": "Chocolate Blanco", 
      "Oreo": "Oreo", 
      "Caramelo": "Caramelo", 
      "Mazapán": "Mazapán", 
      "Tradicional": "Tradicional" 
    };

    if (commonNamesToSingularize[name]) {
      let finalName = commonNamesToSingularize[name];
      if (prefix && !finalName.startsWith(prefix)) {
        finalName = `${prefix} ${finalName}`;
      }
      return finalName;
    }
    
    // For other names, if they end in 's' and are not already prefixed, try to singularize
    if (displayName.endsWith('s') && !displayName.endsWith('ss') && !displayName.endsWith('es') && !prefixes[category]) {
      displayName = displayName.slice(0, -1);
    }

    return displayName;
  };

  const handleSendOrderClick = () => {
    onSendOrder(orderComment);
    onClearCart(); // Clear cart after sending order
    setOrderComment(''); // Clear order comment
    setCustomerName(''); // Clear customer name
    showToast('Pedido enviado, carrito reiniciado.'); // Show confirmation toast
  };

  const categoriesToHideInCart = ["Baguettes", "Sándwiches", "Ensaladas"];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />
          <motion.div
            className="relative w-full max-w-md bg-white shadow-2xl flex flex-col h-full"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <ShoppingCartIcon className="w-6 h-6 text-primary" />
                Tu Pedido
              </h2>
              <motion.button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6 text-gray-500" />
              </motion.button>
            </div>

            <div className="p-6 space-y-4 border-b border-gray-200">
              <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
                Nombre del cliente <span className="text-red-500">*</span>
              </label>
              <input
                id="customerName"
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Tu nombre"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {Object.keys(cartItems).length === 0 ? (
                <motion.div
                  className="text-center text-gray-500 py-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <ShoppingCartIcon className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium">Tu carrito está vacío.</p>
                  <p className="text-sm">¡Añade algo delicioso!</p>
                </motion.div>
              ) : (
                <AnimatePresence>
                  {Object.entries(cartItems).map(([key, item]) => (
                    <motion.div
                      key={key}
                      className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{getPrefixedAndSingularName(item.name, item.category)}</h3>
                        {!categoriesToHideInCart.includes(item.category) && (
                          <p className="text-xs text-gray-500 mb-1">Categoría: {getCategoryName(item.name)}</p>
                        )}
                        
                        {item.selectedOptions && Object.keys(item.selectedOptions).length > 0 && (
                          <ul className="text-xs text-gray-600 list-disc list-inside mt-1">
                            {Object.entries(item.selectedOptions).map(([optionSetId, choiceValue]) => {
                              if (Array.isArray(choiceValue)) {
                                return choiceValue.map(val => (
                                  <li key={`${optionSetId}-${val}`}>
                                    {getOptionLabel(optionSetId, val)}
                                  </li>
                                ));
                              } else {
                                return (
                                  <li key={optionSetId}>
                                    {getOptionLabel(optionSetId, choiceValue)}
                                  </li>
                                );
                              }
                            })}
                          </ul>
                        )}
                        
                        {item.notes && item.notes.trim() && (
                          <p className="text-xs text-gray-700 italic mt-1">Notas: "{item.notes}"</p>
                        )}
                        
                        <p className="text-sm font-medium text-gray-800 mt-2">
                          {formatPrice(item.finalPrice)} x {item.quantity} = {formatPrice(item.finalPrice * item.quantity)}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1">
                          <motion.button
                            onClick={() => onUpdateQuantity(key, item.quantity - 1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Minus className="w-4 h-4 text-gray-700" />
                          </motion.button>
                          <span className="font-semibold text-gray-800 w-6 text-center">{item.quantity}</span>
                          <motion.button
                            onClick={() => onUpdateQuantity(key, item.quantity + 1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Plus className="w-4 h-4 text-gray-700" />
                          </motion.button>
                        </div>
                        <motion.button
                          onClick={() => onRemoveItem(key)}
                          className="p-1 rounded-full text-red-500 hover:bg-red-100 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            <div className="p-6 border-t border-gray-200 space-y-4">
              <label htmlFor="orderComment" className="block text-sm font-medium text-gray-700">
                Comentario del pedido (opcional)
              </label>
              <textarea
                id="orderComment"
                value={orderComment}
                onChange={(e) => setOrderComment(e.target.value)}
                placeholder="Ej. Entregar 4:30 pm, Sin popote, etc."
                rows="3" // Changed to 3 rows for smaller height
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
              />
              
              <div className="flex justify-between items-center text-xl font-bold text-gray-900">
                <span>Total:</span>
                <span>{formatPrice(calculateTotal())}</span>
              </div>

              <motion.button
                onClick={handleSendOrderClick}
                disabled={Object.keys(cartItems).length === 0 || !customerName.trim()}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  Object.keys(cartItems).length > 0 && customerName.trim()
                    ? 'bg-primary text-white shadow-lg hover:shadow-xl hover:scale-105'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                whileHover={Object.keys(cartItems).length > 0 && customerName.trim() ? { scale: 1.02 } : {}}
                whileTap={Object.keys(cartItems).length > 0 && customerName.trim() ? { scale: 0.98 } : {}}
              >
                <ShoppingCartIcon className="w-5 h-5" />
                Enviar Pedido por WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCart;