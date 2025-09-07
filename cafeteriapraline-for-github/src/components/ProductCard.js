import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

const ProductCard = ({ item, options, onAddToCart, cartQuantity = 0, showToast, categoryName }) => {
  const [quantity, setQuantity] = useState(cartQuantity);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [notes, setNotes] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState({}); // State for accordion open/close

  const handleOptionChange = (optionSetId, value, isMultiple = false, maxSelections = null) => {
    setSelectedOptions(prev => {
      const newOptions = { ...prev };
      
      if (isMultiple) {
        // For multi-select, value is expected to be an array of selected IDs
        newOptions[optionSetId] = value;
      } else {
        newOptions[optionSetId] = value;
      }
      
      return newOptions;
    });
    setShowWarning(false); // Hide warning when an option is selected
  };

  const calculatePrice = () => {
    let totalPrice = item.price;
    
    if (item.optionSets) {
      item.optionSets.forEach(optionSetId => {
        const optionSet = options[optionSetId];
        if (!optionSet) return;
        
        const selectedValues = selectedOptions[optionSetId];
        if (!selectedValues) return;
        
        if (Array.isArray(selectedValues)) {
          selectedValues.forEach(value => {
            const choice = optionSet.choices.find(c => c.id === value);
            if (choice) totalPrice += choice.delta;
          });
        } else {
          const choice = optionSet.choices.find(c => c.id === selectedValues);
          if (choice) totalPrice += choice.delta;
        }
      });
    }
    
    return totalPrice;
  };

  const handleAddToCart = () => {
    // Validate if all required options are selected
    const allOptionsSelected = item.optionSets ? item.optionSets.every(optionSetId => {
      const optionSet = options[optionSetId];
      if (!optionSet) return true; // If optionSet not found, assume it's not required
      
      const selectedValue = selectedOptions[optionSetId];
      if (optionSet.multi) {
        // For multi-select, check if exactly maxSelections are chosen if max is defined
        if (optionSet.max) {
          return selectedValue && selectedValue.length === optionSet.max;
        }
        return selectedValue && selectedValue.length > 0;
      } else {
        return selectedValue && selectedValue !== '';
      }
    }) : true;

    // Specific validation for "Crepa Helada (2 ingredientes)"
    if (item.name === "Helada (2 ingredientes)") {
      const selectedCrepeOptions = selectedOptions["crepe_helada"] || [];
      if (selectedCrepeOptions.length !== 2 || selectedCrepeOptions.some(opt => opt === '')) { // Ensure both are selected
        setShowWarning(true);
        return;
      }
    }

    if (!allOptionsSelected) {
      setShowWarning(true);
      return;
    }

    const finalPrice = calculatePrice();
    onAddToCart({
      ...item,
      selectedOptions,
      notes,
      finalPrice,
      quantity: 1,
      category: categoryName // Pass category name to cart item
    });
    setQuantity(0); // Reset quantity to 0
    setSelectedOptions({}); // Clear selected options
    setNotes(''); // Clear notes
    setAccordionOpen({}); // Collapse accordions
    setShowWarning(false); // Hide warning on successful add
    if (showToast) { // Check if showToast is provided before calling
      showToast('Agregado al carrito'); // Show toast notification
    }
  };

  const formatPrice = () => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(calculatePrice());
  };

  const toggleAccordion = (optionSetId) => {
    setAccordionOpen(prev => ({
      ...prev,
      [optionSetId]: !prev[optionSetId]
    }));
  };

  const getPrefixedAndSingularName = (name, category) => {
    const prefixes = {
      "Sándwiches": "Sándwich",
      "Baguettes": "Baguette",
      "Ensaladas": "Ensalada",
      "Frappuchino": "Frappuchino" // Add Frappuchino prefix
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
      "Matcha (sin café)": "Matcha (sin café)", // For Frappuchino
      "Taro (sin café)": "Taro (sin café)", // For Frappuchino
      "Baileys": "Baileys", // For Frappuchino
      "Nutella": "Nutella", // For Frappuchino
      "Mocha": "Mocha", // For Frappuchino
      "Chocolate": "Chocolate", // For Frappuchino
      "Chocolate Blanco": "Chocolate Blanco", // For Frappuchino
      "Oreo": "Oreo", // For Frappuchino
      "Caramelo": "Caramelo", // For Frappuchino
      "Mazapán": "Mazapán", // For Frappuchino
      "Tradicional": "Tradicional" // For Frappuchino
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

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{item.emoji}</span>
          <div>
            <h3 className="font-bold text-gray-900">{getPrefixedAndSingularName(item.name, categoryName)}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.ingredients}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-primary">
            {formatPrice()}
          </p>
        </div>
      </div>

      {/* Options */}
      {item.optionSets && (
        <div className="space-y-4 mb-4">
          {item.optionSets.map(optionSetId => {
            const optionSet = options[optionSetId];
            if (!optionSet) return null;

            const isCrepeHelada = item.name === "Helada (2 ingredientes)" && optionSetId === "crepe_helada";

            if (isCrepeHelada) {
              const selectedCrepeOptions = selectedOptions[optionSetId] || ['', '']; // Ensure it's an array of 2
              const crepeChoices = optionSet.choices;

              return (
                <div key={optionSetId} className="space-y-2">
                  {[0, 1].map(index => {
                    const currentSelection = selectedCrepeOptions[index];
                    const accordionKey = `${optionSetId}-${index}`;
                    const title = `Ingrediente ${index + 1}`;
                    const summary = currentSelection 
                      ? `Seleccionado: ${crepeChoices.find(c => c.id === currentSelection)?.label || currentSelection}`
                      : 'Sin selección';

                    return (
                      <div key={accordionKey} className="border border-gray-200 rounded-lg">
                        <motion.button
                          className="flex justify-between items-center w-full p-3 text-sm font-medium text-gray-700 bg-gray-50 rounded-t-lg"
                          onClick={() => toggleAccordion(accordionKey)}
                          initial={false}
                          animate={{ backgroundColor: accordionOpen[accordionKey] ? '#f3f4f6' : '#f9fafb' }}
                        >
                          <div>
                            {title}
                            <p className="text-xs text-gray-500">{summary}</p>
                          </div>
                          {accordionOpen[accordionKey] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </motion.button>
                        <AnimatePresence>
                          {accordionOpen[accordionKey] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden p-3"
                            >
                              <select
                                value={currentSelection}
                                onChange={(e) => {
                                  const newSelected = [...selectedCrepeOptions];
                                  newSelected[index] = e.target.value;
                                  handleOptionChange(optionSetId, newSelected, true, optionSet.max);
                                }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                              >
                                <option value="">Seleccionar...</option>
                                {crepeChoices.map(choice => (
                                  <option 
                                    key={choice.id} 
                                    value={choice.id}
                                  >
                                    {choice.label}
                                  </option>
                                ))}
                              </select>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              );
            } else {
              return (
                <div key={optionSetId} className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {optionSet.label}
                    {optionSet.max && ` (máx. ${optionSet.max})`}
                  </label>
                  
                  {optionSet.multi ? (
                    <select
                      multiple={true}
                      value={selectedOptions[optionSetId] || []}
                      onChange={(e) => {
                        const selectedValues = Array.from(e.target.selectedOptions).map(option => option.value);
                        handleOptionChange(optionSetId, selectedValues, true, optionSet.max);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-32"
                    >
                      <option value="">Seleccionar...</option>
                      {optionSet.choices.map(choice => (
                        <option 
                          key={choice.id} 
                          value={choice.id}
                          disabled={
                            (selectedOptions[optionSetId] || []).length >= optionSet.max &&
                            !(selectedOptions[optionSetId] || []).includes(choice.id)
                          }
                        >
                          {choice.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <select
                      value={selectedOptions[optionSetId] || ''}
                      onChange={(e) => handleOptionChange(optionSetId, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Seleccionar...</option>
                      {optionSet.choices.map(choice => (
                        <option key={choice.id} value={choice.id}>
                          {choice.label}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              );
            }
          })}
        </div>
      )}

      {/* Warning message */}
      {showWarning && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mb-4"
        >
          Por favor, selecciona todas las opciones requeridas.
        </motion.p>
      )}

      {/* Notes section - always visible with placeholder */}
      <div className="mb-4">
        <textarea
          id={`notes-${item.name}`}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notas específicas"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          rows="2"
        />
      </div>

      {/* Add to cart controls */}
      <div className="flex items-center justify-between">
        <motion.button
          onClick={handleAddToCart}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-4 h-4" />
          Agregar
        </motion.button>

        {quantity > 0 && (
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="text-sm text-gray-600">Cantidad:</span>
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1">
              <span className="font-semibold text-primary">{quantity}</span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;