export const menuData = {
  "brand": "Praliné",
  "tagline": "Cafetería y Pastelería",
  "logo": "https://scontent.fmex5-1.fna.fbcdn.net/v/t39.30808-6/535257183_1369275571871740_9209457525368874523_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=PIZ999KQsVMQ7kNvwG4FaBR&_nc_oc=AdmuiMXxj4odUJUlaxwlUFJq-x3yqdBzj0qwuWK87ap-QuEpSgXfWhEiVky77OfGpLo&_nc_zt=23&_nc_ht=scontent.fmex5-1.fna&_nc_gid=gf5Y4I_4z6xG4xAvW3knMg&oh=00_AfW7uI6xSwJ6B0lauzRIKvQIICuhFCkFKcWy0OFnOilGkA&oe=68ACA402",
  "whatsapp": "+525554755085",
  "currency": "MXN",
  "options": {
    "milk": {
      "label": "Leche",
      "multi": false,
      "choices": [
        { "id": "entera", "label": "Leche entera", "delta": 0 },
        { "id": "deslactosada", "label": "Leche deslactosada (+$5)", "delta": 5 },
        { "id": "almendras", "label": "Leche de almendras (+$7)", "delta": 7 }
      ]
    },
    "dressing": {
      "label": "Aderezo",
      "multi": false,
      "choices": [
        { "id": "miel_mostaza", "label": "Miel mostaza", "delta": 0 },
        { "id": "ranch", "label": "Ranch", "delta": 0 },
        { "id": "mil_islas", "label": "Mil islas", "delta": 0 },
        { "id": "sin_aderezo", "label": "Sin aderezo", "delta": 0 }
      ]
    },
    "cap_sabor": {
      "label": "Sabor del capuchino",
      "multi": false,
      "choices": [
        { "id": "cajeta", "label": "Cajeta", "delta": 0 },
        { "id": "cereza", "label": "Cereza", "delta": 0 },
        { "id": "menta", "label": "Menta", "delta": 0 },
        { "id": "vainilla", "label": "Vainilla", "delta": 0 }
      ]
    },
    "cap_licor": {
      "label": "Licor",
      "multi": false,
      "choices": [
        { "id": "baileys", "label": "Baileys (+$15)", "delta": 15 },
        { "id": "amaretto", "label": "Amaretto (sin costo extra)", "delta": 0 },
        { "id": "kahlua", "label": "Kahlúa (sin costo extra)", "delta": 0 },
        { "id": "rompope", "label": "Rompope (sin costo extra)", "delta": 0 }
      ]
    },
    "cap_nut": {
      "label": "Sabor",
      "multi": false,
      "choices": [
        { "id": "avellana", "label": "Avellana", "delta": 0 },
        { "id": "macadamia", "label": "Macadamia", "delta": 0 }
      ]
    },
    "tisana_flavor": {
      "label": "Sabor de tisana",
      "multi": false,
      "choices": [
        {"id":"chabacano","label":"Chabacano","delta":0},
        {"id":"coco_mango","label":"Coco Mango","delta":0},
        {"id":"fresa_mango","label":"Fresa Mango","delta":0},
        {"id":"manzana_fresa","label":"Manzana Fresa","delta":0},
        {"id":"frutos_tropicales","label":"Frutos Tropicales","delta":0},
        {"id":"locura_moras","label":"Locura de Moras","delta":0},
        {"id":"papaya_pina","label":"Papaya Piña","delta":0},
        {"id":"manzana_arandano","label":"Manzana Arándano","delta":0},
        {"id":"manzana_roja","label":"Manzana Roja","delta":0},
        {"id":"ponche_frutas","label":"Ponche de Frutas","delta":0}
      ]
    },
    "tea_flavor": {
      "label": "Sabor de infusión",
      "multi": false,
      "choices": [
        { "id": "manzanilla", "label": "Manzanilla", "delta": 0 },
        { "id": "hierbabuena", "label": "Hierbabuena", "delta": 0 },
        { "id": "negro", "label": "Té negro", "delta": 0 },
        { "id": "verde", "label": "Té verde", "delta": 0 },
        { "id": "azahar", "label": "Azahar", "delta": 0 },
        { "id": "limon", "label": "Limón", "delta": 0 }
      ]
    },
    "bubble_flavor": {
      "label": "Sabor",
      "multi": false,
      "choices": [
        {"id":"pasion","label":"Fruta de la pasión","delta":0},
        {"id":"kiwi","label":"Kiwi","delta":0},
        {"id":"blueberry","label":"Blueberry","delta":0},
        {"id":"manzana_verde","label":"Manzana verde","delta":0},
        {"id":"oreo","label":"Oreo","delta":0},
        {"id":"chocolate","label":"Chocolate","delta":0},
        {"id":"fresa","label":"Fresa","delta":0},
        {"id":"vainilla","label":"Vainilla","delta":0},
        {"id":"coco","label":"Coco","delta":0}
      ]
    },
    "crepe_1": {
      "label": "Ingrediente (elige 1)",
      "multi": false,
      "choices": [
        {"id":"nutella","label":"Nutella","delta":0},
        {"id":"fresa","label":"Fresa","delta":0},
        {"id":"durazno","label":"Durazno","delta":0},
        {"id":"platano","label":"Plátano","delta":0},
        {"id":"philadelphia","label":"Philadelphia","delta":0},
        {"id":"cajeta","label":"Cajeta","delta":0},
        {"id":"nuez","label":"Nuez","delta":0},
        {"id":"almendra_tostada","label":"Almendra tostada","delta":0},
        {"id":"mozzarella","label":"Queso mozzarella","delta":0},
        {"id":"manchego","label":"Queso manchego","delta":0},
        {"id":"jamon","label":"Jamón de pierna","delta":0},
        {"id":"pavo","label":"Pechuga de pavo","delta":0},
        {"id":"pepperoni","label":"Pepperoni","delta":0},
        {"id":"champi","label":"Champiñones","delta":0},
        {"id":"salsa_italiana","label":"Salsa italiana","delta":0},
        {"id":"zarzamora","label":"Zarzamora","delta":0},
        {"id":"frutos_rojos","label":"Frutos rojos","delta":0}
      ]
    },
    "crepe_helada": {
      "label": "Ingredientes (elige 2)",
      "multi": true,
      "max": 2,
      "choices": [
        {"id":"fresa","label":"Fresa","delta":0},
        {"id":"nutella","label":"Nutella","delta":0},
        {"id":"cajeta","label":"Cajeta","delta":0},
        {"id":"platano","label":"Plátano","delta":0},
        {"id":"durazno","label":"Durazno","delta":0},
        {"id":"zarzamora","label":"Zarzamora","delta":0},
        {"id":"frutos_rojos","label":"Frutos rojos","delta":0},
        {"id":"philadelphia","label":"Philadelphia","delta":0}
      ]
    },
    "soda_flavor": {
      "label": "Sabor de soda",
      "multi": false,
      "choices": [
        {"id":"arandano","label":"Arándano","delta":0},
        {"id":"blueberry","label":"Blueberry","delta":0},
        {"id":"frambuesa","label":"Frambuesa","delta":0},
        {"id":"fresa","label":"Fresa","delta":0},
        {"id":"pasion","label":"Fruta de la pasión","delta":0},
        {"id":"frutos_rojos","label":"Frutos rojos","delta":0},
        {"id":"kiwi","label":"Kiwi","delta":0},
        {"id":"limon","label":"Limón","delta":0},
        {"id":"manzana_verde","label":"Manzana verde","delta":0}
      ]
    },
    "mojito_type": {
      "label": "Tipo de mojito",
      "multi": false,
      "choices": [
        {"id":"normal","label":"Normal (sin alcohol)","delta":0},
        {"id":"pepino","label":"Pepino (sin alcohol)","delta":0}
      ]
    },
    "coke_type": {
      "label": "Tipo",
      "multi": false,
      "choices": [
        {"id":"normal","label":"Coca Cola normal","delta":0},
        {"id":"zero","label":"Coca Cola sin azúcar","delta":0}
      ]
    },
    "iced_tea_flavor": {
      "label": "Sabor de té helado",
      "multi": false,
      "choices": [
        { "id": "durazno", "label": "Durazno", "delta": 0 },
        { "id": "frambuesa", "label": "Frambuesa", "delta": 0 },
        { "id": "mango", "label": "Mango", "delta": 0 }
      ]
    },
    "herbal_tea_type": {
      "label": "Tipo de té herbal",
      "multi": false,
      "choices": [
        { "id": "manzanilla", "label": "Manzanilla", "delta": 0 },
        { "id": "negro", "label": "Té negro", "delta": 0 },
        { "id": "menta", "label": "Menta", "delta": 0 }
      ]
    },
    "mix_frutos_rojos_topping": {
      "label": "Acompaña con",
      "multi": false,
      "choices": [
        { "id": "nutella", "label": "Nutella", "delta": 0 },
        { "id": "philadelphia", "label": "Philadelphia", "delta": 0 }
      ]
    },
    "smoothie_flavor": {
      "label": "Sabor de smoothie",
      "multi": false,
      "choices": [
        { "id": "blueberry", "label": "Blueberry", "delta": 0 },
        { "id": "frutos_rojos", "label": "Frutos rojos", "delta": 0 },
        { "id": "frutos_tropicales", "label": "Frutos tropicales", "delta": 0 },
        { "id": "fresa", "label": "Fresa", "delta": 0 },
        { "id": "fresa_kiwi", "label": "Fresa Kiwi", "delta": 0 },
        { "id": "pina_coco", "label": "Piña Coco", "delta": 0 },
        { "id": "mango", "label": "Mango", "delta": 0 }
      ]
    }
  },
  "categories": [
    {
      "name": "Baguettes",
      "emoji": "🥖",
      "items": [
        { "name": "Baguette Praliné", "emoji": "🥖", "price": 145, "ingredients": "Pechuga de pollo asada, tocino, manzana verde, queso manchego, almendra fileteada tostada, pepino, jitomate, aguacate y hojas de lechuga. *Con mayonesa*" },
        { "name": "Baguette Italiano", "emoji": "🥖", "price": 140, "ingredients": "Pechuga de pavo, peperoni, queso mozzarella, salsa italiana, aceitunas negras, jitomate, aguacate, pepino y hojas de lechuga." },
        { "name": "Baguette Carnes frías", "emoji": "🥖", "price": 95, "ingredients": "Jamón de pierna, tocino, pepperoni, queso manchego, jitomate, aguacate, pepino y hojas de lechuga. *Con mayonesa*" },
        { "name": "Baguette Jamón serrano", "emoji": "🥖", "price": 170, "ingredients": "Jamón serrano, queso manchego, pepino, jitomate, aguacate, hojas de espinaca y lechuga. *Con mayonesa*" },
        { "name": "Baguette Hawaiano", "emoji": "🥖🍍", "price": 115, "ingredients": "Jamón de pierna, tocino, piña a la parrilla, manchego, queso Philadelphia, jitomate, aguacate, pepino y hojas de lechuga." },
        { "name": "Baguette Pollo", "emoji": "🥖🐔", "price": 115, "ingredients": "Pechuga de pollo asada, queso manchego, pepino, jitomate, aguacate y hojas de lechuga. *Con mayonesa*" },
        { "name": "Baguette Pavo", "emoji": "🥖🦃", "price": 88, "ingredients": "Pechuga de pavo, queso panela, pepino, jitomate, aguacate y hojas de lechuga. *Con mayonesa*" }
      ]
    },
    {
      "name": "Sándwiches",
      "emoji": "🥪",
      "items": [
        { "name": "Sándwich Praliné", "emoji": "🥪", "price": 90, "ingredients": "Pan 7 granos, pechuga de pollo a la parrilla, tocino, manzana verde, queso manchego, almendra fileteada tostada, pepino, jitomate, aguacate y hojas de lechuga. *Con mayonesa*" },
        { "name": "Sándwich Italiano", "emoji": "🥪", "price": 80, "ingredients": "Pan 7 granos, pechuga de pavo, pepperoni, queso mozzarella, salsa italiana, aceitunas negras, jitomate, aguacate, pepino y hojas de lechuga." },
        { "name": "Sándwich Carnes frías", "emoji": "🥪", "price": 70, "ingredients": "Pan 7 granos, jamón de pierna, tocino, pepperoni, queso manchego, jitomate, aguacate, pepino y hojas de lechuga. *Con mayonesa*" },
        { "name": "Sándwich Atún", "emoji": "🥪🐟", "price": 80, "ingredients": "Pan 7 granos, atún, queso panela, pepino, jitomate, aguacate y hojas de lechuga. *Con mayonesa*" },
        { "name": "Sándwich Pollo", "emoji": "🥪🐔", "price": 80, "ingredients": "Pan 7 granos, pechuga de pollo a la parrilla, queso manchego, pepino, jitomate, aguacate y hojas de lechuga. *Con mayonesa*" },
        { "name": "Sándwich Tostado de queso", "emoji": "🧀", "price": 85, "ingredients": "Pan 7 granos tostado ligeramente en mantequilla, jamón de pierna, queso manchego, queso mozzarella y queso philadelphia." },
        { "name": "Sándwich Pavo", "emoji": "🥪", "price": 70, "ingredients": "Pan 7 granos, pechuga de pavo, queso panela, pepino, jitomate, aguacate y hojas de lechuga. *Con mayonesa*" }
      ]
    },
    {
      "name": "Ensaladas",
      "emoji": "🥗",
      "items": [
        { "name": "Ensalada Frutal", "emoji": "🥗🍓", "price": 145, "ingredients": "Pavo, queso panela, kiwi, durazno, fresa, arándanos, pepino, nuez y hojas de lechuga. Incluye crotones.", "optionSets": ["dressing"] },
        { "name": "Ensalada Praliné", "emoji": "🥗", "price": 130, "ingredients": "Pollo a la parrilla, tocino, queso panela, almendra fileteada, manzana verde, jitomate, pepino, y hojas de lechuga. Incluye crotones.", "optionSets": ["dressing"] }
      ]
    },
    {
      "name": "Crepas",
      "emoji": "🫓",
      "items": [
        { "name": "1 ingrediente", "emoji": "🫓", "price": 60, "ingredients": "Selecciona 1 ingrediente de la lista.", "optionSets": ["crepe_1"] },
        { "name": "Helada (2 ingredientes)", "emoji": "🍨", "price": 100, "ingredients": "Elige 2 ingredientes; incluye helado de vainilla y crema batida (excepto manzana verde).", "optionSets": ["crepe_helada"] },
        { "name": "Crepa de 3 quesos", "emoji": "🧀", "price": 85, "ingredients": "Queso mozzarella, queso manchego y queso Philadelphia." },
        { "name": "Champiñones con queso", "emoji": "🍄🧀", "price": 90, "ingredients": "Champiñones, queso manchego y queso Philadelphia." },
        { "name": "Crepizza", "emoji": "🍕", "price": 85, "ingredients": "Queso mozzarella, salsa italiana, pepperoni y jamón de pierna." },
        { "name": "Hawaiana", "emoji": "🍍", "price": 85, "ingredients": "Jamón de pierna, piña, queso Philadelphia y queso manchego." },
        { "name": "Pepperoni con queso", "emoji": "🍕🧀", "price": 85, "ingredients": "Pepperoni, queso Philadelphia y queso manchego." },
        { "name": "Tradicional", "emoji": "🧀", "price": 70, "ingredients": "Jamón de pierna, queso Philadelphia y queso manchego." },
        { "name": "Pavo", "emoji": "🦃", "price": 85, "ingredients": "Philadelphia, Pechuga de pavo, hojas de espinaca y arándanos." },
        { "name": "Especial Praliné", "emoji": "⭐🍌🍓", "price": 120, "ingredients": "Nutella, fresas, durazno, plátano, helado de vainilla, crema batida y lechera." },
        { "name": "Mix de frutos rojos*", "emoji": "🍓🫐", "price": 75, "ingredients": "Compota de Mix de frutos rojos acompañada por alguno de estos ingredientes NUTELLA ó PHILADELPHIA", "optionSets": ["mix_frutos_rojos_topping"] },
        { "name": "Manzana cremosa y canela", "emoji": "🍏✨", "price": 85, "ingredients": "Manzana verde caramelizada, queso Philadelphia, toque de canela y lechera." },
        { "name": "Philadelphia y zarzamora", "emoji": "🧀🍇", "price": 65, "ingredients": "" },
        { "name": "Philadelphia y fresa natural", "emoji": "🧀🍓", "price": 90, "ingredients": "" },
        { "name": "Philadelphia y durazno", "emoji": "🧀🍑", "price": 80, "ingredients": "" },
        { "name": "Philadelphia y cajeta", "emoji": "🧀🍮", "price": 80, "ingredients": "" },
        { "name": "Nutella y fresa natural", "emoji": "🍫🍓", "price": 90, "ingredients": "" },
        { "name": "Nutella y durazno", "emoji": "🍫🍑", "price": 80, "ingredients": "" },
        { "name": "Nutella nuez", "emoji": "🍫🌰", "price": 80, "ingredients": "" },
        { "name": "Nutella plátano", "emoji": "🍫🍌", "price": 68, "ingredients": "" },
        { "name": "Nutella y almendra tostada", "emoji": "🍫🌰", "price": 75, "ingredients": "" },
        { "name": "Cajeta y fresa", "emoji": "🍮🍓", "price": 90, "ingredients": "" },
        { "name": "Cajeta y nuez", "emoji": "🍮🌰", "price": 75, "ingredients": "" },
        { "name": "Cajeta y almendra tostada", "emoji": "🍮🌰", "price": 65, "ingredients": "" },
        { "name": "Philadelphia y Nutella", "emoji": "🍫🧀", "price": 85, "ingredients": "" }
      ]
    },
    {
      "name": "Café",
      "emoji": "☕",
      "items": [
        { "name": "Americano", "emoji": "☕", "price": 40, "ingredients": "Agua y 2 expresos." },
        { "name": "Breve", "emoji": "☕🥛", "price": 60, "ingredients": "Leche acremada, un expreso y crema batida.", "optionSets": ["milk"] },
        { "name": "Caramel", "emoji": "☕🍯", "price": 60, "ingredients": "Leche acremada, caramelo y un expreso.", "optionSets": ["milk"] },
        { "name": "Hawaiano", "emoji": "☕🍍", "price": 72, "ingredients": "Leche acremada, un expreso y saborizante de coco.", "optionSets": ["milk"] },
        { "name": "Irlandés*", "emoji": "☕🥃", "price": 80, "ingredients": "Un expreso, whisky, Bailey’s y crema batida." },
        { "name": "Lágrima", "emoji": "🥛☕", "price": 52, "ingredients": "Leche acremada y medio expreso.", "optionSets": ["milk"] },
        { "name": "Latte", "emoji": "☕🥛", "price": 55, "ingredients": "Leche acremada y un expreso.", "optionSets": ["milk"] },
        { "name": "Latte Chai", "emoji": "🫖☕", "price": 75, "ingredients": "Leche acremada, chai y un expreso.", "optionSets": ["milk"] },
        { "name": "Moka", "emoji": "☕🍫", "price": 60, "ingredients": "Leche acremada, chocolate y un expreso.", "optionSets": ["milk"] },
        { "name": "Moka Menta", "emoji": "☕🌿", "price": 65, "ingredients": "Leche acremada, chocolate, menta, un expreso, crema batida y chispas de chocolate.", "optionSets": ["milk"] },
        { "name": "Capuchino Tradicional", "emoji": "☕", "price": 55, "ingredients": "Leche espumada, un expreso y un toque de canela.", "optionSets": ["milk"] },
        { "name": "Capuchino de Sabor", "emoji": "☕🍒", "price": 60, "ingredients": "Capuchino de cajeta, cereza, menta o vainilla.", "optionSets": ["milk","cap_sabor"] },
        { "name": "Capuchino de Licor", "emoji": "☕🥃", "price": 70, "ingredients": "Capuchino con licor a elegir.", "optionSets": ["milk","cap_licor"] },
        { "name": "Capuchino Avellana/Macadamia", "emoji": "☕🌰", "price": 72, "ingredients": "Capuchino con jarabe de avellana o macadamia.", "optionSets": ["milk","cap_nut"] }
      ]
    },
    {
      "name": "Chocolate",
      "emoji": "🍫",
      "items": [
        { "name": "Chocoavellana", "emoji": "🍫🌰", "price": 85, "ingredients": "Chocolate caliente con toque de avellana, crema batida, nuez y un chocolate Ferrero.", "optionSets": ["milk"] },
        { "name": "Chocokids*", "emoji": "🍫🧁", "price": 65, "ingredients": "Chocolate caliente, crema batida y mini malvaviscos.", "optionSets": ["milk"] },
        { "name": "Submarino", "emoji": "🍫", "price": 55, "ingredients": "Chocolate semiamargo caliente.", "optionSets": ["milk"] },
        { "name": "Submarino blanco", "emoji": "🍫⚪", "price": 60, "ingredients": "Chocolate blanco caliente.", "optionSets": ["milk"] }
      ]
    },
    {
      "name": "Tisanas",
      "emoji": "🫖",
      "items": [
        { "name": "Tisana", "emoji": "🫖", "price": 65, "ingredients": "Infusión de frutos deshidratados.", "optionSets": ["tisana_flavor"] }
      ]
    },
    {
      "name": "Té",
      "emoji": "🍵",
      "items": [
        { "name": "Infusión herbal", "emoji": "🍵", "price": 35, "ingredients": "Selecciona el sabor.", "optionSets": ["tea_flavor"] }
      ]
    },
    {
      "name": "Malteadas",
      "emoji": "🥤",
      "items": [
        { "name": "Malteada de Chocolate", "emoji": "🥤🍫", "price": 80, "ingredients": "Base de helado, leche y chocolate.", "optionSets": ["milk"] },
        { "name": "Malteada de Fresa", "emoji": "🥤🍓", "price": 80, "ingredients": "Base de helado, leche y fresa.", "optionSets": ["milk"] },
        { "name": "Malteada de Vainilla", "emoji": "🥤🍨", "price": 80, "ingredients": "Base de helado, leche y vainilla.", "optionSets": ["milk"] },
        { "name": "Malteada de Café", "emoji": "🥤☕", "price": 85, "ingredients": "Base de helado y café.", "optionSets": ["milk"] },
        { "name": "Malteada de Oreo", "emoji": "🥤🍪", "price": 85, "ingredients": "Base de helado y Oreo.", "optionSets": ["milk"] },
        { "name": "Malteada de Rompope", "emoji": "🥤🥃", "price": 85, "ingredients": "Base de helado y rompope.", "optionSets": ["milk"] },
        { "name": "Malteada de Nutella", "emoji": "🥤🍫", "price": 88, "ingredients": "Base de helado y Nutella.", "optionSets": ["milk"] }
      ]
    },
    {
      "name": "Frappuchino",
      "emoji": "🧋",
      "items": [
        { "name": "Frappuchino Matcha (sin café)", "emoji": "🍵", "price": 85, "ingredients": "Hielo, leche y matcha.", "optionSets": ["milk"] },
        { "name": "Frappuchino Taro (sin café)", "emoji": "🟣", "price": 90, "ingredients": "Hielo, leche y taro.", "optionSets": ["milk"] },
        { "name": "Frappuchino Baileys", "emoji": "🥃", "price": 90, "ingredients": "Hielo, leche, café y Baileys.", "optionSets": ["milk"] },
        { "name": "Frappuchino Nutella", "emoji": "🍫", "price": 90, "ingredients": "Hielo, leche, café y Nutella.", "optionSets": ["milk"] },
        { "name": "Frappuchino de Moka", "emoji": "🍫☕", "price": 75, "ingredients": "Hielo, leche, café y chocolate.", "optionSets": ["milk"] },
        { "name": "Frappuchino Chocolate Blanco", "emoji": "⚪🍫", "price": 75, "ingredients": "Hielo, leche, café y chocolate blanco.", "optionSets": ["milk"] },
        { "name": "Frappuchino Oreo", "emoji": "🍪", "price": 75, "ingredients": "Hielo, leche, café y Oreo.", "optionSets": ["milk"] },
        { "name": "Frappuchino Caramelo", "emoji": "🍯", "price": 68, "ingredients": "Hielo, leche, café y caramelo.", "optionSets": ["milk"] },
        { "name": "Frappuchino Mazapán", "emoji": "🥜", "price": 68, "ingredients": "Hielo, leche, café y mazapán.", "optionSets": ["milk"] },
        { "name": "Frappuchino Tradicional", "emoji": "🧋", "price": 60, "ingredients": "Hielo, leche y café.", "optionSets": ["milk"] }
      ]
    },
    {
      "name": "Bubble Tea",
      "emoji": "🧋",
      "items": [
        { "name": "Chai", "emoji": "🧋", "price": 90, "ingredients": "Base de té con leche, perlas (tapioca) y chai.", "optionSets": ["milk","bubble_flavor"] },
        { "name": "Herbal", "emoji": "🧋🍵", "price": 70, "ingredients": "Infusión con jellies/perlas.", "optionSets": ["herbal_tea_type","bubble_flavor"] }
      ]
    },
    {
      "name": "Smoothies",
      "emoji": "🍓",
      "items": [
        { "name": "Smoothie", "emoji": "🍓", "price": 75, "ingredients": "Fruta, hielo, yogurt y leche.", "optionSets": ["milk", "smoothie_flavor"] }
      ]
    },
    {
      "name": "Granizados",
      "emoji": "🧊",
      "items": [
        { "name": "Frutas tropicales", "emoji": "🍧", "price": 65, "ingredients": "Base de fruta natural, hielo y jarabe." },
        { "name": "Mango", "emoji": "🥭🍧", "price": 65, "ingredients": "Mango, hielo y jarabe." }
      ]
    },
    {
      "name": "Té Helado",
      "emoji": "🧊🍵",
      "items": [
        { "name": "Té Helado", "emoji": "🧊🍵", "price": 72, "ingredients": "Té helado sabor a elegir.", "optionSets": ["iced_tea_flavor"] }
      ]
    },
    {
      "name": "Sodas Italianas",
      "emoji": "🥤🧊",
      "items": [
        { "name": "Soda Italiana", "emoji": "🥤", "price": 65, "ingredients": "Agua mineral con jarabe del sabor elegido.", "optionSets": ["soda_flavor"] }
      ]
    },
    {
      "name": "Otras Bebidas",
      "emoji": "🥤",
      "items": [
        { "name": "Mojito", "emoji": "🍹", "price": 70, "ingredients": "Lima, hierbabuena y soda (sin alcohol).", "optionSets": ["mojito_type"] },
        { "name": "Agua embotellada", "emoji": "💧", "price": 15, "ingredients": "Agua purificada." },
        { "name": "Peñafiel", "emoji": "🫗", "price": 35, "ingredients": "Agua mineral." },
        { "name": "Coca Cola", "emoji": "🥤", "price": 42, "ingredients": "Refresco en botella.", "optionSets": ["coke_type"] }
      ]
    },
    {
      "name": "Postres",
      "emoji": "🍰",
      "note": "Preguntar por disponibilidad del día.",
      "items": [
        { "name": "Pastel de chocolate", "emoji": "🍫🍰", "price": 70, "ingredients": "Rebanada." },
        { "name": "Pastel 3 chocolates", "emoji": "🍫3️⃣", "price": 75, "ingredients": "Rebanada." },
        { "name": "Pastel de cajeta con nuez", "emoji": "🍮🌰", "price": 70, "ingredients": "Rebanada." },
        { "name": "Pastel de fresa", "emoji": "🍓🍰", "price": 70, "ingredients": "Rebanada." },
        { "name": "Pastel de rompope", "emoji": "🥃🍰", "price": 75, "ingredients": "Rebanada." },
        { "name": "Pastel de zanahoria", "emoji": "🥕🍰", "price": 75, "ingredients": "Rebanada." },
        { "name": "Cheesecake", "emoji": "🧀🍰", "price": 80, "ingredients": "Rebanada." },
        { "name": "Cupcakes", "emoji": "🧁", "price": 25, "ingredients": "Unidad." },
        { "name": "Macarons", "emoji": "🍪", "price": 28, "ingredients": "Unidad." },
        { "name": "Tartas de manzana con helado de vainilla", "emoji": "🥧🍨", "price": 70, "ingredients": "Tarta + bola de vainilla." },
        { "name": "Panqué de plátano + café americano", "emoji": "🍌🍞☕", "price": 70, "ingredients": "Combo." },
        { "name": "Panqué de plátano", "emoji": "🍌🍞", "price": 45, "ingredients": "Rebanada." },
        { "name": "Affogato (helado + café)", "emoji": "🍨☕", "price": 50, "ingredients": "Helado de vainilla con expreso." }
      ]
    }
  ],
  "footer_note": "Todos nuestros precios contienen IVA y están sujetos a disponibilidad y cambios sin previo aviso. Todo cambio en los alimentos y bebidas tiene un costo extra."
};