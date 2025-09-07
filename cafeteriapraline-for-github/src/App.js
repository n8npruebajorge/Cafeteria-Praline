import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import ShoppingCart from './components/ShoppingCart';
import { menuData } from './data/menu';
import { sendWhatsAppOrder } from './utils/whatsapp';

const App = () => {
  const [cartItems, setCartItems] = useState({});
  const [customerName, setCustomerName] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const displayToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setToastMessage('');
    }, 3000); // Toast disappears after 3 seconds
  };

  const handleAddToCart = (item) => {
    const cartKey = `${item.name}-${JSON.stringify(item.selectedOptions)}-${item.notes}`;
    
    setCartItems(prev => {
      const existingItem = prev[cartKey];
      if (existingItem) {
        return {
          ...prev,
          [cartKey]: {
            ...existingItem,
            quantity: existingItem.quantity + 1
          }
        };
      } else {
        return {
          ...prev,
          [cartKey]: {
            ...item,
            quantity: 1
          }
        };
      }
    });
    displayToast('Agregado al carrito');
  };

  const handleUpdateQuantity = (key, newQuantity) => {
    setCartItems(prev => {
      if (newQuantity <= 0) {
        const newCart = { ...prev };
        delete newCart[key];
        return newCart;
      } else {
        return {
          ...prev,
          [key]: {
            ...prev[key],
            quantity: newQuantity
          }
        };
      }
    });
  };

  const handleRemoveItem = (key) => {
    setCartItems(prev => {
      const newCart = { ...prev };
      delete newCart[key];
      return newCart;
    });
  };

  const handleClearCart = () => {
    setCartItems({});
  };

  const handleSendOrder = (orderComment) => {
    sendWhatsAppOrder(cartItems, customerName, menuData.whatsapp, menuData, orderComment);
    // The clearing and toast logic is now in ShoppingCart.js handleSendOrderClick
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-white">
      <Header
        cartCount={getTotalCartItems()}
        brand={menuData.brand}
        tagline={menuData.tagline}
        onToggleCart={() => setIsCartOpen(!isCartOpen)} // Toggle cart visibility
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Menú
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros deliciosos baguettes, crepas, cafés y mucho más. 
            Selecciona tus favoritos y personalízalos a tu gusto.
          </p>
        </motion.div>

        {menuData.categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <CategorySection
              category={category}
              options={menuData.options}
              onAddToCart={handleAddToCart}
              cartItems={cartItems}
              showToast={displayToast}
            />
          </motion.div>
        ))}

        {/* Floating cart summary for mobile */}
        {getTotalCartItems() > 0 && !isCartOpen && (
          <motion.div
            className="fixed bottom-4 right-4 md:hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-semibold"
            >
              <span>🛒</span>
              <span>{getTotalCartItems()}</span>
            </button>
          </motion.div>
        )}
      </main>

      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        customerName={customerName}
        setCustomerName={setCustomerName}
        onSendOrder={handleSendOrder}
        menuOptions={menuData.options}
        currency={menuData.currency}
        categories={menuData.categories}
        onClearCart={handleClearCart}
        showToast={displayToast}
      />

      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg text-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            role="status"
            aria-live="polite"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-white border-t border-gray-200 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            ¡NO DUDES EN VISITARNOS!
          </h2>
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.0000000000005!2d-99.1189763!3d19.6537397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f46eeacb762b%3A0x3f96da72f81b76cb!2sPralin%C3%A9%20Oficial!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Praliné Oficial"
            ></iframe>
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHaDwgtHBx1UaF_89wUTHBbWDxqVKv78O1Ng&s" 
              alt={`Logo ${menuData.brand}`} 
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-primary">{menuData.brand}</span>
          </div>
          <p className="text-gray-600">
            {menuData.tagline} • WhatsApp: {menuData.whatsapp}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            “lo que la mente de un barista puede concebir y creer es lo que la mente de un barista puede lograr.”
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;