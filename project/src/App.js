import React from 'react';
import './App.css';

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

  return React.createElement('div', { className: 'container' },
    React.createElement('div', { className: 'background-element' }),
    React.createElement('div', { className: 'highlight-window' },
    React.createElement('div', { className: 'highlight-overlay' })),
    React.createElement('div', { className: 'window' },
    React.createElement('div', { className: 'main-content' },
    React.createElement('h2', null, item.brand),
    React.createElement('h1', null, item.title),
    React.createElement('h3', null, item.description),
    React.createElement('div', { className: 'description' }, item.descriptionFull),
    React.createElement('div', { className: 'highlight-window mobile' },
    React.createElement('div', { className: 'highlight-overlay' })),
    React.createElement('div', { className: 'devider' }),
    React.createElement('div', { className: 'purchase-info' },
    React.createElement('div', { className: 'price' }, `${item.currency}${item.price.toFixed(2)}`),
    React.createElement('button', null, 'Добавить в корзину')),
    )),
  );
}

export default App;
