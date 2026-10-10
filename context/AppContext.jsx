'use client';
import { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { T } from '@/data/i18n';
import { load, save } from '@/lib/storage';

const Ctx = createContext(null);
export const useApp = () => useContext(Ctx);

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [muted, setMuted] = useState(false);
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(null); // null | 'guestbook' | { project: index }
  const [entries, setEntries] = useState([]);
  const [toastMsg, setToastMsg] = useState('');
  const timer = useRef();

  useEffect(() => { setTheme(load('theme', 'dark')); setEntries(load('gb', [])); }, []);
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);

  const toast = useCallback((msg) => {
    setToastMsg(msg);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToastMsg(''), 2200);
  }, []);

  const t = (key) => T.en[key];
  const toggleTheme = () => setTheme((x) => { const n = x === 'dark' ? 'light' : 'dark'; save('theme', n); return n; });
  const toggleMuted = () => { toast(muted ? 'Audio on' : 'Audio muted'); setMuted(!muted); };
  const addEntry = (name, message) => {
    const next = [{ n: name, m: message, d: new Date().toLocaleDateString('en-GB') }, ...entries];
    setEntries(next); save('gb', next); toast('Thanks for signing!');
  };

  return (
    <Ctx.Provider value={{ theme, muted, menu, setMenu, modal, setModal, entries, addEntry, toastMsg, toast, t, toggleTheme, toggleMuted,
      openGuestbook: () => { setMenu(false); setModal('guestbook'); }, closeModal: () => setModal(null) }}>
      {children}
    </Ctx.Provider>
  );
}
