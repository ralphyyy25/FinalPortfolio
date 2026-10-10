'use client';
import { useApp } from '@/context/AppContext';

export default function MobileMenu() {
  const { menu, setMenu, openGuestbook, toggleTheme, toggleMuted, muted } = useApp();
  const close = () => setMenu(false);
  return (
    <div className={`mm${menu ? ' open' : ''}`}>
      <button className="x ib" onClick={close} aria-label="Close menu">✕</button>
      <a href="#home" onClick={close}>Home</a>
      <a href="#about" onClick={close}>About</a>
      <a href="#projects" onClick={close}>Projects</a>
      <a href="#" onClick={(e) => { e.preventDefault(); openGuestbook(); }}>Guestbook</a>
      <a href="#contact" onClick={close}>Contact</a>
      <div className="ctl" style={{ marginTop: 'auto' }}>
        <button className="ib" onClick={toggleTheme} aria-label="Toggle theme">◐</button>
        <button className="ib" onClick={toggleMuted} aria-label={muted ? 'Unmute audio' : 'Mute audio'}>{muted ? '🔇' : '🔊'}</button>
      </div>
    </div>
  );
}
