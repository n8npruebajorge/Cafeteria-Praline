export const sendWhatsAppOrder = (cartItems, customerName, whatsappNumber, menuData, orderComment = '') => {
  if (!customerName.trim()) {
    alert('Por favor, ingresa tu nombre para el pedido.');
    return;
  }

  if (Object.keys(cartItems).length === 0) {
    alert('Tu carrito está vacío. Agrega algunos productos antes de enviar el pedido.');
    return;
  }

  const lines = [];
  lines.push(`🧾 *Pedido ${menuData.brand}*`);
  lines.push(`👤 Cliente: *${customerName}*`);
  lines.push('');

  let total = 0;

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

  const categoriesToHideInWhatsApp = ["Baguettes", "Sándwiches", "Ensaladas"];

  Object.values(cartItems).forEach(item => {
    const itemTotal = item.finalPrice * item.quantity;
    total += itemTotal;

    lines.push(`• ${item.quantity} × ${getPrefixedAndSingularName(item.name, item.category)} — ${formatPrice(itemTotal, menuData.currency)}`);
    
    if (!categoriesToHideInWhatsApp.includes(item.category)) {
      lines.push(`  Sección: ${getCategoryName(item.name, menuData.categories)}`);
    }
    
    // Add selected options
    if (item.selectedOptions && Object.keys(item.selectedOptions).length > 0) {
      const optionParts = [];
      Object.entries(item.selectedOptions).forEach(([optionSetId, choiceValue]) => {
        const optionSet = menuData.options[optionSetId];
        if (!optionSet) return; // Skip if optionSet not found

        if (Array.isArray(choiceValue)) {
          const selectedLabels = choiceValue.map(val => {
            const choice = optionSet.choices.find(c => c.id === val);
            return choice ? choice.label.replace(/\s*\(\+\$.*\)\s*/, '') : val;
          });
          if (selectedLabels.length > 0) {
            optionParts.push(`${optionSet.label}: ${selectedLabels.join(', ')}`);
          }
        } else {
          const choice = optionSet.choices.find(c => c.id === choiceValue);
          if (choice) {
            optionParts.push(`${optionSet.label}: ${choice.label.replace(/\s*\(\+\$.*\)\s*/, '')}`);
          }
        }
      });
      if (optionParts.length > 0) {
        lines.push(`  Opciones: ${optionParts.join(' | ')}`);
      }
    }

    // Add notes
    if (item.notes && item.notes.trim()) {
      lines.push(`  Notas: "${item.notes.trim()}"`);
    }
    lines.push(''); // Add an empty line after each item for better readability
  });

  if (orderComment.trim()) {
    lines.push(`Comentario del pedido: "${orderComment.trim()}"`);
    lines.push('');
  }

  lines.push(`Total: *${formatPrice(total, menuData.currency)}*`);
  lines.push('');
  lines.push('¡Gracias por tu pedido! 🙌');

  const message = encodeURIComponent(lines.join('\n'));
  const phoneNumber = whatsappNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  window.open(whatsappUrl, '_blank');
};

const formatPrice = (price, currency) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: currency
  }).format(price);
};

const getCategoryName = (itemName, categories) => {
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