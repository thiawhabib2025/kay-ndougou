const fs = require('fs');
const path = require('path');

const demoData = {
  products: [
    { id: 'tomates', name: 'Tomates', pricePerKg: 850, stockKg: 12 },
    { id: 'oignons', name: 'Oignons', pricePerKg: 500, stockKg: 18 },
    { id: 'pommes-de-terre', name: 'Pommes de terre', pricePerKg: 700, stockKg: 16 },
    { id: 'carottes', name: 'Carottes', pricePerKg: 550, stockKg: 14 },
    { id: 'choux', name: 'Choux', pricePerKg: 450, stockKg: 20 },
    { id: 'aubergines', name: 'Aubergines', pricePerKg: 620, stockKg: 9 },
    { id: 'navets', name: 'Navets', pricePerKg: 480, stockKg: 11 },
    { id: 'poivrons', name: 'Poivrons', pricePerKg: 750, stockKg: 10 },
    { id: 'piments', name: 'Piments', pricePerKg: 800, stockKg: 7 },
    { id: 'ail', name: 'Ail', pricePerKg: 900, stockKg: 8 },
    { id: 'persil', name: 'Persil', pricePerKg: 650, stockKg: 6 },
    { id: 'condiments-mixtes', name: 'Condiments mixtes', pricePerKg: 1200, stockKg: 5 }
  ],
  deliveryZones: [
    { name: 'Dakar centre', fee: 1500 },
    { name: 'Grand Dakar', fee: 2200 },
    { name: 'Autre ville', fee: 3000 }
  ]
};

const file = path.join(__dirname, '..', 'data', 'demo-data.json');
fs.mkdirSync(path.dirname(file), { recursive: true });
fs.writeFileSync(file, JSON.stringify(demoData, null, 2));
console.log('Demo data written to', file);
