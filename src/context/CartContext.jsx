/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

function loadCart() {
  try { return JSON.parse(localStorage.getItem('fda_cart') || '[]'); }
  catch { return []; }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const exists = state.find(i => i.name === action.name);
      if (exists) return state.map(i => i.name === action.name ? { ...i, qty: i.qty + 1 } : i);
      return [...state, { name: action.name, price: action.price, qty: 1 }];
    }
    case 'REMOVE':
      return state.filter(i => i.name !== action.name);
    case 'UPDATE_QTY': {
      const next = state.map(i => i.name === action.name ? { ...i, qty: i.qty + action.delta } : i);
      return next.filter(i => i.qty > 0);
    }
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart);

  useEffect(() => {
    try { localStorage.setItem('fda_cart', JSON.stringify(items)); }
    catch (e) { console.error('Fiorelle: falha ao salvar carrinho', e); }
  }, [items]);

  const totalQty  = items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = items.reduce((s, i) => s + i.price * i.qty, 0);

  const addItem    = (name, price) => dispatch({ type: 'ADD', name, price });
  const removeItem = (name)        => dispatch({ type: 'REMOVE', name });
  const updateQty  = (name, delta) => dispatch({ type: 'UPDATE_QTY', name, delta });
  const clearCart  = ()            => dispatch({ type: 'CLEAR' });

  return (
    <CartContext.Provider value={{ items, totalQty, totalPrice, addItem, removeItem, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
