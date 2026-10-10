'use client';
import { useApp } from '@/context/AppContext';

const svg = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };

export default function Navbar() {
  const { t, theme, toggleTheme, muted, toggleMuted, setMenu, openGuestbook } = useApp();
  return (
    <nav>
      <div className="nw">
        <a href="#home" aria-label="Home" style={{ fontSize: 20, fontWeight: 700, lineHeight: 1 }}>ralph.zxc</a>
        <div className="links">
          <a href="#home">{t('n1')}</a>
          <a href="#about">{t('n2')}</a>
          <a href="#projects">{t('n3')}</a>
          <a href="#" onClick={(e) => { e.preventDefault(); openGuestbook(); }}>Guestbook</a>
          <a href="#contact">{t('n6')}</a>
        </div>
        <div className="ctl">
          <button className="ib hd" onClick={toggleMuted} aria-label={muted ? 'Unmute audio' : 'Mute audio'}>
            <svg {...svg}>
              <path d="M11 5 6 9H2v6h4l5 4z" />
              {muted ? <path d="m22 9-6 6M16 9l6 6" /> : <><path d="M16 9a5 5 0 0 1 0 6" /><path d="M19.4 18.4a9 9 0 0 0 0-12.8" /></>}
            </svg>
          </button>
          <button className="ib hd" onClick={toggleTheme} aria-label="Toggle theme">
            <svg {...svg}>
              {theme === 'dark'
                ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>
                : <path d="M20 15A9 9 0 1 1 9 4a7 7 0 0 0 11 11z" />}
            </svg>
          </button>
          <button className="ib burger" onClick={() => setMenu(true)} aria-label="Open menu">
            <svg {...svg} width={24} height={24}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
